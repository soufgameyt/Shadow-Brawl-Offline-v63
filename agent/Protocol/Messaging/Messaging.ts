import Addresses from "../../Manager/Addresses.js";
import Environment from "../../Environement/Environment.js";
import BitStream from "../../DataStream/BitStream.js";
import LogicBattleModeServer from "../../Packets/Server/Battles/LogicBattleModeServer.js";
import Functions from "../../Manager/Functions";
import PiranhaMessage from "../PiranhaMessage/PiranhaMessage.js";
import Debugger from "../../Utils/Debugger.js";
import VisionUpdateMessage from "../../Packets/Server/Battles/VisionUpdateMessage.js";

const {GUI, ResourceManager, GUIContainer, DisplayObject, LogicDataTables, DecoratedTextField, MovieClip, GameButton, MovieClipHelper, Sprite, String, ResourceListenner, Stage, ScrollArea, Imports, LogicLaserMessageFactory, LogicGameModeUtil, LogicSkillServer, Application} = Functions;

// thx nates for help when i didn't understood this, thx sb for making offline guide
class Messaging 
{
    static sendOfflineMessage(Id: number, Payload: number[]): NativePointer 
    {
        let Version = Id === 20104 ? 1 : 0;
        if (Id != 24109) {
            Debugger.Info(`Sending offline message with Packet ID ${Id}, Payload size ${Payload.length}, Version ${Version}`);
        }

        let Factory = Imports.Malloc(1024);
        let Message = LogicLaserMessageFactory.createMessageByType(Factory, Id);
        PiranhaMessage.setMessageVersion(Message, Version);

        let PayloadLengthPtr = PiranhaMessage.getByteStream(Message).add(24);
        PayloadLengthPtr.writeS64(Payload.length);

        if (Payload.length > 0) {
            let PayloadPtr = Imports.Malloc(Payload.length).writeByteArray(Payload);
            PiranhaMessage.getByteStream(Message).add(56).writePointer(PayloadPtr);
        }

        PiranhaMessage.decode(Message);
        Messaging.receiveMessageOfflineMessage(Message);

        return Message;
    }

    static receiveMessageOfflineMessage(Message: NativePointer) 
    {
        Functions.Messaging.receiveMessage(Addresses.MessageManagerInstance.readPointer(), Message);
    }
}

export default Messaging;