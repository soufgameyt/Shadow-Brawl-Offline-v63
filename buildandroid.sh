#!/usr/bin/env bash
# thx gpt

set -eo pipefail

# ════ CONFIG ════
REMOTE_RAW_URL="https://raw.githubusercontent.com/soufgameyt/Shadow-Brawl-Offline-v63/main/version.json"
ZIP_URL="https://github.com/soufgameyt/Shadow-Brawl-Offline-v63/archive/refs/heads/main.zip"
LOCAL_FILE="./version.json"
APP_PATH="daniillnull.nulls.brawlstars"
ACTIVITY="com.supercell.brawlstars.GameApp"
FRIDA_TARGET="Null’s Brawl"
AGENT_FILE="_agent.js"

# ════ COLORS ════
CYAN=$'\033[96;1m'
YELLOW=$'\033[93;1m'
RED=$'\033[91;1m'
RESET=$'\033[0m'

PREFIX_BUILD="[INFO] [ShadowBrawlOffline::Build]"
PREFIX_UPDATE="[INFO] [ShadowBrawlOffline::UpdateChecker]"

# ════ LOG HELPERS ════
log()       { printf "%s%s %s%s\n" "$CYAN" "$PREFIX_BUILD" "$*" "$RESET"; }
updatelog() { printf "%s%s %s%s\n" "$CYAN" "$PREFIX_UPDATE" "$*" "$RESET"; }
warn()      { printf "%s%s %s%s\n" "$YELLOW" "$PREFIX_UPDATE" "$*" "$RESET"; }
error()     { printf "%s%s %s%s\n" "$RED" "$PREFIX_UPDATE" "$*" "$RESET"; }
fatal()     { printf "%s%s ❌ Error: %s%s\n" "$RED" "$PREFIX_BUILD" "$*" "$RESET"; exit 1; }

# ════ FETCH REMOTE VERSION ════
updatelog "Fetching version from GitHub..."
remote_json=$(curl -fsSL "$REMOTE_RAW_URL") || fatal "Failed to fetch remote version.json."
[[ -z "$remote_json" ]] && fatal "Remote version.json empty."

[[ ! -f "$LOCAL_FILE" ]] && fatal "Local file $LOCAL_FILE not found."
local_json=$(cat "$LOCAL_FILE")

extract_version() {
  local json="$1"
  if command -v jq >/dev/null 2>&1; then
    echo "$json" | jq -r '.version // empty'
  elif command -v python3 >/dev/null 2>&1; then
    python3 -c 'import sys,json; print(json.load(sys.stdin).get("version",""))' <<<"$json"
  else
    echo "$json" | sed -nE 's/.*"version"[[:space:]]*:[[:space:]]*"([^"]+)".*/\1/p'
  fi
}

local_version=$(extract_version "$local_json")
remote_version=$(extract_version "$remote_json")
[[ -z "$local_version" ]] && fatal "Could not parse local version.json"
[[ -z "$remote_version" ]] && fatal "Could not parse remote version.json"

semver_score() {
  local v="${1#v}"
  IFS='.' read -r maj min patch _ <<<"$v"
  maj=${maj:-0} min=${min:-0} patch=${patch:-0}
  echo $((maj*10000 + min*100 + patch))
}

local_score=$(semver_score "$local_version")
remote_score=$(semver_score "$remote_version")
diff=$((remote_score - local_score))

# ════ LOG VERSION STATUS ════
if (( diff == 0 )); then
  updatelog "Local version: $local_version"
  updatelog "Remote version: $remote_version"
  updatelog "You're on the latest version!"
elif (( diff == 1 )); then
  warn "Local version: $local_version"
  warn "Remote version: $remote_version"
  warn "A new version is available!"
else
  error "Local version: $local_version"
  error "Remote version: $remote_version"
  error "Multiple versions ahead! Update recommended."
fi

# ════ BACKUP & UPDATE IF OUTDATED ════
if (( diff > 0 )); then
  read -rp "$(printf "%s%s Do you want to backup your current version before updating? (if you made modifications) [y/N]: %s" "$CYAN" "$PREFIX_BUILD" "$RESET")" backup_choice
  if [[ "$backup_choice" =~ ^[Yy]$ ]]; then
    timestamp=$(date +"%Y%m%d_%H%M%S")
    backup_dir="backup_$timestamp"
    mkdir -p "$backup_dir"
    cp -r ./* "$backup_dir"
    log "Backup created at $backup_dir"
  else
    warn "Skipping backup. Your modifications may be lost!"
  fi

  # download latest zip
  tmp_zip="$(mktemp).zip"
  updatelog "Downloading latest ZIP from GitHub..."
  curl -L -o "$tmp_zip" "$ZIP_URL" || fatal "Failed to download ZIP"

  updatelog "Unzipping..."
  unzip -o "$tmp_zip" -d tmp_update >/dev/null || fatal "Failed to unzip"

  # move files over
  updatelog "Replacing files..."
  shopt -s dotglob
  cp -r tmp_update/*/* ./ || fatal "Failed to copy files"
  rm -rf tmp_update "$tmp_zip"

  updatelog "Update complete! Local version is now $remote_version"
  exit 0
fi

# ════ BUILD & RUN IF UP-TO-DATE ════
if command -v npm >/dev/null 2>&1; then
  log "Building..."
  npm install
else
  log "⚠️ npm not found — skipping build."
fi

if adb shell pm list packages | grep -q $APP_PATH >/dev/null 2>&1; then
  log "Opening Brawl Stars..."
  adb shell am start -n "$APP_PATH/$ACTIVITY" || log "⚠️ Failed to open app."
else
  log "⚠️ App not found at $APP_PATH"
fi

if command -v frida >/dev/null 2>&1; then
  log "Starting frida..."
  frida -U "$FRIDA_TARGET" -l "$AGENT_FILE"
else
  fatal "frida not found in PATH."
fi