import ByteStream from "../DataStream/ByteStream.js";
import LogicServerCommand from "./LogicServerCommand.js";

import LogicPlayerData from "../Configuration/LogicPlayerData.js";
import LogicClientAvatar from "../Packets/Server/Home/OwnHomeDataMessage/LogicClientAvatar/LogicClientAvatar.js";

class LogicChangeAvatarNameCommand {
    static encode(): number[] {
        let Stream = new ByteStream([]);

        Stream.writeStringReference("hii");
        Stream.writeVInt(0);
        Stream.writeStringReference("hii");

        LogicServerCommand.encode(Stream);

        return Stream.Payload;
    }

    static Execute() {
        LogicClientAvatar.useDiamonds(500); // why not
    }

    static GetCommandType(): number {
        return 24111;
    }
}

export default LogicChangeAvatarNameCommand