import Messaging from "../../Protocol/Messaging/Messaging";
import PiranhaMessage from "../../Protocol/PiranhaMessage/PiranhaMessage";
import ByteStream from "../../DataStream/ByteStream";

class AvatarNameCheckRequestMessage {
    static PlayerName: any
    static stream: any

    static decode(stream: any) {
        //console.log(stream.ReadString());
    }

    static Execute(stream: any) {
        /*AvatarNameCheckRequestMessage.decode(stream);
        let PlayerName = PiranhaMessage.decode(Message);
        console.log(AvatarNameCheckRequestMessage.PlayerName);
        Messaging.sendOfflineMessage(20300, AvatarNameCheckResponseMessage.encode(player, name));*/
    }

    static getMessageType(): number {
        return 14600;
    }
}

export default AvatarNameCheckRequestMessage;