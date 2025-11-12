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
        stream.writeVInt(2025257);
        stream.writeVInt(40312);

        stream.writeVInt(LogicPlayerData.GetMiscData().Trophies);
        stream.writeVInt(LogicPlayerData.GetMiscData().HighestTrophies);
        stream.writeVInt(LogicPlayerData.GetMiscData().HighestTrophies);
        stream.writeVInt(LogicPlayerData.GetMiscData().TrophyRoadTier);
        stream.writeVInt(LogicPlayerData.GetMiscData().ExperienceLevel);
        stream.WriteDataReference(28, LogicPlayerData.GetMiscData().Thumbnail);
        stream.WriteDataReference(43, LogicPlayerData.GetMiscData().NameColor);

        stream.writeVInt(26);
        for (let x = 0; x < 26; x++) {
            stream.writeVInt(x);
        }

        stream.writeVInt(0)

        stream.writeVInt(0);

        stream.writeVInt(0);

        stream.writeVInt(1340); // Owned Skins
        for (let x = 0; x < 1340; x++) {
            stream.WriteDataReference(29, x);
        }

        stream.writeVInt(0);

        stream.writeVInt(0);

        stream.writeVInt(0);
        stream.writeVInt(LogicPlayerData.GetMiscData().HighestTrophies); // Trophy Road Highest Trophies
        stream.writeVInt(1337); // Tokens Used in Battles
        stream.writeVInt(LogicPlayer.ControlMode); // Control Mode
        stream.writeBoolean(true); // Battle Hints
        stream.writeVInt(LogicPlayerData.GetMiscData().TokenDoubler); // Tokens Doubler
        stream.writeVInt(144); // Brawl Pass Season Timer
        stream.writeVInt(1509112); // Brawl Pass Season Timer
        stream.writeVInt(144); // Brawl Pass Season Timer
        stream.writeVInt(1509112); // Brawl Pass Season Timer

        ForcedDrops.encode(stream);

        stream.writeBoolean(true);
        stream.writeVInt(2); // Token Doubler New Tag State
        stream.writeVInt(2); // Event Tickets New Tag State
        stream.writeVInt(2); // Coin Packs New Tag State
        stream.writeVInt(0); // Change Name Cost
        stream.writeVInt(0); // Timer For the Next Name Change
        stream.writeVInt(0); // ?

        LogicOfferBundle.encode(stream);

        stream.writeVInt(400); // Bp Battle XP
        stream.writeVInt(500); // Time Left Until XP Reset

        stream.writeVInt(-1);

        stream.writeVInt(1);
        stream.writeVInt(30);

        stream.WriteByte(1); // Selected Brawler
        stream.WriteDataReference(16, 1);

        stream.writeString(LogicPlayerData.GetMiscData().Region);
        stream.writeString(LogicPlayerData.GetMiscData().CreatorCode);

        IntValueEntry.encode(stream);
        CooldownEntry.encode(stream);
        BrawlPassSeasonData.encode(stream);

        if (stream.writeBoolean(true)) {
            LogicQuests.encode(stream);
        }

        stream.writeBoolean(true); // Vanity items
        stream.writeVInt(0)

        if (stream.writeBoolean(true)) {
            LogicPlayerRankedSeasonData.encode(stream);
        }

        stream.WriteInt(0);
        stream.writeVInt(1337);
        stream.WriteDataReference(16, 1); // Favorite Brawler
        stream.writeBoolean(false); // LogicRewards::encode
        stream.writeVInt(-1);
        stream.writeVInt(1337);
        stream.writeVInt(832099);
        stream.writeVInt(1616899);
        stream.writeVInt(10659101);
        stream.writeVInt(0);

        CompetitivePassSeasonData.encode(stream);
            
        stream.writeVInt(6);
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

        if (stream.writeBoolean(true)) {
            EsportsButtonStateData.encode(stream);
        }

        stream.WriteDataReference(2, 473);
        stream.writeVInt(1337); // LogicDailyData::encode
        stream.writeBoolean(false);
        stream.writeBoolean(false);
    }
}

export default LogicDailyData