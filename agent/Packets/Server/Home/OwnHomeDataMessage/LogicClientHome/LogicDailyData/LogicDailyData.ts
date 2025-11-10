import ForcedDrops from "./Arrays/ForcedDrops";
import IntValueEntry from "./Arrays/IntValueEntry";
import LogicOfferBundle from "./Arrays/LogicOfferBundle";
import LogicQuests from "./Arrays/LogicQuests";
import BrawlPassSeasonData from "./Arrays/BrawlPassSeasonData";
import CooldownEntry from "./Arrays/CooldownEntry";
import LogicPlayerData from "../../../../../../Configuration/LogicPlayerData";
import LogicPlayer from "../../../../Battles/LogicPlayer";
import CompetitivePassSeasonData from "./Arrays/CompetitivePassSeasonData";
import LogicPlayerRankedSeasonData from "./Arrays/LogicPlayerRankedSeasonData";
import EsportsButtonStateData from "./Arrays/EsportsButtonStateData";

class LogicDailyData {
    static encode(stream: any): void {
        stream.WriteVInt(2025257);
        stream.WriteVInt(40312);

        stream.WriteVInt(LogicPlayerData.GetMiscData().Trophies);
        stream.WriteVInt(LogicPlayerData.GetMiscData().HighestTrophies);
        stream.WriteVInt(LogicPlayerData.GetMiscData().HighestTrophies);
        stream.WriteVInt(LogicPlayerData.GetMiscData().TrophyRoadTier);
        stream.WriteVInt(LogicPlayerData.GetMiscData().ExperienceLevel);
        stream.WriteDataReference(28, LogicPlayerData.GetMiscData().Thumbnail);
        stream.WriteDataReference(43, LogicPlayerData.GetMiscData().NameColor);

        stream.WriteVInt(26);
        for (let x = 0; x < 26; x++) {
            stream.WriteVInt(x);
        }

        stream.WriteVInt(0)

        stream.WriteVInt(0);

        stream.WriteVInt(0);

        stream.WriteVInt(1340); // Owned Skins
        for (let x = 0; x < 1340; x++) {
            stream.WriteDataReference(29, x);
        }

        stream.WriteVInt(0);

        stream.WriteVInt(0);

        stream.WriteVInt(0);
        stream.WriteVInt(LogicPlayerData.GetMiscData().HighestTrophies); // Trophy Road Highest Trophies
        stream.WriteVInt(1337); // Tokens Used in Battles
        stream.WriteVInt(LogicPlayer.ControlMode); // Control Mode
        stream.WriteBoolean(true); // Battle Hints
        stream.WriteVInt(LogicPlayerData.GetMiscData().TokenDoubler); // Tokens Doubler
        stream.WriteVInt(144); // Brawl Pass Season Timer
        stream.WriteVInt(1509112); // Brawl Pass Season Timer
        stream.WriteVInt(144); // Brawl Pass Season Timer
        stream.WriteVInt(1509112); // Brawl Pass Season Timer

        ForcedDrops.encode(stream);

        stream.WriteBoolean(true);
        stream.WriteVInt(2); // Token Doubler New Tag State
        stream.WriteVInt(2); // Event Tickets New Tag State
        stream.WriteVInt(2); // Coin Packs New Tag State
        stream.WriteVInt(0); // Change Name Cost
        stream.WriteVInt(0); // Timer For the Next Name Change
        stream.WriteVInt(0); // ?

        LogicOfferBundle.encode(stream);

        stream.WriteVInt(400); // Bp Battle XP
        stream.WriteVInt(500); // Time Left Until XP Reset

        stream.WriteVInt(-1);

        stream.WriteVInt(1);
        stream.WriteVInt(30);

        stream.WriteByte(1); // Selected Brawler
        stream.WriteDataReference(16, 1);

        stream.WriteString(LogicPlayerData.GetMiscData().Region);
        stream.WriteString(LogicPlayerData.GetMiscData().CreatorCode);

        IntValueEntry.encode(stream);
        CooldownEntry.encode(stream);
        BrawlPassSeasonData.encode(stream);

        if (stream.WriteBoolean(true)) {
            LogicQuests.encode(stream);
        }

        stream.WriteBoolean(true); // Vanity items
        stream.WriteVInt(0)

        if (stream.WriteBoolean(true)) {
            LogicPlayerRankedSeasonData.encode(stream);
        }

        stream.WriteInt(0);
        stream.WriteVInt(1337);
        stream.WriteDataReference(16, 1); // Favorite Brawler
        stream.WriteBoolean(false); // LogicRewards::encode
        stream.WriteVInt(-1);
        stream.WriteVInt(1337);
        stream.WriteVInt(832099);
        stream.WriteVInt(1616899);
        stream.WriteVInt(10659101);
        stream.WriteVInt(0);

        CompetitivePassSeasonData.encode(stream);
            
        stream.WriteVInt(6);
        {
            stream.WriteDataReference(2, 446);
            stream.WriteDataReference(2, 448);
            stream.WriteDataReference(2, 450);
            stream.WriteDataReference(2, 452);
            stream.WriteDataReference(2, 454);
            stream.WriteDataReference(2, 456);
        }

        stream.WriteDataReference(2, 462);
        stream.WriteDataReference(2, 460);
        stream.WriteDataReference(2, 464);
        stream.WriteDataReference(2, 466);

        if (stream.WriteBoolean(true)) {
            EsportsButtonStateData.encode(stream);
        }

        stream.WriteDataReference(2, 473);
        stream.WriteVInt(1337); // LogicDailyData::encode
        stream.WriteBoolean(false);
        stream.WriteBoolean(false);
    }
}

export default LogicDailyData