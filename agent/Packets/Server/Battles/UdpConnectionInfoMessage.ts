import ByteStream from "../../../DataStream/ByteStream.js"

class UdpConnectionInfoMessage {
    static encode(): number[] {
        let Stream = new ByteStream([]);

        Stream.WriteVInt(9339);
        Stream.WriteString("127.0.0.1");
        Stream.WriteInt(0);
        Stream.WriteByte(0);
        Stream.WriteInt(0);
        Stream.WriteByte(0);

        return Stream.Payload
    }
    
    static GetMessageType(): number {
        return 24112
    }
}

export default UdpConnectionInfoMessage