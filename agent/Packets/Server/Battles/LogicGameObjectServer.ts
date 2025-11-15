import LogicBattleModeServer from "./LogicBattleModeServer";

class LogicGameObjectServer {
    static encode(Stream: any) {
        Stream.writePositiveVIntMax65535(2550); // Position X
        Stream.writePositiveVIntMax65535(8550); // Position Y
        Stream.writePositiveVIntMax65535(0); // RenderZ Z
        Stream.writePositiveVIntMax255(17 * LogicBattleModeServer.PlayerCount); // Object ID
        Stream.writePositiveIntMax3(0);
       
        LogicTraitController.encode(Stream);
    }
}

class LogicTraitController {
    static encode(Stream: any) {
        Stream.writeBoolean(false);
    }
}

export default LogicGameObjectServer;
