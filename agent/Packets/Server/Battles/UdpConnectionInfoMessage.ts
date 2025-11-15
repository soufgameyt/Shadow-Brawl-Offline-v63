import ByteStream from "../../../DataStream/ByteStream.js"

class UdpConnectionInfoMessage {
    static encode(): number[] {
        let Stream = new ByteStream([]);

        Stream.writeVInt(9339);
        Stream.writeString("127.0.0.1");
        Stream.writeInt(0);
        Stream.writeByte(0);
        Stream.writeInt(0);
        Stream.writeByte(0);

        return Stream.Payload
    }
    
    static getMessageType(): number {
        return 24112
    }
}

export default UdpConnectionInfoMessage