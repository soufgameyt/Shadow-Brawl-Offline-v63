import ByteStream from "../../../DataStream/ByteStream";
import LogicPlayerData from "../../../Configuration/LogicPlayerData";
import PlayerDisplayData from "../../../Utils/PlayerDisplayData";

class PlayerProfileMessage {
    static encode(): number[] {
        let stream = new ByteStream([]);

        stream.WriteVLong(0, 256617006);
        stream.WriteDataReference(16, 0);
        stream.WriteDataReference(0);

        stream.writeVInt(1);
        {
            stream.WriteDataReference(16, 1);
            stream.WriteDataReference(0);
            stream.writeVInt(1250);
            stream.writeVInt(1250);
            stream.writeVInt(11);
            stream.writeVInt(0);
            stream.writeVInt(0);
        }

        stream.writeVInt(27);
        {
            stream.WriteDataReference(1, 67) // 3v3 Wins
            stream.WriteDataReference(3, LogicPlayerData.getMiscData().Trophies) // Trophies
            stream.WriteDataReference(4, LogicPlayerData.getMiscData().HighestTrophies) // Highest Trophies
            stream.WriteDataReference(8, -1) // Showdown Wins
            stream.WriteDataReference(10, 90) // Robots à Gogo
            stream.WriteDataReference(11, 89) // Duo Wins
            stream.WriteDataReference(12, 88) // ?
            stream.WriteDataReference(13, 87) // Combat De Boss
            stream.WriteDataReference(14, 86) // ?
            stream.WriteDataReference(15, 85) // Victory In Challenges
            stream.WriteDataReference(16, 84) // ?
            stream.WriteDataReference(17, 83) // Power League Team Wins
            stream.WriteDataReference(18, 82) // Power League Solo Wins
            stream.WriteDataReference(19, 81) // Club League Wins
            stream.WriteDataReference(21, 80) // ?
            stream.WriteDataReference(22, 79) // ?
            stream.WriteDataReference(23, 78) // ?
            stream.WriteDataReference(26, 77) // Number in Leaderboard
            stream.WriteDataReference(28, 76) // Old Rank 35s
            stream.WriteDataReference(20, 300000); // Fame Credits
            stream.WriteDataReference(24, 13000); // Ranked Points
            stream.WriteDataReference(25, 13000); // Highest Ranked Points
            stream.WriteDataReference(27, 2025); // Account Create Date
            stream.WriteDataReference(29, LogicPlayerData.getMiscData().Trophies); // Highest Season Trophies
            stream.WriteDataReference(30, 1); // Prestige Count
            stream.WriteDataReference(31, 2039); // Records Points
            stream.WriteDataReference(32, 12); // Records Rank
        }

        {
            let PlayerName = LogicPlayerData.getPlayerName();
            let ExperienceLevel = LogicPlayerData.getMiscData().ExperienceLevel;
            let Thumbnail = LogicPlayerData.getMiscData().Thumbnail;
            let NameColor = LogicPlayerData.getMiscData().NameColor;
            let BPNameColor = LogicPlayerData.getMiscData().NameColor;

            PlayerDisplayData.encode(stream, PlayerName, ExperienceLevel, Thumbnail, NameColor, BPNameColor);
        }

        stream.writeBoolean(false);

        stream.writeString("hello world");
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.WriteDataReference(29, 0);
        stream.WriteDataReference(0);
        stream.WriteDataReference(0);
        stream.WriteDataReference(0);
        stream.WriteDataReference(0);

        stream.writeBoolean(false);

        stream.WriteDataReference(25, 0);
        stream.writeVInt(0);

        return stream.Payload;
    }

    static getMessageType(): number {
        return 24113;
    }
}

export default PlayerProfileMessage;