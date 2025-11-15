import ByteStream from "../../DataStream/ByteStream";

class ClientInputMessage {
    static decode(): any {
        let Stream = new ByteStream([]);

        return Stream.Payload;
    }

    static getMessageType(): number {
        return 10555;
    }
}

export default ClientInputMessage;
