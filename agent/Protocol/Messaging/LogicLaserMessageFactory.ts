import Messaging from "./Messaging.js";
import LoginOkMessage from "../../Packets/Server/Authentification/LoginOkMessage.js";
import OwnHomeDataMessage from "../../Packets/Server/Home/OwnHomeDataMessage/OwnHomeDataMessage.js";
import StartLoadingMessage from "../../Packets/Server/Battles/StartLoadingMessage.js";
import MatchmakingStatusMessage from "../../Packets/Server/Battles/MatchmakingStatusMessage.js";
import StartGameMessage from "../../Packets/Client/StartGameMessage.js";
import ClientInfoMessage from "../../Packets/Server/Battles/ClientInfoMessage.js";
import UdpConnectionInfoMessage from "../../Packets/Server/Battles/UdpConnectionInfoMessage.js";
import PlayerProfileMessage from "../../Packets/Server/Home/PlayerProfileMessage.js";
import TeamMessage from "../../Packets/Server/Home/TeamMessage.js";
import VisionUpdateMessage from "../../Packets/Server/Battles/VisionUpdateMessage.js";
import AvatarNameCheckRequestMessage from "../../Packets/Client/AvatarNameCheckRequestMessage.js";

import Debugger from "../../Utils/Debugger.js";
import LogicBattleModeServer from "../../Packets/Server/Battles/LogicBattleModeServer.js";

class LogicLaserMessageFactory {
    static createMessageByType(MessageType: number) {
        switch (MessageType) {
            case 10100:
                Messaging.sendOfflineMessage(LoginOkMessage.getMessageType(), LoginOkMessage.encode());
                Messaging.sendOfflineMessage(OwnHomeDataMessage.getMessageType(), OwnHomeDataMessage.encode());
                break;
            case 10101:
                Messaging.sendOfflineMessage(LoginOkMessage.getMessageType(), LoginOkMessage.encode());
                Messaging.sendOfflineMessage(OwnHomeDataMessage.getMessageType(), OwnHomeDataMessage.encode());
                break;
            case 12541:
                Messaging.sendOfflineMessage(TeamMessage.getMessageType(), TeamMessage.encode());
                break;
            case 14118:
                StartGameMessage.Execute();
                break;
            case 14109:
                Messaging.sendOfflineMessage(OwnHomeDataMessage.getMessageType(), OwnHomeDataMessage.encode());
                break;
            case 15081:
                LogicLaserMessageFactory.createMessageByType(PlayerProfileMessage.getMessageType());
                break;
            case 14600:
                // AvatarNameCheckRequestMessage.Execute();
                break;
            case 17750:
                LogicLaserMessageFactory.createMessageByType(OwnHomeDataMessage.getMessageType());
                break;
            case 24113:
                Messaging.sendOfflineMessage(PlayerProfileMessage.getMessageType(), PlayerProfileMessage.encode());
                break;
            case 10177:
                Messaging.sendOfflineMessage(ClientInfoMessage.getMessageType(), ClientInfoMessage.encode());
                LogicLaserMessageFactory.createMessageByType(UdpConnectionInfoMessage.getMessageType());
                break;
            case 20109:
                Messaging.sendOfflineMessage(OwnHomeDataMessage.getMessageType(), OwnHomeDataMessage.encode());
                break;
            case 20405:
                Messaging.sendOfflineMessage(MatchmakingStatusMessage.getMessageType(), MatchmakingStatusMessage.encode());
                break;
            case 20559:
                Messaging.sendOfflineMessage(StartLoadingMessage.getMessageType(), StartLoadingMessage.encode());
                break;
            case 24101:
                Messaging.sendOfflineMessage(OwnHomeDataMessage.getMessageType(), OwnHomeDataMessage.encode());
                break;
            case 24109:
                Messaging.sendOfflineMessage(VisionUpdateMessage.getMessageType(), VisionUpdateMessage.encode());
                break;
            case 24112:
                Messaging.sendOfflineMessage(UdpConnectionInfoMessage.getMessageType(), UdpConnectionInfoMessage.encode());
                break;
            case 10555:
                const Interval = setInterval(() => {
                    if (LogicBattleModeServer.Ticks >= 1000) {
                        clearInterval(Interval);
                        return;
                    }
                    LogicLaserMessageFactory.createMessageByType(VisionUpdateMessage.getMessageType());
                    LogicBattleModeServer.Ticks += 1;
                }, 200);
                break;
            default:
                Debugger.Warn(`Unhandled Message! Message Type: ${MessageType}`)
                break;
        }
    }
}

export default LogicLaserMessageFactory;
