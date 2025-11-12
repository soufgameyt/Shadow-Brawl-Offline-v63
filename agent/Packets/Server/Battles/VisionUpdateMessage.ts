import ByteStream from "../../../DataStream/ByteStream.js"
import BitStream from "../../../DataStream/BitStream.js";
import LogicBattleModeServer from "./LogicBattleModeServer.js";
import LogicGameObjectManagerServer from "./LogicGameObjectManagerServer.js";
import LogicPlayer from "./LogicPlayer.js";

class VisionUpdateMessage {
    static encode(): number[] {
        let Stream = new ByteStream([]);
                
        Stream.writeVInt(LogicBattleModeServer.Ticks);
        Stream.writeVInt(LogicBattleModeServer.HandledInputs);
        Stream.writeVInt(LogicPlayer.ControlMode);
        Stream.writeVInt(LogicBattleModeServer.Ticks);
        Stream.writeBoolean(LogicBattleModeServer.IsBrawlTV);

        if (Stream.writeBoolean(false)) {
            Stream.writeVInt(0);
        }

        if (Stream.writeBoolean(false)) {
            Stream.writeVInt(0);
            Stream.writeVInt(0);
        }

        let GameObjectManager = LogicGameObjectManagerServer.encode();

        let ByteArray = GameObjectManager.GetByteArray()
        let Length = GameObjectManager.GetLength();

        Stream.WriteInt(Length);
        for (let i = 0; i < ByteArray.length; i++) {
            Stream.WriteByte(ByteArray[i]);
        }

        return Stream.Payload
    }

    static GetMessageType(): number {
        return 24109
    }
}

export default VisionUpdateMessage