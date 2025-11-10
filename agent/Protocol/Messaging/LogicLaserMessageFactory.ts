import Messaging from "./Messaging.js";
import LoginOkMessage from "../../Packets/Server/LoginOkMessage.js";
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
    static CreateMessageByType(MessageType: number) {
        switch (MessageType) {
            case 10100:
                Messaging.SendOfflineMessage(LoginOkMessage.GetMessageType(), LoginOkMessage.encode());
                Messaging.SendOfflineMessage(OwnHomeDataMessage.GetMessageType(), OwnHomeDataMessage.encode());
                break;
            case 10101:
                Messaging.SendOfflineMessage(LoginOkMessage.GetMessageType(), LoginOkMessage.encode());
                Messaging.SendOfflineMessage(OwnHomeDataMessage.GetMessageType(), OwnHomeDataMessage.encode());
                break;
            case 12541:
                Messaging.SendOfflineMessage(TeamMessage.GetMessageType(), TeamMessage.encode());
            case 14118:
                StartGameMessage.Execute();
                break;
            case 14109:
                Messaging.SendOfflineMessage(OwnHomeDataMessage.GetMessageType(), OwnHomeDataMessage.encode());
                break;
            case 15081:
                LogicLaserMessageFactory.CreateMessageByType(PlayerProfileMessage.GetMessageType());
                break;
            case 14600:
                // AvatarNameCheckRequestMessage.Execute();
            case 17750:
                LogicLaserMessageFactory.CreateMessageByType(OwnHomeDataMessage.GetMessageType());
                break;
            case 24113:
                Messaging.SendOfflineMessage(PlayerProfileMessage.GetMessageType(), PlayerProfileMessage.encode());
                break;
            case 10177:
                Messaging.SendOfflineMessage(ClientInfoMessage.GetMessageType(), ClientInfoMessage.encode());
                LogicLaserMessageFactory.CreateMessageByType(UdpConnectionInfoMessage.GetMessageType());
                break;
            case 20109:
                Messaging.SendOfflineMessage(OwnHomeDataMessage.GetMessageType(), OwnHomeDataMessage.encode());
                break;
            case 20405:
                Messaging.SendOfflineMessage(MatchmakingStatusMessage.GetMessageType(), MatchmakingStatusMessage.encode());
                break;
            case 20559:
                Messaging.SendOfflineMessage(StartLoadingMessage.GetMessageType(), StartLoadingMessage.encode());
                break;
            case 24101:
                Messaging.SendOfflineMessage(OwnHomeDataMessage.GetMessageType(), OwnHomeDataMessage.encode());
                break;
            case 24109:
                Messaging.SendOfflineMessage(VisionUpdateMessage.GetMessageType(), VisionUpdateMessage.encode());
                break;
            case 24112:
                Messaging.SendOfflineMessage(UdpConnectionInfoMessage.GetMessageType(), UdpConnectionInfoMessage.encode());
                break;
            case 10555:
                const Interval = setInterval(() => {
                    if (LogicBattleModeServer.Ticks >= 1000) {
                        clearInterval(Interval);
                        return;
                    }
                    LogicLaserMessageFactory.CreateMessageByType(VisionUpdateMessage.GetMessageType());
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
