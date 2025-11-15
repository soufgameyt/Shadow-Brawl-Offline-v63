import ByteStream from "../../../../DataStream/ByteStream.js";
import LogicClientHome from "./LogicClientHome/LogicClientHome.js";
import LogicClientAvatar from "./LogicClientAvatar/LogicClientAvatar.js";
import player from "../../../../Configuration/LogicPlayerData.js";

class OwnHomeDataMessage {
    public static ClientHome: LogicClientHome
    public static ClientAvatar: LogicClientAvatar

    public static encode(): number[] {
        let stream = new ByteStream([]);

        stream.writeVInt(1757882887);
        stream.writeVInt(-1230828389);

        new LogicClientHome(stream).encode();
        new LogicClientAvatar(stream).encode();
        
        return stream.Payload;
    }

    static getMessageType(): number {
        return 24101;
    }
}

export default OwnHomeDataMessage;