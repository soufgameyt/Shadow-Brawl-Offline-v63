import Environment from "../../../Environement/Environment";

import Addresses from "../../../Manager/Addresses";
import Functions from "../../../Manager/Functions";

const {GUI, ResourceManager, GUIContainer, DisplayObject, LogicDataTables, DecoratedTextField, MovieClip, GameButton, MovieClipHelper, Sprite, String, ResourceListenner, Stage, ScrollArea, Imports, LogicLaserMessageFactory, Messaging, LogicGameModeUtil, LogicSkillServer, Application} = Functions;

class Popups {
    static ShowFamePopup() {
        let FamePopupInstance = Imports.malloc(1024);
        new NativeFunction(Environment.LaserBase.add(0x18165C), 'void', ["pointer"])(FamePopupInstance);

        GUI.ShowPopup(Environment.LaserBase.add(0xEE61B8).readPointer(), FamePopupInstance, 0, 0, 0);
    }

    static ShowLatencyTestPopup() {
        let RankedEndPopupInstance = Imports.malloc(1024);
        new NativeFunction(Environment.LaserBase.add(0x18CE30), 'void', ["pointer"])(RankedEndPopupInstance);

        GUI.ShowPopup(Environment.LaserBase.add(0xEE61B8).readPointer(), RankedEndPopupInstance, 1, 0, 1);
    }

    static ShowLatencdzyTestPopup() {
        let RankedEndPopupInstance = Imports.malloc(1024);
        new NativeFunction(Environment.LaserBase.add(0x18CE30), 'void', ["pointer"])(RankedEndPopupInstance);

        GUI.ShowPopup(Environment.LaserBase.add(0xEE61B8).readPointer(), RankedEndPopupInstance, 1, 0, 1);
    }

    static ShowLatencydTestPopup() {
        let RankedEndPopupInstance = Imports.malloc(1024);
        new NativeFunction(Environment.LaserBase.add(0x18CE30), 'void', ["pointer"])(RankedEndPopupInstance);

        GUI.ShowPopup(Environment.LaserBase.add(0xEE61B8).readPointer(), RankedEndPopupInstance, 1, 0, 1);
    }

    static ShowWasabiTestPopup() {
        let RankedEndPopupInstance = Imports.malloc(1024);
        new NativeFunction(Environment.LaserBase.add(0x20CF48), 'void', ["pointer"])(RankedEndPopupInstance);

        GUI.ShowPopup(Environment.LaserBase.add(0xEE61B8).readPointer(), RankedEndPopupInstance, 1, 0, 1);
    }
}

export default Popups