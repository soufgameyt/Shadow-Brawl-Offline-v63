import Environment from "../Environement/Environment";
import Addresses from "./Addresses";

class Functions {
    static GUI = class {
        static ShowFloaterTextAtDefaultPos: any;
        static ShowPopup: any;
        static GetInstance: any;
    };

    static ResourceManager = class {
        static getMovieClip: any;
    }

    static GUIContainer = class {
        static GUIContainer: any;
        static setMovieClip: any;
        static createScrollArea: any;
    }

    static DisplayObject = class {
        static setPixelSnappedXY: any;
        static setXY: any;
        static SetHeight: any
        static SetWidth: any
    }

    static LogicDataTables = class {
        static getColorGradientByName: any;
    }

    static DecoratedTextField = class {
        static setupDecoratedText: any;
    }

    static MovieClip = class {
        static getTextFieldByName: any;
        static setText: any;
        static getMovieClipByName: any;
        static gotoAndStopFrameIndex: any;
    }

    static GameButton = class {
        static GameButton: any;
    }

    static MovieClipHelper = class {
        static setTextFieldVerticallyCentered: any;
        static setTextAndScaleIfNecessary: any;
    }

    static Sprite = class {
        static Sprite: any;
        static addChild: any;
    }

    static String = class {
        static StringCtor: any;
    }

    static ResourceListenner = class {
        static AddFile: any;
    }

    static Stage = class {
        static addChild: any;
        static sm_instance: NativePointer;
    }

    static ScrollArea = class {
        static enablePinching: any;
        static enableHorizontalDrag: any;
        static enableVerticalDrag: any;
        static setAlignment: any;
        static update: any;
        static addContent: any;
    }

    static Imports = class {
        static malloc: any;
        static Free: any;
        static Open: any;
        static Read: any;
        static Write: any;
        static Close: any;
        static Mkdir: any;
    }

    static LogicLaserMessageFactory = class {
        static createMessageByType: any;
    }

    static Messaging = class {
        static receiveMessage: any;
        static Send: any;
    }
    
    static LogicGameModeUtil = class {
        static GetPlayerCount: any
    }

    static LogicSkillServer = class {
        static LogicSkillServer: any
        static Destructor: any
    }

    static Application = class {
        static openURL: any
    }

    static GenericPopup = class 
    {
        static GenericPopup: any
        static setTitleTid: any
        static addButton: any
    }

    static Init() {
        const LibSystem = Process.getModuleByName("libSystem.B.dylib");

        Functions.GUI.ShowFloaterTextAtDefaultPos = new NativeFunction(Addresses.GUI_ShowFloaterTextAtDefaultPos, 'void', ['pointer', 'pointer', 'float', 'int']);
        Functions.GUI.ShowPopup = new NativeFunction(Addresses.GUI_showPopup, 'void', ['pointer', 'pointer', 'int', 'int', 'int']);
        Functions.GUI.GetInstance = new NativeFunction(Addresses.GUIInstance, 'pointer', []);
        Functions.ResourceManager.getMovieClip = new NativeFunction(Addresses.ResourceManager_getMovieClip, 'pointer', ['pointer', 'pointer']);
        Functions.GUIContainer.GUIContainer = new NativeFunction(Addresses.GUIContainer, 'void', ['pointer']);
        Functions.GUIContainer.setMovieClip = new NativeFunction(Addresses.GUIContainer_setMovieClip, 'void', ['pointer', 'pointer']);
        Functions.GUIContainer.createScrollArea = new NativeFunction(Addresses.GUIContainer_createScrollArea, 'pointer', ['pointer', 'pointer', 'int']);
        Functions.DisplayObject.setPixelSnappedXY = new NativeFunction(Addresses.DisplayObject_setPixelSnappedXY, 'float', ['pointer', 'float', 'float']);
        Functions.DisplayObject.setXY = new NativeFunction(Addresses.DisplayObject_setXY, 'float', ['pointer', 'float', 'float']);
        Functions.DisplayObject.SetHeight = new NativeFunction(Addresses.DisplayObject_setHeight, 'float', ['pointer', 'float']);
        Functions.DisplayObject.SetWidth = new NativeFunction(Addresses.DisplayObject_setWidth, 'float', ['pointer', 'float']);
        Functions.LogicDataTables.getColorGradientByName = new NativeFunction(Addresses.LogicDataTables_getColorGradientByName, 'pointer', ['pointer', 'int']);
        Functions.DecoratedTextField.setupDecoratedText = new NativeFunction(Addresses.DecoratedTextField_setupDecoratedText, 'void', ['pointer', 'pointer', 'pointer']);
        Functions.MovieClip.getTextFieldByName = new NativeFunction(Addresses.MovieClip_getTextFieldByName, 'pointer', ['pointer', 'pointer']);
        Functions.MovieClip.setText = new NativeFunction(Addresses.MovieClip_setText, 'void', ['pointer', 'pointer', 'pointer']);
        Functions.MovieClipHelper.setTextFieldVerticallyCentered = new NativeFunction(Addresses.MovieClipHelper_setTextFieldVerticallyCentered, 'void', ['pointer']);
        Functions.Sprite.Sprite = new NativeFunction(Addresses.SpriteCtor, 'void', ['pointer', 'int']);
        Functions.String.StringCtor = new NativeFunction(Addresses.StringCtor, 'void', ['pointer', 'pointer']);
        Functions.Sprite.addChild = new NativeFunction(Addresses.Sprite_addChild, 'pointer', ['pointer', 'pointer']);
        Functions.ResourceListenner.AddFile = new NativeFunction(Addresses.AddFile, 'int', ['pointer', 'pointer', 'int', 'int', 'int', 'int', 'int']);
        Functions.Stage.addChild = new NativeFunction(Addresses.StageAddChild, 'pointer', ['pointer', 'pointer']);
        Functions.Stage.sm_instance = Environment.LaserBase.add(0xF026A8);
        Functions.ScrollArea.enablePinching = new NativeFunction(Addresses.ScrollArea_enablePinching, 'void', ['pointer', 'int']);
        Functions.ScrollArea.enableHorizontalDrag = new NativeFunction(Addresses.ScrollArea_enableHorizontalDrag, 'void', ['pointer', 'int']);
        Functions.ScrollArea.enableVerticalDrag = new NativeFunction(Addresses.ScrollArea_enableVerticalDrag, 'void', ['pointer', 'int']);
        Functions.ScrollArea.setAlignment = new NativeFunction(Addresses.ScrollArea_setAlignment, 'void', ['pointer', 'int']);
        Functions.ScrollArea.update = new NativeFunction(Addresses.ScrollArea_update, 'void', ['pointer', 'int']);
        Functions.ScrollArea.addContent = new NativeFunction(Addresses.ScrollArea_addContent, 'void', ['pointer', 'pointer'])
        Functions.GameButton.GameButton = new NativeFunction(Addresses.GameButtonCtor, 'void', ['pointer'])
        Functions.MovieClipHelper.setTextAndScaleIfNecessary = new NativeFunction(Addresses.MovieClipHelper_setTextAndScaleIfNecessary, 'void', ['pointer', 'pointer', 'int', 'int']);
        Functions.Application.openURL = new NativeFunction(Addresses.Application_openUrl, 'void', ['pointer']);
        Functions.MovieClip.getMovieClipByName = new NativeFunction(Addresses.MovieClip_getMovieClipByName, 'pointer', ['pointer', 'pointer']);
        Functions.MovieClip.gotoAndStopFrameIndex = new NativeFunction(Addresses.MovieClip_gotoAndStopFrameIndex, 'void', ['pointer', 'int']),

        Functions.GenericPopup.GenericPopup = new NativeFunction(Addresses.GenericPopup_GenericPopup, 'void', ['pointer', 'pointer', 'int', 'int', 'pointer', 'pointer', 'pointer', 'pointer']);
        Functions.GenericPopup.setTitleTid = new NativeFunction(Addresses.GenericPopup_setTitleTid, 'void', ['pointer', 'pointer']);
        Functions.GenericPopup.addButton = new NativeFunction(Addresses.GenericPopup_addButton, 'pointer', ['pointer', 'pointer', 'bool']);

        Functions.Imports.malloc = new NativeFunction(Addresses.Imports.malloc, 'pointer', ["uint"]);
        Functions.Imports.Free = new NativeFunction(LibSystem.findExportByName("free")!, "int", ["pointer"]);
        Functions.Imports.Open = new NativeFunction(LibSystem.findExportByName("open")!, "int", ["pointer", "int", "int"]);
        Functions.Imports.Read = new NativeFunction(LibSystem.findExportByName("read")!, "int", ["int", "pointer", "int"]);
        Functions.Imports.Write = new NativeFunction(LibSystem.findExportByName("write")!, "int", ["int", "pointer", "int"]);
        Functions.Imports.Close = new NativeFunction(LibSystem.findExportByName("close")!, "int", ["int"]);
        Functions.Imports.Mkdir = new NativeFunction(LibSystem.findExportByName("mkdir")!, "int", ["pointer", "uint32"]);

        Functions.LogicLaserMessageFactory.createMessageByType = new NativeFunction(Addresses.createMessageByType, "pointer", ["pointer", "int"]);
        Functions.Messaging.receiveMessage = new NativeFunction(Addresses.MessageManagerreceiveMessage, "int", ["pointer", "pointer"]);
        Functions.Messaging.Send = new NativeFunction(Addresses.MessagingSend, "int", ["pointer", "pointer"]);
        Functions.LogicGameModeUtil.GetPlayerCount = new NativeFunction(Addresses.LogicGameModeUtil_getPlayerCount, 'int', ['pointer']);

        Functions.LogicSkillServer.LogicSkillServer = new NativeFunction(Addresses.LogicSkillServerCtor, 'pointer', ['pointer', 'pointer']);
        Functions.LogicSkillServer.Destructor = new NativeFunction(Addresses.LogicSkillServerDtor, 'pointer', ['pointer']);
    }
}

export const {
    GUI,
    ResourceManager,
    GUIContainer,
    DisplayObject,
    LogicDataTables,
    DecoratedTextField,
    MovieClip,
    GameButton,
    MovieClipHelper,
    Sprite,
    String,
    ResourceListenner,
    Stage,
    ScrollArea,
    Imports,
    LogicLaserMessageFactory,
    Messaging,
    LogicGameModeUtil,
    LogicSkillServer,
    GenericPopup,
    Application
} = Functions;

export default Functions;
