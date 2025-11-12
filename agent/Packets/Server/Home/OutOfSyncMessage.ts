import ByteStream from "../../../DataStream/ByteStream.js"

class OutOfSyncMessage {
    static encode(): number[] {
        let Stream = new ByteStream([]);

        Stream.writeVInt(0);
        Stream.writeVInt(0);
        Stream.writeVInt(0);

        return Stream.Payload;
    }
}

export default OutOfSyncMessage
