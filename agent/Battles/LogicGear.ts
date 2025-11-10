import Environment from "../Environement/Environment";
import Functions from "../Manager/Functions";
import BitStream from "../DataStream/BitStream";

class LogicGear {
    static GearType = 4;
    static CalledLogs = false;

    static Init() {
        //LogicGear.PlaceHooks();
    }
    
    static PlaceHooks() {
        Interceptor.replace(Environment.LaserBase.add(0x009F34), new NativeCallback(function (a1, a2, a3) {
                if (LogicGear.CalledLogs == false) {
                    console.log("fuck")
                    LogicGear.CalledLogs = true;
                }
                return LogicGear.encode(a1, a2, a3);
            }, "void", ["pointer", "pointer", "pointer"])
        );
    }

    static encode(a1: NativePointer, a2: NativePointer, a3: NativePointer) {
        const BitStream_writePositiveInt = new NativeFunction(Environment.LaserBase.add(0x4DD1B4), 'pointer', ['pointer', 'int', 'int']);
        const BitStream_writePositiveVInt = new NativeFunction(Environment.LaserBase.add(0x4DD444), 'pointer', ['pointer', 'int', 'int']);

        BitStream_writePositiveInt(a2, 0, 1);
        /*if (LogicGear.GearType == 4) {
            BitStream_writePositiveInt(a2, 1, 10);
        }*/
    }
}

export default LogicGear;
