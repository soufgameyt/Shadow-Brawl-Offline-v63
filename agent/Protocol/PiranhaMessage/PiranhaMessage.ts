import Functions from "../../Manager/Functions";
import LogicMath from "../../Utils/Math/LogicMath";

class PiranhaMessage {
    static encode(Message: NativePointer): number { 
        return (new NativeFunction(Message.readPointer().add(16).readPointer(), "int", ["pointer"]))(Message); 
    }

    static decode(Message: NativePointer): NativePointer { 
        return (new NativeFunction(Message.readPointer().add(24).readPointer(), "pointer", ["pointer"]))(Message); 
    }

    static getServiceNodeType(Message: NativePointer): number { 
        return (new NativeFunction(Message.readPointer().add(32).readPointer(), "int", ["pointer"]))(Message); 
    }

    static getMessageType(Message: NativePointer): number { 
        return (new NativeFunction(Message.readPointer().add(40).readPointer(), "int", ["pointer"]))(Message); 
    }

    static getMessageTypeName(Message: NativePointer): NativePointer { 
        return (new NativeFunction(Message.readPointer().add(48).readPointer(), "pointer", ["pointer"]))(Message); 
    }

    static getEncodingLength(Message: NativePointer): number {
        return LogicMath.Max(PiranhaMessage.getByteStream(Message).add(56).readS32(), PiranhaMessage.getByteStream(Message).add(24).readS32());
    }

    static IsClientToServerMessage(Message: NativePointer): boolean {
        return (PiranhaMessage.getMessageType(Message) >= 10000 && PiranhaMessage.getMessageType(Message) < 20000) || PiranhaMessage.getMessageType(Message) === 30000;
    }

    static destruct(Message: NativePointer): number { 
        return (new NativeFunction(Message.readPointer().add(56).readPointer(), "int", ["pointer"]))(Message); 
    }

    static setMessageVersion(Message: NativePointer, version: number): void 
    {
        Message.add(136).writeS64(version);
    }

    static setMessageLength(Message: NativePointer, length: number): void 
    {
        PiranhaMessage.getByteStream(Message).add(24).writeU32(length);
    }

    static setMessagePayload(Message: NativePointer, Payload: number[]): void 
    {
        let PayloadPtr = Functions.Imports.malloc(Payload.length).writeByteArray(Payload);
        PiranhaMessage.getByteStream(Message).add(56).writePointer(PayloadPtr);
    }

    static getByteStream(Message: NativePointer): NativePointer { 
        return Message.add(8);
    }

}

export default PiranhaMessage;
