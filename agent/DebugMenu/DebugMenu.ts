import Environment from "../Environement/Environment";

import Addresses from "../Manager/Addresses";
import Functions from "../Manager/Functions";

const {GUI, ResourceManager, GUIContainer, DisplayObject, LogicDataTables, DecoratedTextField, MovieClip, GameButton, MovieClipHelper, Sprite, String, ResourceListenner, Stage, ScrollArea, Imports, LogicLaserMessageFactory, Messaging, LogicGameModeUtil, LogicSkillServer, Application} = Functions;

import DebugMenuBase from "./DebugMenuBase";
import StringHelper from "../Utils/Game/StringHelper";


class DebugMenu {
    static DebugMenuInstance: NativePointer

    static NewDebugMenu() {
        DebugMenu.DebugMenuInstance = Imports.Malloc(5200);

        let SCFile = StringHelper.ptr("sc/debug.sc");
        let SCImport = StringHelper.ptr("debug_menu");

        DebugMenuBase.NewDebugMenuBase(DebugMenu.DebugMenuInstance, SCFile, SCImport);
        Stage.addChild(Stage.sm_instance.readPointer(), DebugMenu.DebugMenuInstance);
        Stage.addChild(Stage.sm_instance.readPointer(), DebugMenuBase.TabScrollArea);
        Stage.addChild(Stage.sm_instance.readPointer(), DebugMenuBase.ScrollArea);

        Interceptor.attach(Environment.LaserBase.add(0x0A40B4), { // GUI::update
            onLeave() {
                DebugMenuBase.update(DebugMenuBase.ScrollArea, 20);
                DebugMenuBase.update(DebugMenuBase.TabScrollArea, 20);
            }
        });
    }
}

export default DebugMenu
