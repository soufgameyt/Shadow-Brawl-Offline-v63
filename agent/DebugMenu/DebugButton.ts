import Environment from "../Environement/Environment";

import Addresses from "../Manager/Addresses";
import Functions from "../Manager/Functions";

const {GUI, ResourceManager, GUIContainer, DisplayObject, LogicDataTables, DecoratedTextField, MovieClip, GameButton, MovieClipHelper, Sprite, String, ResourceListenner, Stage, ScrollArea, Imports, LogicLaserMessageFactory, Messaging, LogicGameModeUtil, LogicSkillServer, Application} = Functions;

import DebugMenuBase from "./DebugMenuBase";
import DebugMenu from "./DebugMenu";
import StringHelper from "../Utils/Game/StringHelper";
import Debugger from "../Utils/Debugger";
import ShowFloaterText from "../Utils/Game/ShowFloaterText";

class DebugButton {
    static IsDebugMenuOpenned: boolean = false;
    static isDebugMenuLoaded: boolean = false;
    
    static DebugButtonInstance: NativePointer;
    static DebugButtonMovieClip: NativePointer;

    static LoadDebugButton() {
        DebugButton.DebugButtonInstance = Imports.Malloc(5200);

        GameButton.GameButton(DebugButton.DebugButtonInstance);
        DebugButton.DebugButtonMovieClip = ResourceManager.getMovieClip(StringHelper.ptr("sc/debug.sc"), StringHelper.ptr("debug_button"));
        new NativeFunction(DebugButton.DebugButtonInstance.readPointer().add(352).readPointer(), 'void', ['pointer', 'pointer', 'bool'])(DebugButton.DebugButtonInstance, DebugButton.DebugButtonMovieClip, 1);

        DisplayObject.setXY(DebugButton.DebugButtonInstance, 5, 710);
        MovieClip.setText(DebugButton.DebugButtonMovieClip, StringHelper.ptr("Txt"), StringHelper.scptr("D"));
        Stage.AddChild(Stage.sm_instance.readPointer(), DebugButton.DebugButtonInstance);
        Debugger.Info("[DebugButton::LoadDebugButton] Loaded debug button!");

        DebugButton.isDebugMenuLoaded = true;
        DebugButton.IsDebugMenuOpenned = true;

        DebugMenu.NewDebugMenu();

        Interceptor.attach(Addresses.CustomButton_buttonPressed, {
			onEnter(args) {
				DebugButton.ButtonClicked(args);
			}
		});
    }

    static ButtonClicked(args: InvocationArguments) {
        if (DebugButton.DebugButtonInstance.toInt32() === (args[0] as NativePointer).toInt32()) {
            Debugger.Debug("[DebugButton::ButtonClicked] Button Clicked!");
            ShowFloaterText.Execute("[DebugButton::ButtonClicked] Button Clicked!")
            if (DebugButton.IsDebugMenuOpenned === false) {
                if (DebugButton.isDebugMenuLoaded == false) {
                    DebugMenu.NewDebugMenu();
                }
                DebugMenu.DebugMenuInstance.add(8).writeU8(1);
                DebugMenuBase.ScrollArea.add(8).writeU8(1);
                DebugMenuBase.TabScrollArea.add(8).writeU8(1);

                Debugger.Info("[DebugMenu::LoadDebugMenu] Debug Menu Loaded!");
                DebugButton.isDebugMenuLoaded = true;
                DebugButton.IsDebugMenuOpenned = true;
            } else {
                DebugMenu.DebugMenuInstance.add(8).writeU8(0);
                DebugMenuBase.ScrollArea.add(8).writeU8(0);
                DebugMenuBase.TabScrollArea.add(8).writeU8(0);

                DebugButton.IsDebugMenuOpenned = false;
                Debugger.Info("[DebugMenu::LoadDebugMenu] Debug Menu Closed!");
            }
        }
    }
}

export default DebugButton;