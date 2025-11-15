import ByteStream from "../../../DataStream/ByteStream.js"
import LogicBattleModeServer from "./LogicBattleModeServer.js";

class MatchmakingStatusMessage {
    static encode(): number[] {
        let Stream = new ByteStream([]);

        LogicBattleModeServer.CurrentPlayersInMM = LogicBattleModeServer.CurrentPlayersInMM + 1
        
        Stream.writeInt(LogicBattleModeServer.MMTimer);
        Stream.writeInt(LogicBattleModeServer.CurrentPlayersInMM);
        Stream.writeInt(LogicBattleModeServer.MaxPlayers);
        Stream.writeInt(0);
        Stream.writeInt(0);
        Stream.writeInt(0);

        Stream.writeBoolean(true); // Show Timer

        return Stream.Payload
    }
    
    static getMessageType(): number {
        return 20405
    }
}

export default MatchmakingStatusMessage