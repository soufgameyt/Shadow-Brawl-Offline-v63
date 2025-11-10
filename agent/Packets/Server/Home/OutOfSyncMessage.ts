import ByteStream from "../../../DataStream/ByteStream.js"

class OutOfSyncMessage {
    static encode(): number[] {
        let Stream = new ByteStream([]);

        Stream.WriteVInt(0);
        Stream.WriteVInt(0);
        Stream.WriteVInt(0);

        return Stream.Payload;
    }
}

export default OutOfSyncMessage
