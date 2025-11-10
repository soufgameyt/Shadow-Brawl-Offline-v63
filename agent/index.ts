import Hooks from "./Manager/Hooks.js";
import Debugger from "./Utils/Debugger.js";
import Environment from "./Environement/Environment.js";
import EnvironmentManager from "./Environement/EnvironmentManager.js";
import OfflineBattles from "./Battles/OfflineBattles.js";
import ResourceListener from "./Utils/Game/AddFile.js";
import LogicPlayerData from "./Configuration/LogicPlayerData.js";

class ShadowBrawlOffline {
    static Init() {
        Debugger.Debug("[+][ShadowBrawlOffline::Init] Initialising Environement");
        Environment.Init();
        EnvironmentManager.InitEnvironment();
        Debugger.Debug("[+][ShadowBrawlOffline::Init] Initialised Environement!");
        Debugger.Debug("[+][ShadowBrawlOffline::Init] Installing Hooks");
        Hooks.InstallHooks();
        Debugger.Debug("[+][ShadowBrawlOffline::Init] Installed Hooks!");
        Debugger.Debug("[+][ShadowBrawlOffline::Init] Loading Config");
        LogicPlayerData.Load();
        Debugger.Debug("[+][ShadowBrawlOffline::Init] Loaded Config!");
        // OfflineBattles.Init();
        ResourceListener.AddFile("sc/debug.sc");
    }
}

ShadowBrawlOffline.Init();