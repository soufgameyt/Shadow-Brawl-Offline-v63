import ByteStream from "../../../DataStream/ByteStream.js"

class ClientInfoMessage {
    static encode(): number[] {
        let Stream = new ByteStream([]);

        Stream.writeString("");
        Stream.writeString("");
        Stream.writeVInt(0);

        return Stream.Payload
    }
    
    static GetMessageType(): number {
        return 10177
    }
}

export default ClientInfoMessage