import LogicCommand from "../Protocol/Messaging/LogicCommand";

class LogicServerCommand {
    static encode(stream: any) {
        stream.WriteVInt(0);
        LogicCommand.encode(stream);
    }
}

export default LogicServerCommand;