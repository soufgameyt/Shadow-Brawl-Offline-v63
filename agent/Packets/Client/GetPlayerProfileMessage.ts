import ByteStream from "../../DataStream/ByteStream";

class GetPlayerProfileMessage {
    static decode(): any {
        let Stream = new ByteStream([]);

        console.log(Stream.ReadBoolean())
        console.log(Stream.ReadVInt())
        let playerid = Stream.ReadInt()
        let playerid2 = Stream.ReadInt()
        console.log(playerid, playerid2)

        return Stream.Payload;
    }

    static getMessageType(): number {
        return 15081;
    }
}

export default GetPlayerProfileMessage;
