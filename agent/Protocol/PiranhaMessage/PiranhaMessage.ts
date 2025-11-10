import LogicMath from "../../Utils/Math/LogicMath";

class PiranhaMessage {
    static encode(Message: NativePointer): number { 
        return (new NativeFunction(Message.readPointer().add(16).readPointer(), "int", ["pointer"]))(Message); 
    }

    static Decode(Message: NativePointer): NativePointer { 
        return (new NativeFunction(Message.readPointer().add(24).readPointer(), "pointer", ["pointer"]))(Message); 
    }

    static GetServiceNodeType(Message: NativePointer): number { 
        return (new NativeFunction(Message.readPointer().add(32).readPointer(), "int", ["pointer"]))(Message); 
    }

    static GetMessageType(Message: NativePointer): number { 
        return (new NativeFunction(Message.readPointer().add(40).readPointer(), "int", ["pointer"]))(Message); 
    }

    static GetMessageTypeName(Message: NativePointer): NativePointer { 
        return (new NativeFunction(Message.readPointer().add(48).readPointer(), "pointer", ["pointer"]))(Message); 
    }

    static GetEncodingLength(Message: NativePointer): number {
        return LogicMath.Max(PiranhaMessage.GetByteStream(Message).add(56).readS32(), PiranhaMessage.GetByteStream(Message).add(24).readS32());
    }

    static IsClientToServerMessage(Message: NativePointer): boolean {
        return (PiranhaMessage.GetMessageType(Message) >= 10000 && PiranhaMessage.GetMessageType(Message) < 20000) || PiranhaMessage.GetMessageType(Message) === 30000;
    }

    static Destruct(Message: NativePointer): number { 
        return (new NativeFunction(Message.readPointer().add(56).readPointer(), "int", ["pointer"]))(Message); 
    }

    static GetByteStream(Message: NativePointer): NativePointer { 
        return Message.add(8);
    }

}

export default PiranhaMessage;
