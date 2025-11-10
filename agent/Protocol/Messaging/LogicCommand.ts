import LogicChangeAvatarNameCommand from "../../Commands/LogicChangeAvatarNameCommand";
import Messaging from "./Messaging";

class LogicCommand {
    static encode(stream: any) {
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVLong(0, 256617006);
    }

    static CreateCommandByType(CommandType: number) {
        switch(CommandType) {
            case 24111:
                Messaging.SendOfflineMessage(LogicChangeAvatarNameCommand.GetCommandType(), LogicChangeAvatarNameCommand.encode());
                LogicChangeAvatarNameCommand.Execute();
                return 1
        }
        return 0
    }
}

export default LogicCommand;