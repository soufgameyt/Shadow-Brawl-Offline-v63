import ByteStream from "../../../DataStream/ByteStream.js"

class LoginOkMessage {
    static encode(): number[] {
        let stream = new ByteStream([]);
        stream.WriteLong(0, 256617006);
        stream.WriteLong(0, 256617006);
        stream.writeString("");
        stream.writeString("");
        stream.writeString("");
        stream.writeInt(63);
        stream.writeInt(1);
        stream.writeInt(342);
        stream.writeString("dev");
        stream.writeInt(0);
        stream.writeInt(0);
        stream.writeInt(0);
        stream.writeString("");
        stream.writeString("");
        stream.writeString("");
        stream.writeInt(0);
        stream.writeString("");
        stream.writeString("EN");
        stream.writeString("");
        stream.writeInt(0);
        stream.writeString("");
        stream.writeInt(2);
        stream.writeString("https://game-assets.brawlstarsgame.com");
        stream.writeString("http://a678dbc1c015a893c9fd-4e8cc3b1ad3a3c940c504815caefa967.r87.cf2.rackcdn.com");
        stream.writeInt(3);
        stream.writeString("https://event-assets.brawlstars.com");
        stream.writeString("https://event-assets-2.brawlstars.com");
        stream.writeString("https://24b999e6da07674e22b0-8209975788a0f2469e68e84405ae4fcf.ssl.cf2.rackcdn.com/event-assets");
        stream.writeVInt(0);
        stream.writeInt(0); // scid token
        stream.writeBoolean(true);
        stream.writeBoolean(false);
        stream.writeString("");
        stream.writeString("");
        stream.writeString("");
        stream.writeString("https://play.google.com/store/apps/details?id=com.supercell.brawlstars");
        stream.writeString("");
        stream.writeBoolean(false);

        if (stream.writeBoolean(false)) {
            stream.writeString("");
        }

        if (stream.writeBoolean(false)) {
            stream.writeString("");
        }

        if (stream.writeBoolean(false)) {
            stream.writeString("");
        }

        if (stream.writeBoolean(false)) {
            stream.writeString("");
        }
        return stream.Payload;
    }
    static getMessageType(): number {
        return 20104;
    }
}

export default LoginOkMessage
