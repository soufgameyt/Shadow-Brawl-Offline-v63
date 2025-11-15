import Functions from "./Functions";
import Addresses from "./Addresses";
import StringHelper from "../Utils/Game/StringHelper";
import Environment from "../Environement/Environment";
import ColorGradients from "../Utils/CSV/csv_client/Colorgradients";

const {GUI, ResourceManager, GUIContainer, DisplayObject, LogicDataTables, DecoratedTextField, MovieClip, GameButton, MovieClipHelper, Sprite, String, ResourceListenner, Stage, ScrollArea, Imports, LogicLaserMessageFactory, Messaging, LogicGameModeUtil, GenericPopup, Application} = Functions;

class ModMenu {
    static Buttons = [];
    static ButtonX = -280;
    static ButtonY = -110;
    static ButtonCount = 0;

    static LoadModMenuButton(HomePage: NativePointer) {
        let HomePageMovieClip = HomePage.add(112).readPointer();
        let ddd = new NativeFunction(Environment.LaserBase.add(0x9A6A30), 'pointer', ['pointer', 'pointer'])(HomePage, StringHelper.ptr("mainscreen_hud_left"))

        let TextPtr = Imports.Malloc(524);
        let MovieClipInstance = ResourceManager.getMovieClip(StringHelper.ptr("sc/ui.sc"), StringHelper.ptr("button_navi_news_custom")); // battle_card_titles_config_item

        GameButton.GameButton(TextPtr);
        new NativeFunction(TextPtr.readPointer().add(352).readPointer(), 'void', ['pointer', 'pointer', 'bool'])(TextPtr, MovieClipInstance, 1);
        DisplayObject.setXY(TextPtr, 970, 150);

        let NotificationChild = new NativeFunction(Environment.LaserBase.add(0x9A6A30), 'pointer', ['pointer', 'pointer'])(MovieClipInstance, StringHelper.ptr("notification"))
        Functions.MovieClip.gotoAndStopFrameIndex(NotificationChild, 2);

        let ColorGradientByName2 = LogicDataTables.getColorGradientByName(StringHelper.scptr(ColorGradients.Subwaysurfersrainbow.Name), 1);
        let version = MovieClip.getTextFieldByName(MovieClipInstance, StringHelper.ptr("txt"));
        DecoratedTextField.setupDecoratedText(version, StringHelper.scptr("Mod Menu"), ColorGradientByName2);

        Sprite.addChild(HomePageMovieClip, TextPtr)

        Interceptor.attach(Addresses.CustomButton_buttonPressed, {
		    onEnter(args) {
			    if (TextPtr.toInt32() === (args[0] as NativePointer).toInt32()) {
                    ModMenu.ModMenuButtonClicked();
                }
		    }
		});
    }
    
    static ModMenuButtonClicked() {
        let ModMenuPopupInstance = Imports.Malloc(4096);
        ModMenu.ModMenuPopup(ModMenuPopupInstance);

        GUI.ShowPopup(Environment.LaserBase.add(0xEC2908).readPointer(), ModMenuPopupInstance, 1, 0, 1);
    }

    static ModMenuPopup(ModMenuPopupInstance: NativePointer) {

        let s1 = StringHelper.scptr("login_calendar_notifications_popup");
        let s2 = StringHelper.scptr("");
		let s3 = StringHelper.scptr("------------ Mod Menu ------------");

		GenericPopup.GenericPopup(ModMenuPopupInstance, s1, 0, 0, s2, s2, s2, s2);
		DisplayObject.setXY(ModMenuPopupInstance, 576, 450);
		GenericPopup.setTitleTid(ModMenuPopupInstance, s3);

        let NextPage = GenericPopup.addButton(ModMenuPopupInstance, StringHelper.scptr("accept_button"), 1);
        new NativeFunction(NextPage.readPointer().add(424).readPointer(), 'void', ['pointer', 'pointer', 'bool'])(NextPage, StringHelper.scptr("Next Page ->"), 1);

        let PreviousPage = GenericPopup.addButton(ModMenuPopupInstance, StringHelper.scptr("decline_button"), 1);
        new NativeFunction(PreviousPage.readPointer().add(424).readPointer(), 'void', ['pointer', 'pointer', 'bool'])(PreviousPage, StringHelper.scptr("<- Previous Page"), 1);

        Interceptor.attach(Addresses.CustomButton_buttonPressed, {
		    onEnter(args) {
			    if (NextPage.toInt32() === (args[0] as NativePointer).toInt32()) 
                {
                    // ModMenu.NextPage();
                }
                if (PreviousPage.toInt32() === (args[0] as NativePointer).toInt32()) 
                {
                    // ModMenu.PreviousPage();
                }
		    }
		});

        ModMenu.ButtonX = -280;
        ModMenu.ButtonY = -100;
        ModMenu.ButtonCount = 0;

        ModMenu.CreateModMenuItem(ModMenuPopupInstance, "Hello");
        ModMenu.CreateModMenuItem(ModMenuPopupInstance, "Hi!");

        // Functions.MovieClip.setText(ModMenuPopupInstance, StringHelper.scptr("txt"), StringHelper.scptr("i love skibidi toilet sigma"));
    }

    static CreateModMenuItem(ModMenuPopupInstance: NativePointer, Text: string) {
        let TextPtr = Imports.Malloc(524);
        let MovieClipInstance = ResourceManager.getMovieClip(StringHelper.ptr("sc/ui.sc"), StringHelper.ptr("battle_card_titles_config_item"));

        GameButton.GameButton(TextPtr);
        new NativeFunction(TextPtr.readPointer().add(352).readPointer(), 'void', ['pointer', 'pointer', 'bool'])(TextPtr, MovieClipInstance, 1);
        MovieClip.gotoAndStopFrameIndex(MovieClipInstance, 2);
        DisplayObject.setXY(TextPtr, -135, ModMenu.ButtonY);

        ModMenu.ButtonY += 50;
        ModMenu.ButtonCount++;

        let NotificationChild = new NativeFunction(Environment.LaserBase.add(0x9A6A30), 'pointer', ['pointer', 'pointer'])(MovieClipInstance, StringHelper.ptr("notification"))
        MovieClip.gotoAndStopFrameIndex(NotificationChild, 2);
        // NotificationChild.add(8).writeU8(0);

        let TextMovieClip = new NativeFunction(Environment.LaserBase.add(0x9A6A30), 'pointer', ['pointer', 'pointer'])(MovieClipInstance, StringHelper.ptr("title"))

        let ColorGradientByName2 = LogicDataTables.getColorGradientByName(StringHelper.scptr(ColorGradients.Subwaysurfersrainbow.Name), 1);
        let version = MovieClip.getTextFieldByName(TextMovieClip, StringHelper.ptr("txt"));
        DecoratedTextField.setupDecoratedText(version, StringHelper.scptr(Text), ColorGradientByName2);

        Sprite.addChild(ModMenuPopupInstance, TextPtr);

        Interceptor.attach(Addresses.CustomButton_buttonPressed, {
		    onEnter(args) {
			    if (TextPtr.toInt32() === (args[0] as NativePointer).toInt32()) 
                {
                    MovieClip.gotoAndStopFrameIndex(MovieClipInstance, 3);
                }
		    }
		});
}
}

export default ModMenu