import ByteStream from "../../../../DataStream/ByteStream.js";
import LogicClientHome from "./LogicClientHome/LogicClientHome.js";
import LogicClientAvatar from "./LogicClientAvatar/LogicClientAvatar.js";
import player from "../../../../Configuration/LogicPlayerData.js";

class OwnHomeDataMessage {
    static encode(): number[] {
        let stream = new ByteStream([]);

        stream.WriteVInt(1742083699); // Timestamp
        stream.WriteVInt(684932114); // Timestamp

        // LogicDailyData::encode
        stream.WriteVInt(2025074); // Timestamp
        stream.WriteVInt(28301); // Timer For Region Change

        stream.WriteVInt(70000); // Highest Trophies
        stream.WriteVInt(70000); // Highest Trophies
        stream.WriteVInt(70000); // Highest Trophies
        stream.WriteVInt(1); // Trophy Road Tier
        stream.WriteVInt(1); // Experience Level
        stream.WriteDataReference(28, 0); // Thumbnail
        stream.WriteDataReference(43, 0); // Name Changer

        stream.WriteVInt(26);
        for (let x = 0; x < 26; x++) {
            stream.WriteVInt(x);
        }

        stream.WriteVInt(0)

        stream.WriteVInt(0);

        stream.WriteVInt(0);

        stream.WriteVInt(0);

        stream.WriteVInt(0);

        stream.WriteVInt(0);

        stream.WriteVInt(0); // Leaderboard Region |
        stream.WriteVInt(70000); // Trophy Road Highest Trophies
        stream.WriteVInt(0); // Tokens Used in Battles
        stream.WriteVInt(1); // Control Mode
        stream.WriteBoolean(true); // Battle Hints
        stream.WriteVInt(19500); // Tokens Doubler
        stream.WriteVInt(111111); // Power Play Timer
        stream.WriteVInt(1375134); // Trophies Season Reset Timer
        stream.WriteVInt(0); // Pro Pass Season Timer
        stream.WriteVInt(1375134); // Brawl Pass Season Timer

        stream.WriteVInt(200); // Starpower Drop
        stream.WriteVInt(200); // Gadget Drop
        stream.WriteVInt(0); // Rarity Count

        stream.WriteBoolean(true);
        stream.WriteVInt(2); // Token Doubler New Tag State
        stream.WriteVInt(2); // Event Tickets New Tag State
        stream.WriteVInt(2); // Coin Packs New Tag State
        stream.WriteVInt(0); // Change Name Cost
        stream.WriteVInt(0); // Timer For the Next Name Change
        stream.WriteVInt(0); // ?

        // LogicOfferBundle::encode
        stream.WriteVInt(0); // Shop Offers Count
        stream.WriteVInt(20);
        stream.WriteVInt(1428);

        stream.WriteVInt(0);

        stream.WriteVInt(1);
        stream.WriteVInt(30);

        stream.WriteByte(1); // Selected Brawler
        stream.WriteDataReference(16, 1);

        stream.WriteString("EN"); // Location
        stream.WriteString("haccysouf"); // Supported Content Creator

        // IntValueEntry::encode
        stream.WriteVInt(15);
        stream.WriteDataReference(2, 1); // Unknown
        stream.WriteDataReference(9, 1); // Show Star Points
        stream.WriteDataReference(10, 0); // Power Play Trophies Gained
        stream.WriteDataReference(12, 1); // Unknown
        stream.WriteDataReference(14, 0); // Coins Gained
        stream.WriteDataReference(16, 1);
        stream.WriteDataReference(17, 0); // Team Chat Muted
        stream.WriteDataReference(18, 1); // Esport Button
        stream.WriteDataReference(19, 0); // Champion Ship Lives Buy Popup
        stream.WriteDataReference(21, 1); // Looking For Team State
        stream.WriteDataReference(22, 1);
        stream.WriteDataReference(23, 0); // Club Trophies Gained
        stream.WriteDataReference(24, 1); // Have already watched club league stupid animation
        stream.WriteDataReference(32447, 28);
        stream.WriteDataReference(16, 5);
        // Added IntValueEntry::encode

        // CooldownEntry::encode
        stream.WriteVInt(0); // CooldownEntry::encode
        // Added CooldownEntry::encode

        // BrawlPassSeasonData::encode
        stream.WriteVInt(0);
        // Added BrawlPassSeasonData::encode

        // LogicQuests::encode
        stream.WriteBoolean(true);
        stream.WriteVInt(0); // Quests Count
        stream.WriteVInt(0); // ?
        stream.WriteVInt(0); // ?
        stream.WriteVInt(0); // ?
        // Added LogicQuests::encode

        // VanityItems::encode
        stream.WriteBoolean(true); // Vanity items
        stream.WriteVInt(0)
        // Added VanityItems::encode

        // LogicPlayerRankedSeasonData::encode
        stream.WriteBoolean(false); // LogicPlayerRankedSeasonData::encode

        stream.WriteInt(0);
        stream.WriteVInt(0);
        stream.WriteDataReference(16, 1); // Favorite Brawler
        stream.WriteBoolean(false); // LogicRewards::encode
        stream.WriteVInt(-1);
        stream.WriteVInt(0);
        stream.WriteVInt(832099);
        stream.WriteVInt(1616899);
        stream.WriteVInt(10659101);
        stream.WriteVInt(0);

        // CompetitivePassSeasonData::encode
        stream.WriteVInt(0);
        stream.WriteVInt(0); // Pro Pass

        stream.WriteDataReference(2, 333);
        stream.WriteDataReference(2, 347);
        stream.WriteDataReference(2, 334);
        stream.WriteDataReference(2, 335);

        stream.WriteBoolean(false);

        // Added EsportsButtonStateData::encode
        stream.WriteDataReference(2, 351);
        stream.WriteVInt(770); // LogicDailyData::encode
        stream.WriteBoolean(false);
        stream.WriteBoolean(false);

        stream.WriteVInt(2025074);

        stream.WriteVInt(40); // event slot id
        for (let EventID = 0; EventID < 40; EventID++) {
            stream.WriteVInt(EventID);
        }

        stream.WriteVInt(0); // Added EventData array count (a1[9])
        stream.WriteVInt(0); // Added EventData array count (a1[13])
        stream.WriteVInt(0); // Added EventData array count (a1[17])

        stream.WriteVInt(0); // Added EventData array count (a1[9])
        stream.WriteVInt(0); // Added EventData array count (a1[13])
        stream.WriteVInt(0); // Added EventData array count (a1[17])

        stream.WriteVInt(0); // Added ReleaseEntry array count (a1[37])
        stream.WriteVInt(6);
        for (let i = 0; i < 1; i++) {
            stream.WriteDataReference(41000140, 1); // ThemeID
            stream.WriteDataReference(89, 6);
            stream.WriteDataReference(22, 0);
            stream.WriteDataReference(36, 1);
            stream.WriteDataReference(73, 1);
            stream.WriteDataReference(16, 5);
        }

        stream.WriteVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.WriteVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.WriteVInt(0); // Added TimedIntValueEntry array count (a1[45])

        stream.WriteVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.WriteVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.WriteVInt(0); // Added TimedIntValueEntry array count (a1[45])

        stream.WriteVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.WriteVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.WriteVInt(0); // Added TimedIntValueEntry array count (a1[45])

        stream.WriteVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.WriteVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.WriteVInt(0); // Added TimedIntValueEntry array count (a1[45])
        
        stream.WriteVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.WriteVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.WriteVInt(0); // Added TimedIntValueEntry array count (a1[45])

        stream.WriteLong(0, 1);
        stream.WriteVInt(0); // Array

        stream.WriteVInt(1);
        stream.WriteBoolean(false); // LogicGatchaDrop::encode
        stream.WriteVInt(0); // Array
        stream.WriteVInt(0); // Array
        stream.WriteVInt(0); // Array
        stream.WriteBoolean(false); // LogicLoginCalendar::encode
        stream.WriteBoolean(false); // Added LogicLoginCalendar::encode
        stream.WriteBoolean(false); // Added LogicLoginCalendar::encode
        stream.WriteBoolean(false); // Added LogicLoginCalendar::encode

        // LogicHeroGears::encode
        stream.WriteVInt(0); // Count
        // Added LogicHeroGears::encode

        stream.WriteBoolean(false); // LogicBrawlerRecruitRoad::encode
        // Added LogicBrawlerRecruitRoad::encode

        // LogicMasteries::encode
        stream.WriteVInt(0); // LogicMasteries::encode
        // Added LogicMasteries::encode

        // LogicBattleIntro::encode
        // Added LogicHeroBattleIntro::encode
        stream.WriteDataReference(100, 1);
        stream.WriteDataReference(28, -1); // Icon 1
        stream.WriteDataReference(28, -1); // Icon 2
        stream.WriteDataReference(52, -1); // Pin
        stream.WriteDataReference(76, -1); // Title
        stream.WriteDataReference(0);
        stream.WriteBoolean(false);
        stream.WriteBoolean(false);
        stream.WriteBoolean(false);
        stream.WriteBoolean(false);
        stream.WriteBoolean(false);
        stream.WriteVInt(0); // Count
        // Added LogicHeroBattleIntro::encode
        // Added LogicBattleIntro::encode

        stream.WriteVInt(0)
        stream.WriteVInt(0)
        stream.WriteInt(-1435281534)
        stream.WriteVInt(0)
        stream.WriteVInt(0)
        stream.WriteVInt(86400*24)
        stream.WriteVInt(0)
        stream.WriteVInt(0)
        stream.WriteVInt(0)
        stream.WriteVInt(0)
        stream.WriteVInt(0)
        stream.WriteVInt(0)
        stream.WriteBoolean(false)

        stream.WriteBoolean(false); // LogicPlayerAlliancePiggyBankData::encode
        stream.WriteBoolean(false); // LogicPlayerCollabEventData::encode
        stream.WriteBoolean(false); // LogicPlayerSpecialEventData::encode

        // LogicDataSeenStates::encode
        stream.WriteVInt(0);
        // Added LogicDataSeenStates::encode

        stream.WriteBoolean(false); // LogicPlayerContestEventData::encode
        stream.WriteBoolean(false); // LogicPlayerRecordsData::encode
        stream.WriteBoolean(false); // LogicPlayerRecordsData::encode
        stream.WriteBoolean(false); // LogicPlayerRecordsData::encode

        stream.WriteVInt(0);

        // LogicClientHome::encode

        // LogicClientAvatar::LogicClientAvatar

        stream.WriteVInt(0);
        stream.WriteVInt(254842734);
        stream.WriteVInt(0);
        stream.WriteVInt(254842734);
        stream.WriteVInt(0);
        stream.WriteVInt(0);

        stream.WriteString("@soufgamev2");
        stream.WriteBoolean(true);
        stream.WriteInt(-1);

        stream.WriteVInt(28);

        const unlockedBrawler = Object.values(player.OwnedBrawlers).map(brawler => brawler.CardID);

        stream.WriteVInt(unlockedBrawler.length + 3);
        for (const cardId of unlockedBrawler) {
            stream.WriteDataReference(23, cardId);
            stream.WriteVInt(-1);
            stream.WriteVInt(1);
        }

        stream.WriteDataReference(5, 8);
        stream.WriteVInt(-1);
        stream.WriteVInt(300000);

        stream.WriteDataReference(5, 21);
        stream.WriteVInt(-1);
        stream.WriteVInt(0);

        stream.WriteDataReference(5, 23);
        stream.WriteVInt(-1);
        stream.WriteVInt(0);

        stream.WriteVInt(0)

        stream.WriteVInt(0)

        stream.WriteVInt(0); // Array

        stream.WriteVInt(0); // HeroPower

        stream.WriteVInt(0)

        stream.WriteVInt(0); // hero star power gadget and hypercharge

        stream.WriteVInt(0)

        stream.WriteVInt(0); // Array
        stream.WriteVInt(0); // Array
        stream.WriteVInt(0); // Array
        stream.WriteVInt(0); // Array
        stream.WriteVInt(0); // Array
        stream.WriteVInt(0); // Array
        stream.WriteVInt(0); // Array
        stream.WriteVInt(0); // Array
        stream.WriteVInt(0); // Array
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);

        stream.WriteVInt(1000000);
        stream.WriteVInt(1000000);
        stream.WriteVInt(10);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(2);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteString("");
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteBoolean(false);

        return stream.Payload;
    }

    static GetMessageType(): number {
        return 24101;
    }
}

export default OwnHomeDataMessage;