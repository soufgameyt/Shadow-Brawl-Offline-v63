import Messaging from "../../Protocol/Messaging/Messaging";
import PiranhaMessage from "../../Protocol/PiranhaMessage/PiranhaMessage";
import ByteStream from "../../DataStream/ByteStream";

class AvatarNameCheckRequestMessage {
    static PlayerName: any
    static stream: any

    static Decode(stream: any) {
        //console.log(stream.ReadString());
    }

    static Execute(stream: any) {
        /*AvatarNameCheckRequestMessage.Decode(stream);
        let PlayerName = PiranhaMessage.Decode(Message);
        console.log(AvatarNameCheckRequestMessage.PlayerName);
        Messaging.SendOfflineMessage(20300, AvatarNameCheckResponseMessage.encode(player, name));*/
    }

    static GetMessageType(): number {
        return 14600;
    }
}

export default AvatarNameCheckRequestMessage;