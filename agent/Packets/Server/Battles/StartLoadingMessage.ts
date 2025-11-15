import ByteStream from "../../../DataStream/ByteStream.js"
import LogicBattleModeServer from "./LogicBattleModeServer.js";
import LogicPlayer from "./LogicPlayer.js";

class StartLoadingMessage {
    static GameModeVariation = 13;
    static encode(): number[] {
        let Stream = new ByteStream([]);
        
        Stream.writeInt(LogicBattleModeServer.PlayerCount);
        Stream.writeInt(LogicBattleModeServer.PlayerIndex);
        Stream.writeInt(LogicBattleModeServer.TeamIndex);

        Stream.writeInt(LogicBattleModeServer.PlayerCount);
        for (let i = 0; i < LogicBattleModeServer.PlayerCount; i++) 
        {
            LogicPlayer.encode(Stream);
        }

        Stream.writeInt(0); // LogicVector2::encode

        Stream.writeInt(LogicBattleModeServer.ModifiersCount);
        for (let i = 0; i < LogicBattleModeServer.ModifiersCount; i++) 
        {
            Stream.writeInt(LogicBattleModeServer.ModifiersID[i]);
        }

        Stream.writeInt(0); // Unknown

        Stream.writeVInt(8); // GameType
        Stream.writeVInt(1); // Map Mode
        Stream.writeVInt(StartLoadingMessage.GameModeVariation); // Game Mode Variation
        Stream.writeVInt(0);
        Stream.writeBoolean(false);
        Stream.writeVInt(LogicPlayer.IsSpectator);
        Stream.writeVInt(1);
        Stream.WriteDataReference(15, 121); // Map ID
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeVInt(0);
        Stream.writeVInt(0);
        Stream.writeVInt(0);
        Stream.writeVInt(0);
        Stream.writeBoolean(true); // Show Quit
        Stream.writeVInt(0);
        Stream.writeVInt(0);
        Stream.writeVInt(0);

        Stream.WriteDataReference(0); // ?
        Stream.WriteDataReference(0); // ?
        Stream.WriteDataReference(0); // ?

        return Stream.Payload
    }
    
    static getMessageType(): number {
        return 20559
    }
}

export default StartLoadingMessage
