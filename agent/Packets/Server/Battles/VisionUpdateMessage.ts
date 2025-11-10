import ByteStream from "../../../DataStream/ByteStream.js"
import BitStream from "../../../DataStream/BitStream.js";
import LogicBattleModeServer from "./LogicBattleModeServer.js";
import LogicGameObjectManagerServer from "./LogicGameObjectManagerServer.js";
import LogicPlayer from "./LogicPlayer.js";

class VisionUpdateMessage {
    static encode(): number[] {
        let Stream = new ByteStream([]);
                
        Stream.WriteVInt(LogicBattleModeServer.Ticks);
        Stream.WriteVInt(LogicBattleModeServer.HandledInputs);
        Stream.WriteVInt(LogicPlayer.ControlMode);
        Stream.WriteVInt(LogicBattleModeServer.Ticks);
        Stream.WriteBoolean(LogicBattleModeServer.IsBrawlTV);

        if (Stream.WriteBoolean(false)) {
            Stream.WriteVInt(0);
        }

        if (Stream.WriteBoolean(false)) {
            Stream.WriteVInt(0);
            Stream.WriteVInt(0);
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