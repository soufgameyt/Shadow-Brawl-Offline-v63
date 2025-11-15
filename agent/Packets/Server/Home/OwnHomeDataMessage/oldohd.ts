import ByteStream from "../../../../DataStream/ByteStream.js";
import LogicClientHome from "./LogicClientHome/LogicClientHome.js";
import LogicClientAvatar from "./LogicClientAvatar/LogicClientAvatar.js";
import player from "../../../../Configuration/LogicPlayerData.js";

class OwnHomeDataMessage {
    static encode(): number[] {
        let stream = new ByteStream([]);

        stream.writeVInt(1742083699); // Timestamp
        stream.writeVInt(684932114); // Timestamp

        // LogicDailyData::encode
        stream.writeVInt(2025074); // Timestamp
        stream.writeVInt(28301); // Timer For Region Change

        stream.writeVInt(70000); // Highest Trophies
        stream.writeVInt(70000); // Highest Trophies
        stream.writeVInt(70000); // Highest Trophies
        stream.writeVInt(1); // Trophy Road Tier
        stream.writeVInt(1); // Experience Level
        stream.WriteDataReference(28, 0); // Thumbnail
        stream.WriteDataReference(43, 0); // Name Changer

        stream.writeVInt(26);
        for (let x = 0; x < 26; x++) {
            stream.writeVInt(x);
        }

        stream.writeVInt(0)

        stream.writeVInt(0);

        stream.writeVInt(0);

        stream.writeVInt(0);

        stream.writeVInt(0);

        stream.writeVInt(0);

        stream.writeVInt(0); // Leaderboard Region |
        stream.writeVInt(70000); // Trophy Road Highest Trophies
        stream.writeVInt(0); // Tokens Used in Battles
        stream.writeVInt(1); // Control Mode
        stream.writeBoolean(true); // Battle Hints
        stream.writeVInt(19500); // Tokens Doubler
        stream.writeVInt(111111); // Power Play Timer
        stream.writeVInt(1375134); // Trophies Season Reset Timer
        stream.writeVInt(0); // Pro Pass Season Timer
        stream.writeVInt(1375134); // Brawl Pass Season Timer

        stream.writeVInt(200); // Starpower Drop
        stream.writeVInt(200); // Gadget Drop
        stream.writeVInt(0); // Rarity Count

        stream.writeBoolean(true);
        stream.writeVInt(2); // Token Doubler New Tag State
        stream.writeVInt(2); // Event Tickets New Tag State
        stream.writeVInt(2); // Coin Packs New Tag State
        stream.writeVInt(0); // Change Name Cost
        stream.writeVInt(0); // Timer For the Next Name Change
        stream.writeVInt(0); // ?

        // LogicOfferBundle::encode
        stream.writeVInt(0); // Shop Offers Count
        stream.writeVInt(20);
        stream.writeVInt(1428);

        stream.writeVInt(0);

        stream.writeVInt(1);
        stream.writeVInt(30);

        stream.WriteByte(1); // Selected Brawler
        stream.WriteDataReference(16, 1);

        stream.writeString("EN"); // Location
        stream.writeString("haccysouf"); // Supported Content Creator

        // IntValueEntry::encode
        stream.writeVInt(15);
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
        stream.writeVInt(0); // CooldownEntry::encode
        // Added CooldownEntry::encode

        // BrawlPassSeasonData::encode
        stream.writeVInt(0);
        // Added BrawlPassSeasonData::encode

        // LogicQuests::encode
        stream.writeBoolean(true);
        stream.writeVInt(0); // Quests Count
        stream.writeVInt(0); // ?
        stream.writeVInt(0); // ?
        stream.writeVInt(0); // ?
        // Added LogicQuests::encode

        // VanityItems::encode
        stream.writeBoolean(true); // Vanity items
        stream.writeVInt(0)
        // Added VanityItems::encode

        // LogicPlayerRankedSeasonData::encode
        stream.writeBoolean(false); // LogicPlayerRankedSeasonData::encode

        stream.WriteInt(0);
        stream.writeVInt(0);
        stream.WriteDataReference(16, 1); // Favorite Brawler
        stream.writeBoolean(false); // LogicRewards::encode
        stream.writeVInt(-1);
        stream.writeVInt(0);
        stream.writeVInt(832099);
        stream.writeVInt(1616899);
        stream.writeVInt(10659101);
        stream.writeVInt(0);

        // CompetitivePassSeasonData::encode
        stream.writeVInt(0);
        stream.writeVInt(0); // Pro Pass

        stream.WriteDataReference(2, 333);
        stream.WriteDataReference(2, 347);
        stream.WriteDataReference(2, 334);
        stream.WriteDataReference(2, 335);

        stream.writeBoolean(false);

        // Added EsportsButtonStateData::encode
        stream.WriteDataReference(2, 351);
        stream.writeVInt(770); // LogicDailyData::encode
        stream.writeBoolean(false);
        stream.writeBoolean(false);

        stream.writeVInt(2025074);

        stream.writeVInt(40); // event slot id
        for (let EventID = 0; EventID < 40; EventID++) {
            stream.writeVInt(EventID);
        }

        stream.writeVInt(0); // Added EventData array count (a1[9])
        stream.writeVInt(0); // Added EventData array count (a1[13])
        stream.writeVInt(0); // Added EventData array count (a1[17])

        stream.writeVInt(0); // Added EventData array count (a1[9])
        stream.writeVInt(0); // Added EventData array count (a1[13])
        stream.writeVInt(0); // Added EventData array count (a1[17])

        stream.writeVInt(0); // Added ReleaseEntry array count (a1[37])
        stream.writeVInt(6);
        for (let i = 0; i < 1; i++) {
            stream.WriteDataReference(41000140, 1); // ThemeID
            stream.WriteDataReference(89, 6);
            stream.WriteDataReference(22, 0);
            stream.WriteDataReference(36, 1);
            stream.WriteDataReference(73, 1);
            stream.WriteDataReference(16, 5);
        }

        stream.writeVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.writeVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.writeVInt(0); // Added TimedIntValueEntry array count (a1[45])

        stream.writeVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.writeVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.writeVInt(0); // Added TimedIntValueEntry array count (a1[45])

        stream.writeVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.writeVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.writeVInt(0); // Added TimedIntValueEntry array count (a1[45])

        stream.writeVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.writeVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.writeVInt(0); // Added TimedIntValueEntry array count (a1[45])
        
        stream.writeVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.writeVInt(0); // Added TimedIntValueEntry array count (a1[45])
        stream.writeVInt(0); // Added TimedIntValueEntry array count (a1[45])

        stream.WriteLong(0, 1);
        stream.writeVInt(0); // Array

        stream.writeVInt(1);
        stream.writeBoolean(false); // LogicGatchaDrop::encode
        stream.writeVInt(0); // Array
        stream.writeVInt(0); // Array
        stream.writeVInt(0); // Array
        stream.writeBoolean(false); // LogicLoginCalendar::encode
        stream.writeBoolean(false); // Added LogicLoginCalendar::encode
        stream.writeBoolean(false); // Added LogicLoginCalendar::encode
        stream.writeBoolean(false); // Added LogicLoginCalendar::encode

        // LogicHeroGears::encode
        stream.writeVInt(0); // Count
        // Added LogicHeroGears::encode

        stream.writeBoolean(false); // LogicBrawlerRecruitRoad::encode
        // Added LogicBrawlerRecruitRoad::encode

        // LogicMasteries::encode
        stream.writeVInt(0); // LogicMasteries::encode
        // Added LogicMasteries::encode

        // LogicBattleIntro::encode
        // Added LogicHeroBattleIntro::encode
        stream.WriteDataReference(100, 1);
        stream.WriteDataReference(28, -1); // Icon 1
        stream.WriteDataReference(28, -1); // Icon 2
        stream.WriteDataReference(52, -1); // Pin
        stream.WriteDataReference(76, -1); // Title
        stream.WriteDataReference(0);
        stream.writeBoolean(false);
        stream.writeBoolean(false);
        stream.writeBoolean(false);
        stream.writeBoolean(false);
        stream.writeBoolean(false);
        stream.writeVInt(0); // Count
        // Added LogicHeroBattleIntro::encode
        // Added LogicBattleIntro::encode

        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.WriteInt(-1435281534)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(86400*24)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeBoolean(false)

        stream.writeBoolean(false); // LogicPlayerAlliancePiggyBankData::encode
        stream.writeBoolean(false); // LogicPlayerCollabEventData::encode
        stream.writeBoolean(false); // LogicPlayerSpecialEventData::encode

        // LogicDataSeenStates::encode
        stream.writeVInt(0);
        // Added LogicDataSeenStates::encode

        stream.writeBoolean(false); // LogicPlayerContestEventData::encode
        stream.writeBoolean(false); // LogicPlayerRecordsData::encode
        stream.writeBoolean(false); // LogicPlayerRecordsData::encode
        stream.writeBoolean(false); // LogicPlayerRecordsData::encode

        stream.writeVInt(0);

        // LogicClientHome::encode

        // LogicClientAvatar::LogicClientAvatar

        stream.writeVInt(0);
        stream.writeVInt(254842734);
        stream.writeVInt(0);
        stream.writeVInt(254842734);
        stream.writeVInt(0);
        stream.writeVInt(0);

        stream.writeString("@soufgamev2");
        stream.writeBoolean(true);
        stream.WriteInt(-1);

        stream.writeVInt(28);

        const unlockedBrawler = Object.values(player.OwnedBrawlers).map(brawler => brawler.CardID);

        stream.writeVInt(unlockedBrawler.length + 3);
        for (const cardId of unlockedBrawler) {
            stream.WriteDataReference(23, cardId);
            stream.writeVInt(-1);
            stream.writeVInt(1);
        }

        stream.WriteDataReference(5, 8);
        stream.writeVInt(-1);
        stream.writeVInt(300000);

        stream.WriteDataReference(5, 21);
        stream.writeVInt(-1);
        stream.writeVInt(0);

        stream.WriteDataReference(5, 23);
        stream.writeVInt(-1);
        stream.writeVInt(0);

        stream.writeVInt(0)

        stream.writeVInt(0)

        stream.writeVInt(0); // Array

        stream.writeVInt(0); // HeroPower

        stream.writeVInt(0)

        stream.writeVInt(0); // hero star power gadget and hypercharge

        stream.writeVInt(0)

        stream.writeVInt(0); // Array
        stream.writeVInt(0); // Array
        stream.writeVInt(0); // Array
        stream.writeVInt(0); // Array
        stream.writeVInt(0); // Array
        stream.writeVInt(0); // Array
        stream.writeVInt(0); // Array
        stream.writeVInt(0); // Array
        stream.writeVInt(0); // Array
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);

        stream.writeVInt(1000000);
        stream.writeVInt(1000000);
        stream.writeVInt(10);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(2);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeString("");
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeBoolean(false);

        return stream.Payload;
    }

    static getMessageType(): number {
        return 24101;
    }
}

export default OwnHomeDataMessage;