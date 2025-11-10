import ByteStream from "../../DataStream/ByteStream.js";
import LogicBattleModeServer from "../Server/Battles/LogicBattleModeServer.js";
import LogicLaserMessageFactory from "../../Protocol/Messaging/LogicLaserMessageFactory.js";
import VisionUpdateMessage from "../Server/Battles/VisionUpdateMessage.js";
import MatchmakingStatusMessage from "../Server/Battles/MatchmakingStatusMessage.js";
import StartLoadingMessage from "../Server/Battles/StartLoadingMessage.js";
import ClientInfoMessage from "../Server/Battles/ClientInfoMessage.js";
import UdpConnectionInfoMessage from "../Server/Battles/UdpConnectionInfoMessage.js";

class StartGameMessage {
    static encode(): number[] {
        let Stream = new ByteStream([]);
        Stream.WriteInt(0);

        return Stream.Payload 
    }

    static Execute(): void {
        //LogicLaserMessageFactory.CreateMessageByType(MatchmakingStatusMessage.GetMessageType());
        
        LogicBattleModeServer.PlayerCount = 1;
        LogicLaserMessageFactory.CreateMessageByType(StartLoadingMessage.GetMessageType());
        console.log("done with the shit");

        //LogicBattleModeServer.CurrentPlayersInMM = 0;
    }
    
    static GetMessageType(): number {
        return 14118;
    }
}

export default StartGameMessage;
