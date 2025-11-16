import Environment from "../Environement/Environment";

import Addresses from "../Manager/Addresses";
import Functions from "../Manager/Functions";

const {GUI, ResourceManager, GUIContainer, DisplayObject, LogicDataTables, DecoratedTextField, MovieClip, GameButton, MovieClipHelper, Sprite, String, ResourceListenner, Stage, Imports, LogicLaserMessageFactory, Messaging, LogicGameModeUtil, LogicSkillServer, Application, ScrollArea} = Functions;

import StringHelper from "../Utils/Game/StringHelper";

import ReloadGame from "../Utils/Game/ReloadGame";
import Popups from "./DebugUtils/Popups/Popups";
import Dumper from "./DebugUtils/Dumper/Dumper";
import Debugger from "../Utils/Debugger";

class DebugMenuBase {
    static TabScrollArea: any
    static ScrollArea: any;
    
    static Buttons: any = [];
    static ButtonsX: number = 0;
    static ButtonsY: number = 20;

    static MiniCategorys: any = [];
    static MiniCategorysX: number = 0;
    static MiniCategorysY: number = 20;

    static Categorys: any = [];
    static CategorysX: number = 0;
    static CategorysY: number = 20;

    static CategoryButtons: any = [];
    static CategoryButtonsX: number = 0;
    static CategoryButtonsY: number = 0;

    static NewDebugMenuBase(Instance: any, SCFile: any, SCImport: any) {
        Sprite.Sprite(Instance, 1);

        let DebugMenuClip = ResourceManager.getMovieClip(SCFile, SCImport);
        GUIContainer.setMovieClip(Instance, DebugMenuClip);

        let ColorGradientByName = LogicDataTables.getColorGradientByName(StringHelper.scptr("Demons"), 1);
        let title = MovieClip.getTextFieldByName(DebugMenuClip, StringHelper.ptr("title"));
        DecoratedTextField.setupDecoratedText(title, StringHelper.scptr("Debug Menu"), ColorGradientByName);

        let ColorGradientByName2 = LogicDataTables.getColorGradientByName(StringHelper.scptr("Name8"), 1);
        let version = MovieClip.getTextFieldByName(DebugMenuClip, StringHelper.ptr("version"));
        DecoratedTextField.setupDecoratedText(version, StringHelper.scptr("v63.265"), ColorGradientByName2);

        let ColorGradientByName3 = LogicDataTables.getColorGradientByName(StringHelper.scptr("Name4"), 1);
        let search_help = MovieClip.getTextFieldByName(DebugMenuClip, StringHelper.ptr("search_help"));
        DecoratedTextField.setupDecoratedText(search_help, StringHelper.scptr("@soufgamev2"), ColorGradientByName3);

        let v15 = Stage.sm_instance.readPointer().add(0x1CD0).readInt() - (Stage.sm_instance.readPointer().add(84).readFloat() + Stage.sm_instance.readPointer().add(88).readFloat()) / (Stage.sm_instance.readPointer().add(0x1C40).readFloat() != 0.0 ? Stage.sm_instance.readPointer().add(0x1C40).readFloat() : 0.1);
        DisplayObject.setXY(Instance, v15, 0);

        let v17 = GUIContainer.createScrollArea(Instance, StringHelper.ptr("tab_area"), 1);
        DebugMenuBase.TabScrollArea = v17;
        v17.add(664).writeU8(1);
        ScrollArea.enablePinching(v17, 0);
        ScrollArea.enableHorizontalDrag(v17, 1);
        ScrollArea.enableVerticalDrag(v17, 0);
        ScrollArea.setAlignment(v17, 2);
        DisplayObject.setPixelSnappedXY(v17, 730, 73);

        let v18 = GUIContainer.createScrollArea(Instance, StringHelper.ptr("item_area"), 1);
        DebugMenuBase.ScrollArea = v18;
        v18.add(664).writeU8(1);
        ScrollArea.enablePinching(v18, 0);
        ScrollArea.enableHorizontalDrag(v18, 0);
        ScrollArea.setAlignment(v18, 4);
        DisplayObject.setPixelSnappedXY(v18, 730, 113);
        
        DebugMenuBase.createMiniCategory("", DebugMenuBase.closeAllCategories);
        DebugMenuBase.createMiniCategory("Misc", () => DebugMenuBase.toggleDebugMenuCategory("Misc"));
        DebugMenuBase.createMiniCategory("Battles", () => DebugMenuBase.toggleDebugMenuCategory("Battles"));
        DebugMenuBase.createMiniCategory("Dumper", () => DebugMenuBase.toggleDebugMenuCategory("Dumper"));

        DebugMenuBase.createDebugMenuItem("Reload Game", "Plus", ReloadGame.Execute, null);
        DebugMenuBase.createDebugMenuItem("Join Telegram", "Name11", ReloadGame.Execute, null);

        let Misc = DebugMenuBase.createDebugMenuCategory("Misc", "Name1", () => DebugMenuBase.toggleDebugMenuCategory("Misc"));

        DebugMenuBase.createDebugMenuItem("Enable China Version", "Name1", Popups.ShowFamePopup, "Misc", Misc);

        let BattlesInstance = DebugMenuBase.createDebugMenuCategory("Battles", "Name6", () => DebugMenuBase.toggleDebugMenuCategory("Battles"));

        DebugMenuBase.createDebugMenuItem("Infinite Ulti", "Name6", Popups.ShowFamePopup, "Battles", BattlesInstance);
        DebugMenuBase.createDebugMenuItem("No AI", "Name6", Popups.ShowFamePopup, "Battles", BattlesInstance);
        DebugMenuBase.createDebugMenuItem("Infinite Ammos", "Name6", Popups.ShowFamePopup, "Battles", BattlesInstance);

        let DumperInstance = DebugMenuBase.createDebugMenuCategory("Dumper", "Name9", () => DebugMenuBase.toggleDebugMenuCategory("Dumper"));

        DebugMenuBase.createDebugMenuItem("Dump OHD", "Name9", Dumper.DumpOHD, "Dumper", DumperInstance);
        DebugMenuBase.createDebugMenuItem("Dump Battle Struct", "Name9", Dumper.DumpBattles, "Dumper", DumperInstance);
        
        DebugMenuBase.updateLayout();
    }

    static update(ScrollAreaInstance: NativePointer, FramePer: number) {
        ScrollArea.update(ScrollAreaInstance, FramePer);
    }
    
    static updateLayout() {
        let currentY = 20;
        
        const allButtons = DebugMenuBase.Buttons.concat(DebugMenuBase.Categorys);
        allButtons.sort((a: any, b: any) => a.creationOrder - b.creationOrder);

        for (const button of allButtons) {
            DisplayObject.setPixelSnappedXY(button, 145, currentY + 10);
            (button as any).Y = currentY + 10;
            currentY += 55;

            if ((button as any).isExpanded) {
                const categoryButtons = DebugMenuBase.CategoryButtons.filter((btn: any) => btn.categoryName === (button as any).Text);
                for (const subButton of categoryButtons) {
                    subButton.add(8).writeU8(1);
                    DisplayObject.setPixelSnappedXY(subButton, 145, currentY + 10);
                    currentY += 55;
                }
            } else {
                 const categoryButtons = DebugMenuBase.CategoryButtons.filter((btn: any) => btn.categoryName === (button as any).Text);
                 for (const subButton of categoryButtons) {
                    subButton.add(8).writeU8(0);
                 }
            }
        }
    }

    static createMiniCategory(Text: string, Callback: any) {
        let ButtonInstance = Imports.malloc(1000);
        GameButton.GameButton(ButtonInstance);
        let MovieClipInstance = ResourceManager.getMovieClip(StringHelper.ptr('sc/debug.sc'), StringHelper.ptr('debug_menu_category_mini'));
        new NativeFunction(ButtonInstance.readPointer().add(352).readPointer(), 'void', ['pointer', 'pointer', 'bool'])(ButtonInstance, MovieClipInstance, 1);
        let TextField = MovieClip.getTextFieldByName(MovieClipInstance, StringHelper.ptr("Text"));
        MovieClipHelper.setTextAndScaleIfNecessary(TextField, StringHelper.scptr(Text), 1, 0)
        MovieClip.setText(MovieClipInstance, StringHelper.ptr("Text"), StringHelper.scptr(Text));
        DisplayObject.setPixelSnappedXY(ButtonInstance, 20 + DebugMenuBase.MiniCategorysX, 20);
        DebugMenuBase.MiniCategorysX += 45;

        ScrollArea.addContent(DebugMenuBase.TabScrollArea, ButtonInstance);

        Interceptor.attach(Addresses.CustomButton_buttonPressed, {
            onEnter(args) {
                if (ButtonInstance.toInt32() === args[0].toInt32()) {
                    Callback();
                }
            }
        });
        return ButtonInstance;
    }

    static createDebugMenuItem(Text: string, ColorGradient: string, Callback: any, CategoryName: any, CategoryButton: any = null) {
        let ButtonInstance = Imports.malloc(1000);
        GameButton.GameButton(ButtonInstance);
        let MovieClipInstance = ResourceManager.getMovieClip(StringHelper.ptr('sc/debug.sc'), StringHelper.ptr('debug_menu_item'));
        new NativeFunction(ButtonInstance.readPointer().add(352).readPointer(), 'void', ['pointer', 'pointer', 'bool'])(ButtonInstance, MovieClipInstance, 1);
        let TextField = MovieClip.getTextFieldByName(MovieClipInstance, StringHelper.ptr("Text"));

        let ColorGradientByName2 = LogicDataTables.getColorGradientByName(StringHelper.scptr(ColorGradient), 1);
        MovieClipHelper.setTextAndScaleIfNecessary(TextField, StringHelper.scptr(Text), 1, 0)
        DecoratedTextField.setupDecoratedText(TextField, StringHelper.scptr(Text), ColorGradientByName2);
        MovieClip.setText(MovieClipInstance, StringHelper.ptr("Text"), StringHelper.scptr(Text));
        MovieClipHelper.setTextFieldVerticallyCentered(TextField);

        ScrollArea.addContent(DebugMenuBase.ScrollArea, ButtonInstance);

        Interceptor.attach(Addresses.CustomButton_buttonPressed, {
            onEnter(args) {
                if (ButtonInstance.toInt32() === args[0].toInt32()) {
                    Callback();
                }
            }
        });

        if (CategoryName == null) {
            (ButtonInstance as any).creationOrder = DebugMenuBase.Buttons.length;
            DebugMenuBase.Buttons.push(ButtonInstance);
        }
        else {
            (ButtonInstance as any).categoryName = CategoryName;
            (ButtonInstance as any).categoryButton = CategoryButton;
            DebugMenuBase.CategoryButtons.push(ButtonInstance);
            ButtonInstance.add(8).writeU8(0);
        }

        return ButtonInstance;
    }

    static createDebugMenuCategory(Text: string, ColorGradient: string, Callback: any) {
        let ButtonInstance = Imports.malloc(1000);
        GameButton.GameButton(ButtonInstance);
        let MovieClipInstance = ResourceManager.getMovieClip(StringHelper.ptr('sc/debug.sc'), StringHelper.ptr('debug_menu_category'));
        new NativeFunction(ButtonInstance.readPointer().add(352).readPointer(), 'void', ['pointer', 'pointer', 'bool'])(ButtonInstance, MovieClipInstance, 1);
        let TextField = MovieClip.getTextFieldByName(MovieClipInstance, StringHelper.ptr("Text"));

        let ColorGradientByName2 = LogicDataTables.getColorGradientByName(StringHelper.scptr(ColorGradient), 1);
        DecoratedTextField.setupDecoratedText(TextField, StringHelper.scptr(Text), ColorGradientByName2);
        MovieClip.setText(MovieClipInstance, StringHelper.ptr("Text"), StringHelper.scptr("+ " + Text));
        
        MovieClipHelper.setTextFieldVerticallyCentered(TextField);
        (ButtonInstance as any).Text = Text;
        (ButtonInstance as any).MovieClip = MovieClipInstance;
        (ButtonInstance as any).isExpanded = false;
        (ButtonInstance as any).creationOrder = DebugMenuBase.Buttons.length + DebugMenuBase.Categorys.length;
        DebugMenuBase.Categorys.push(ButtonInstance);

        ScrollArea.addContent(DebugMenuBase.ScrollArea, ButtonInstance);

        Interceptor.attach(Addresses.CustomButton_buttonPressed, {
            onEnter(args) {
                if (ButtonInstance.toInt32() === args[0].toInt32()) {
                    Callback();
                }
            }
        });
        return ButtonInstance;
    }

    static closeAllCategories() {
        DebugMenuBase.Categorys.forEach((category: any) => {
            if (category.isExpanded) {
                category.isExpanded = false;
                const movieClip = category.MovieClip;
                MovieClip.setText(movieClip, StringHelper.ptr("Text"), StringHelper.scptr("+ " + category.Text));
            }
        });
        DebugMenuBase.updateLayout();
    }
    
    static toggleDebugMenuCategory(CategoryName: string) {
        const categoryButton = DebugMenuBase.Categorys.find((btn: any) => btn.Text === CategoryName);
        if (!categoryButton) return;
        (categoryButton as any).isExpanded = !(categoryButton as any).isExpanded;
        const movieClip = (categoryButton as any).MovieClip;
        const prefix = (categoryButton as any).isExpanded ? "- " : "+ ";
        MovieClip.setText(movieClip, StringHelper.ptr("Text"), StringHelper.scptr(prefix + CategoryName));
        DebugMenuBase.updateLayout();
    }
}

export default DebugMenuBase
