import ByteStream from "../../DataStream/ByteStream.js"

class LoginOkMessage {
    static encode(): number[] {
        let stream = new ByteStream([]);
        stream.WriteLong(0, 256617006);
        stream.WriteLong(0, 256617006);
        stream.WriteString("");
        stream.WriteString("");
        stream.WriteString("");
        stream.WriteInt(63);
        stream.WriteInt(1);
        stream.WriteInt(342);
        stream.WriteString("dev");
        stream.WriteInt(0);
        stream.WriteInt(0);
        stream.WriteInt(0);
        stream.WriteString("");
        stream.WriteString("");
        stream.WriteString("");
        stream.WriteInt(0);
        stream.WriteString("");
        stream.WriteString("EN");
        stream.WriteString("");
        stream.WriteInt(0);
        stream.WriteString("");
        stream.WriteInt(2);
        stream.WriteString("https://game-assets.brawlstarsgame.com");
        stream.WriteString("http://a678dbc1c015a893c9fd-4e8cc3b1ad3a3c940c504815caefa967.r87.cf2.rackcdn.com");
        stream.WriteInt(3);
        stream.WriteString("https://event-assets.brawlstars.com");
        stream.WriteString("https://event-assets-2.brawlstars.com");
        stream.WriteString("https://24b999e6da07674e22b0-8209975788a0f2469e68e84405ae4fcf.ssl.cf2.rackcdn.com/event-assets");
        stream.WriteVInt(0);
        stream.WriteInt(0); // scid token
        stream.WriteBoolean(true);
        stream.WriteBoolean(false);
        stream.WriteString("");
        stream.WriteString("");
        stream.WriteString("");
        stream.WriteString("https://play.google.com/store/apps/details?id=com.supercell.brawlstars");
        stream.WriteString("");
        stream.WriteBoolean(false);

        if (stream.WriteBoolean(false)) {
            stream.WriteString("");
        }

        if (stream.WriteBoolean(false)) {
            stream.WriteString("");
        }

        if (stream.WriteBoolean(false)) {
            stream.WriteString("");
        }

        if (stream.WriteBoolean(false)) {
            stream.WriteString("");
        }
        return stream.Payload;
    }
    static GetMessageType(): number {
        return 20104;
    }
}

export default LoginOkMessage
