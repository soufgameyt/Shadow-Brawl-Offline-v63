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
        Stream.writeInt(0);

        return Stream.Payload 
    }

    static Execute(): void {
        //LogicLaserMessageFactory.createMessageByType(MatchmakingStatusMessage.getMessageType());
        
        LogicBattleModeServer.PlayerCount = 1;
        LogicLaserMessageFactory.createMessageByType(StartLoadingMessage.getMessageType());
        console.log("done with the shit");

        //LogicBattleModeServer.CurrentPlayersInMM = 0;
    }
    
    static getMessageType(): number {
        return 14118;
    }
}

export default StartGameMessage;
