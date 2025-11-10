import ByteStream from "../../../DataStream/ByteStream.js"
import LogicBattleModeServer from "./LogicBattleModeServer.js";

class MatchmakingStatusMessage {
    static encode(): number[] {
        let Stream = new ByteStream([]);

        LogicBattleModeServer.CurrentPlayersInMM = LogicBattleModeServer.CurrentPlayersInMM + 1
        
        Stream.WriteInt(LogicBattleModeServer.MMTimer);
        Stream.WriteInt(LogicBattleModeServer.CurrentPlayersInMM);
        Stream.WriteInt(LogicBattleModeServer.MaxPlayers);
        Stream.WriteInt(0);
        Stream.WriteInt(0);
        Stream.WriteInt(0);

        Stream.WriteBoolean(true); // Show Timer

        return Stream.Payload
    }
    
    static GetMessageType(): number {
        return 20405
    }
}

export default MatchmakingStatusMessage