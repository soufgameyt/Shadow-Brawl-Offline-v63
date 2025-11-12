import ByteStream from "../../../../DataStream/ByteStream.js";
import LogicClientHome from "./LogicClientHome/LogicClientHome.js";
import LogicClientAvatar from "./LogicClientAvatar/LogicClientAvatar.js";
import player from "../../../../Configuration/LogicPlayerData.js";

class OwnHomeDataMessage {
    public static ClientHome: any
    public static ClientAvatar: any

    static encode(): number[] {
        let stream = new ByteStream([]);

        stream.writeVInt(1757882887);
        stream.writeVInt(-1230828389);

        OwnHomeDataMessage.ClientHome = new LogicClientHome(stream);
        OwnHomeDataMessage.ClientAvatar = new LogicClientAvatar(stream);
        
        return stream.Payload;
    }

    static GetMessageType(): number {
        return 24101;
    }
}

export default OwnHomeDataMessage;