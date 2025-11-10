import ByteStream from "../DataStream/ByteStream.js";
import LogicServerCommand from "./LogicServerCommand.js";

import LogicPlayerData from "../Configuration/LogicPlayerData.js";
import LogicClientAvatar from "../Packets/Server/Home/OwnHomeDataMessage/LogicClientAvatar/LogicClientAvatar.js";

class LogicChangeAvatarNameCommand {
    static encode(): number[] {
        let Stream = new ByteStream([]);

        Stream.WriteStringReference("");
        Stream.WriteVInt(0);
        Stream.WriteStringReference("");

        LogicServerCommand.encode(Stream);

        return Stream.Payload;
    }

    static Execute() {
        LogicClientAvatar.UseDiamonds(500); // why not
    }

    static GetCommandType(): number {
        return 24111;
    }
}

export default LogicChangeAvatarNameCommand