import Environment from "../Environement/Environment";
import Functions from "../Manager/Functions";
import BitStream from "../DataStream/BitStream";
import LogicAccessoryData from "./LogicAccessoryData";
import LogicCharacterServer from "./LogicCharacterServer";
import LogicMath from "../Utils/Math/LogicMath";
import Debugger from "../Utils/Debugger";

const {GUI, ResourceManager, GUIContainer, DisplayObject, LogicDataTables, DecoratedTextField, MovieClip, GameButton, MovieClipHelper, Sprite, String, ResourceListenner, Stage, ScrollArea, Imports, LogicLaserMessageFactory, Messaging, LogicGameModeUtil, LogicSkillServer, Application} = Functions;


class LogicAccessory {
    static X = 0;
    static Y = 0;

    static Gadget: NativePointer
    static IsGadgetEnabled: boolean = false
    static State = 0;
    static ActivationDelay = 0;
    static StartUsingTick = 0;
    static CoolDown = 6;
    static Uses = 3;
    static Angle = 0;
    static IsActive = 0;
    static TicksActive = 0;

    static Type = LogicAccessoryData.Type;
    static ActiveTicks = LogicAccessoryData.ActiveTicks;


    static Init() {
        // LogicAccessory.PlaceHooks();
    }
    
    static PlaceHooks() {
        Interceptor.attach(Environment.LaserBase.add(0x009F34), {
            onEnter(args) {
                console.log("FUCK LINK TIME OPTIMISATION")
                if ((this.context as Arm64CpuContext).lr.equals(Environment.LaserBase.add(0x4507E0)))
                {
                    console.log("Encode called");
                    LogicAccessory.encode(args[0], args[1], args[2].toInt32());
                }

                if ((this.context as Arm64CpuContext).lr.equals(Environment.LaserBase.add(0x4C3C74)))
                {
                    console.log("TriggerAccessory called");
                    LogicAccessory.TriggerAccessory(args[0], args[1], args[2].toInt32(), args[3].toInt32());
                }
            }
        });

        /*Interceptor.replace(Environment.LaserBase.add(0x423850), new NativeCallback(function (a1, a2) {
                return LogicAccessory.UpdateAccessory(a1, a2)
            }, "void", ["pointer", "pointer"])
        );*/

        Interceptor.attach(Environment.LaserBase.add(0x426C18), { // LogicAccessory::LogicAccessory
            onEnter(args) {
                LogicAccessory.LogicAccessory();
            }
        })
    }

    static LogicAccessory() {
        /*LogicAccessory.Gadget = LogicAccessory.GetGadgetType(args[1])
        LogicAccessory.IsGadgetEnabled = false;
        LogicAccessory.State = 0;
        LogicAccessory.CoolDown = 0;
        LogicAccessory.Uses = 0;
        LogicAccessoryData.Type = LogicAccessory.GetGadgetType(args[1])
        LogicAccessoryData.SubType = LogicAccessory.GetSubType(args[1])
        LogicAccessoryData.CustomValueValue1 = LogicAccessory.GetCustomValue1(args[1])*/
                
        Debugger.Info("[* LogicAccessory::LogicAccessory] Gadget created with type: " + LogicAccessory.Gadget + " and subtype: " + LogicAccessoryData.SubType)
    }

    static UpdateAccessory(a1: NativePointer, a2: NativePointer) {
        LogicAccessory.State = 1;
        LogicAccessory.CoolDown = LogicMath.Max(0, LogicAccessory.CoolDown - 1);

        if (LogicAccessory.IsActive) 
        {
            if (LogicAccessory.ActivationDelay < 1) 
            {
                if (LogicAccessory.TicksActive >= LogicAccessory.ActiveTicks && LogicAccessory.Type != "ulti_change") {
                    LogicAccessory.IsActive = 1;
                    LogicAccessory.CoolDown = 5;
                } 
                else 
                {
                    LogicAccessory.TickAccessory(a1);
                    LogicAccessory.TicksActive++;
                }
            }
            else 
            {
                LogicAccessory.ActivationDelay--;
                if (LogicAccessory.ActivationDelay == 0) 
                {
                    LogicAccessory.ActivateAccessory(a1)
                }
            }
        }
    }

    static TickAccessory(a1: NativePointer) {
        switch (LogicAccessory.Type)
        {
            case "i dont know":
                break;
        }
        
    }

    static GetActivationAngle(a1: NativePointer) {
        if (LogicAccessory.X == 0 && LogicAccessory.Y == 0) {

        }
        return LogicMath.GetAngle(LogicAccessory.X , LogicAccessory.Y);
    }

    static ActivateAccessory(a1: NativePointer) {
        // const LogicGameObjectServer_GetX = new NativeFunction(Environment.LaserBase.add(0x44E370), 'int', ['pointer']);
        // const LogicGameObjectServer_GetY = new NativeFunction(Environment.LaserBase.add(0x44E368), 'int', ['pointer']);
        switch(LogicAccessory.Type) 
        {
            case "dash":
                //LogicCharacterServer.triggerPushback(a1, LogicGameObjectServer.getX(a1), LogicMath.getRotatedX(100, 0, LogicAccessory.getActivationAngle(a1)), LogicGameObjectServer.getY(a1) - LogicMath.getRotatedY(1000, 0, LogicAccessory.getActivationAngle(a1)), 6, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0)
                break;
        }
    }

    static TriggerAccessory(a1: NativePointer, a2: NativePointer, a3: number, a4: number) {
        if (LogicAccessory.CoolDown <= 0 && !LogicAccessory.IsActive) {
            LogicAccessory.IsActive = 1;
            LogicAccessory.TicksActive = 0;
            LogicAccessory.ActivateAccessory(a1);
        }
    }
    
    static encode(a1: NativePointer, a2: NativePointer, a3: number) {
        const BitStream_writePositiveInt = new NativeFunction(Environment.LaserBase.add(0x4DD1B4), 'pointer', ['pointer', 'int', 'int']);
        const BitStream_writePositiveVInt = new NativeFunction(Environment.LaserBase.add(0x4DD444), 'pointer', ['pointer', 'int', 'int']);

        BitStream_writePositiveInt(a2, LogicAccessory.IsActive, 1);
        BitStream_writePositiveVInt(a2, LogicAccessory.State, 4);        
        BitStream_writePositiveInt(a2, 0, 1);
        BitStream_writePositiveVInt(a2, LogicAccessory.CoolDown, 3);
        
        if (LogicAccessory.State == 1) {
            BitStream_writePositiveInt(a2, LogicAccessory.StartUsingTick, 14);
            BitStream_writePositiveInt(a2, LogicAccessory.Angle, 9);
        }

        BitStream_writePositiveInt(a2, LogicAccessory.Uses, 3);
    }
}

export default LogicAccessory;
