import ByteStream from "../../../DataStream/ByteStream";
import LogicPlayerData from "../../../Configuration/LogicPlayerData";

class PlayerProfileMessage {
    static encode(): number[] {
        let Stream = new ByteStream([]);

        Stream.WriteVLong(0, 256617006);
        Stream.WriteDataReference(16, 0);
        Stream.WriteDataReference(0);

        Stream.writeVInt(1);
        {
            Stream.WriteDataReference(16, 1);
            Stream.WriteDataReference(0);
            Stream.writeVInt(1250);
            Stream.writeVInt(1250);
            Stream.writeVInt(11);
            Stream.writeVInt(0);
            Stream.writeVInt(0);
        }

        Stream.writeVInt(27);
        {
            Stream.WriteDataReference(1, 99) // 3v3 Wins
            Stream.WriteDataReference(3, LogicPlayerData.GetMiscData().Trophies) // Trophies
            Stream.WriteDataReference(4, LogicPlayerData.GetMiscData().HighestTrophies) // Highest Trophies
            Stream.WriteDataReference(8, 92) // Showdown Wins
            Stream.WriteDataReference(10, 90) // Robots à Gogo
            Stream.WriteDataReference(11, 89) // Duo Wins
            Stream.WriteDataReference(12, 88) // ?
            Stream.WriteDataReference(13, 87) // Combat De Boss
            Stream.WriteDataReference(14, 86) // ?
            Stream.WriteDataReference(15, 85) // Victory In Challenges
            Stream.WriteDataReference(16, 84) // ?
            Stream.WriteDataReference(17, 83) // Power League Team Wins
            Stream.WriteDataReference(18, 82) // Power League Solo Wins
            Stream.WriteDataReference(19, 81) // Club League Wins
            Stream.WriteDataReference(21, 80) // ?
            Stream.WriteDataReference(22, 79) // ?
            Stream.WriteDataReference(23, 78) // ?
            Stream.WriteDataReference(26, 77) // Number in Leaderboard
            Stream.WriteDataReference(28, 76) // Old Rank 35s
            Stream.WriteDataReference(20, 300000); // Fame Credits
            Stream.WriteDataReference(24, 13000); // Ranked Points
            Stream.WriteDataReference(25, 13000); // Highest Ranked Points
            Stream.WriteDataReference(27, 2025); // Account Create Date
            Stream.WriteDataReference(29, LogicPlayerData.GetMiscData().Trophies); // Highest Season Trophies
            Stream.WriteDataReference(30, 1); // Prestige Count
            Stream.WriteDataReference(31, 2039); // Records Points
            Stream.WriteDataReference(32, 12); // Records Rank
        }

        {
            Stream.writeString(LogicPlayerData.getPlayerName());
            Stream.writeVInt(LogicPlayerData.GetMiscData().ExperienceLevel);
            Stream.writeVInt(28000000 + LogicPlayerData.GetMiscData().Thumbnail);
            Stream.writeVInt(43000000 + LogicPlayerData.GetMiscData().NameColor);
            Stream.writeVInt(43000000 + LogicPlayerData.GetMiscData().NameColor);
        }

        Stream.writeBoolean(false);

        Stream.writeString("hello world");
        Stream.writeVInt(0);
        Stream.writeVInt(0);
        Stream.writeVInt(0);
        Stream.WriteDataReference(29, 0);
        Stream.WriteDataReference(0);
        Stream.WriteDataReference(0);
        Stream.WriteDataReference(0);
        Stream.WriteDataReference(0);

        Stream.writeBoolean(false);

        Stream.WriteDataReference(25, 0);
        Stream.writeVInt(0);

        return Stream.Payload;
    }

    static getMessageType(): number {
        return 24113;
    }
}

export default PlayerProfileMessage;