import Functions from "../../Manager/Functions";
import Addresses from "../../Manager/Addresses";
import StringHelper from "./StringHelper";

const {GUI, ResourceManager, GUIContainer, DisplayObject, LogicDataTables, DecoratedTextField, MovieClip, GameButton, MovieClipHelper, Sprite, String, ResourceListenner, Stage, ScrollArea, Imports, LogicLaserMessageFactory, Messaging, LogicGameModeUtil, LogicSkillServer, Application} = Functions;

class LobbyInfo {
    static CreateLobbyInfo(a1: NativePointer) {
        let HomePageInstance = a1.add(112).readPointer();

        let TextPtr = Imports.malloc(524);
        let MovieClipInstance = ResourceManager.getMovieClip(StringHelper.ptr("sc/debug.sc"), StringHelper.ptr("debug_menu_text"))

        GameButton.GameButton(TextPtr);
        new NativeFunction(TextPtr.readPointer().add(352).readPointer(), 'void', ['pointer', 'pointer', 'bool'])(TextPtr, MovieClipInstance, 1);

        DisplayObject.setHeight(TextPtr, 1.65); 
        DisplayObject.setWidth(TextPtr, 1.65);
        DisplayObject.setXY(TextPtr, 140, 90);

        TextPtr.add(16).writeFloat(1.65);
        TextPtr.add(28).writeFloat(1.65);

        let ColorGradientByName2 = LogicDataTables.getColorGradientByName(StringHelper.scptr("Name6"), 1);
        let version = MovieClip.getTextFieldByName(MovieClipInstance, StringHelper.ptr("Text"));
        DecoratedTextField.setupDecoratedText(version, StringHelper.scptr("Shadow Brawl Offline - v63.265\nBy @soufgamev2"), ColorGradientByName2);

        Sprite.addChild(HomePageInstance, TextPtr)

        Interceptor.attach(Addresses.CustomButton_buttonPressed, {
		    onEnter(args) {
			    if (TextPtr.toInt32() === (args[0] as NativePointer).toInt32()) {
                    LobbyInfo.LobbyInfoClicked();
                }
		    }
		});
    }

    static LobbyInfoClicked() {
        Application.openURL(StringHelper.scptr("https://t.me/laserx_framework"));
    }
}

export default LobbyInfo