import LogicBattleModeServer from "./LogicBattleModeServer";

class LogicGameObjectServer {
    static encode(Stream: any) {
        Stream.WritePositiveVIntMax65535(2550); // Position X
        Stream.WritePositiveVIntMax65535(8550); // Position Y
        Stream.WritePositiveVIntMax65535(0); // RenderZ Z
        Stream.WritePositiveVIntMax255(17 * LogicBattleModeServer.PlayerCount); // Object ID
        Stream.WritePositiveIntMax3(0);
       
        LogicTraitController.encode(Stream);
    }
}

class LogicTraitController {
    static encode(Stream: any) {
        Stream.writeBoolean(false);
    }
}

export default LogicGameObjectServer;
