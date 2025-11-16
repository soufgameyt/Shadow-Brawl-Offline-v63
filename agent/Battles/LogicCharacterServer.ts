import Environment from "../Environement/Environment";
import Functions from "../Manager/Functions";

const {GUI, ResourceManager, GUIContainer, DisplayObject, LogicDataTables, DecoratedTextField, MovieClip, GameButton, MovieClipHelper, Sprite, String, ResourceListenner, Stage, ScrollArea, Imports, LogicLaserMessageFactory, Messaging, LogicGameModeUtil, LogicSkillServer, Application} = Functions;


class LogicCharacterServer {
    static Init() {
        //LogicCharacterServer.PlaceHooks();
    }

    static PlaceHooks() {
        Interceptor.replace(Environment.LaserBase.add(0x4349E4), new NativeCallback(function (a1, a2, a3) {
                return LogicCharacterServer.SwapSkillTo(a1, a2, a3);
            }, "pointer", ["pointer", "int", "pointer"])
        );
    }
    
    static SwapSkillTo(a1: NativePointer, a2: number, a3: NativePointer) {
        if (![0, 1].includes(a2)) {
            return
        }
        let NewSkill: NativePointer = Imports.malloc(72)
        let result = LogicSkillServer.LogicSkillServer(NewSkill, a3);

        let SkillContainer = a1.add(424).readPointer()
        let SkillCount = a1.add(436).readInt();

        let SkillServer = SkillContainer.add(a2 * 8).readPointer()
        if (!SkillServer.isNull()) {
            SkillContainer.add(8).writeInt(SkillCount - 1);
            LogicSkillServer.Destructor(SkillServer);
            Imports.Free(SkillServer);
        }

        SkillContainer.add(8).writeInt(SkillCount + 1);
        SkillContainer.add(8 * a2).writePointer(NewSkill)
        return result;
    }


    static TriggerPushback(a1: NativePointer, a2: number, a3: number, a4: number, a5: number, a6: number, a7: number, a8: number, a9: number, a10: number, a11: number, a12: number, a13: number, a14: number, a15: number) {
        const LogicCharacterServer_TriggerPushBack = new NativeFunction(Environment.LaserBase.add(0x4406C4), 'void', ['pointer', 'int', 'int', 'int', 'int', 'bool', 'int', 'int', 'int', 'bool', 'int', 'int', 'int', 'int', 'int']);

        LogicCharacterServer_TriggerPushBack(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
        console.log("nigger")
    }

}

export default LogicCharacterServer;
