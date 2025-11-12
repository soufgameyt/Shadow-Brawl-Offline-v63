import Environment from "../Environement/Environment";

class Addresses {
    static Imports = class {
        static Malloc: NativePointer;
    }

    static GUI_ShowFloaterTextAtDefaultPos: NativePointer;
    static GUI_showPopup: NativePointer;
    static GUIInstance: NativePointer;
    static StringCtor: NativePointer;
    static HomeMode_Enter: NativePointer;
    static AddFile: NativePointer;
    static StageAddChild: NativePointer;
    static GUIContainer: NativePointer;
    static GUIContainer_setMovieClip: NativePointer;
    static SpriteCtor: NativePointer;
    static Sprite_addChild: NativePointer;
    static DisplayObject_setPixelSnappedXY: NativePointer;
    static DisplayObject_setXY: NativePointer;
    static DisplayObject_setHeight: NativePointer;
    static DisplayObject_setWidth: NativePointer
    static LogicDataTables_getColorGradientByName: NativePointer;
    static DecoratedTextField_setupDecoratedText: NativePointer;
    static MovieClip_getTextFieldByName: NativePointer;
    static ResourceManager_getMovieClip: NativePointer;
    static GUIContainer_createScrollArea: NativePointer;
    static ScrollArea_enablePinching: NativePointer;
    static ScrollArea_enableHorizontalDrag: NativePointer;
    static ScrollArea_enableVerticalDrag: NativePointer;
    static ScrollArea_setAlignment: NativePointer;
    static ScrollArea_update: NativePointer;
    static ScrollArea_addContent: NativePointer;
    static CustomButton_buttonPressed: NativePointer;
    static MovieClip_setText: NativePointer;
    static GameButtonCtor: NativePointer;
    static MovieClipHelper_setTextFieldVerticallyCentered: NativePointer;
    static MovieClipHelper_setTextAndScaleIfNecessary: NativePointer;
    static Application_openUrl: NativePointer;
    static MovieClip_gotoAndStopFrameIndex: NativePointer

    static ServerConnectionUpdate: NativePointer;
    static State: NativePointer;
    static HasConnectFailed: NativePointer;
    static MessagingSend: NativePointer;
    static MessageManagerReceiveMessage: NativePointer;
    static MessageManagerInstance: NativePointer;
    static CreateMessageByType: NativePointer;
    static GetMessageType: NativePointer;
    static Destruct: NativePointer;
    static LogicLaserMessageFactory: NativePointer;
    static Decode: NativePointer;
    static PiranhaMessage: NativePointer;
    static GetLength: NativePointer;
    static IsServerShuttingDown: NativePointer;
    static ByteStreamWriteIntToByteArray: NativePointer;
    static LoginOkMessage: NativePointer;
    static HomePageButtonClicked: NativePointer;
    static LogicConfDataGetIntValue: NativePointer;
    static LogicLocalizationGetString: NativePointer;
    static StringConstructor: NativePointer;
    static PayloadSize: NativePointer;
    static PayloadPtr: NativePointer;
    static LogicVersionIsDev: NativePointer;
    static LogicVersionIsProd: NativePointer;
    static LogicVersionIsDeveloperBuild: NativePointer;
    static MessageLength: NativePointer;
    static ByteStream: NativePointer;
    static Version: NativePointer;
    static LogicGameModeUtil_getPlayerCount: NativePointer;
    static sm_offlineLocation: NativePointer;
    static MovieClip_getMovieClipByName: NativePointer;

    static GenericPopup_GenericPopup: NativePointer;
    static GenericPopup_setTitleTid: NativePointer;
    static GenericPopup_addButton: NativePointer;

    static LogicSkillServerCtor: NativePointer;
    static LogicSkillServerDtor: NativePointer;

    static Init() {
        Addresses.Imports.Malloc = Process.getModuleByName("libSystem.B.dylib").findExportByName("malloc")!;
        Addresses.GUI_ShowFloaterTextAtDefaultPos = Environment.LaserBase.add(0x0A4984);
        Addresses.GUI_showPopup = Environment.LaserBase.add(0x0A509C);
        Addresses.GUIInstance = Environment.LaserBase.add(0xEC2908);
        Addresses.StringCtor = Environment.LaserBase.add(0xB71488);
        Addresses.HomeMode_Enter = Environment.LaserBase.add(0x31D454);
        Addresses.AddFile = Environment.LaserBase.add(0xA3613C);
        Addresses.StageAddChild = Environment.LaserBase.add(0x9C0FEC);
        Addresses.GUIContainer = Environment.LaserBase.add(0x0A8070);
        Addresses.GUIContainer_setMovieClip = Environment.LaserBase.add(0x0A8454);
        Addresses.SpriteCtor = Environment.LaserBase.add(0x9B7BA4);
        Addresses.Sprite_addChild = Environment.LaserBase.add(0x9B7E20);
        Addresses.DisplayObject_setPixelSnappedXY = Environment.LaserBase.add(0x9A24EC);
        Addresses.DisplayObject_setXY = Environment.LaserBase.add(0x9A24D0);
        Addresses.DisplayObject_setHeight = Environment.LaserBase.add(0x9A2B0C);
        Addresses.DisplayObject_setWidth = Environment.LaserBase.add(0x9A2AC4);
        Addresses.LogicDataTables_getColorGradientByName = Environment.LaserBase.add(0x3EED64);
        Addresses.DecoratedTextField_setupDecoratedText = Environment.LaserBase.add(0x0A1944);
        Addresses.MovieClip_getTextFieldByName = Environment.LaserBase.add(0x9A7E94);
        Addresses.ResourceManager_getMovieClip = Environment.LaserBase.add(0x965038);
        Addresses.GUIContainer_createScrollArea = Environment.LaserBase.add(0x9D7230);
        Addresses.ScrollArea_enablePinching = Environment.LaserBase.add(0x9D849C);
        Addresses.ScrollArea_enableHorizontalDrag = Environment.LaserBase.add(0x9D8524);
        Addresses.ScrollArea_enableVerticalDrag = Environment.LaserBase.add(0x9D8518);
        Addresses.ScrollArea_setAlignment = Environment.LaserBase.add(0x9D8908);
        Addresses.ScrollArea_update = Environment.LaserBase.add(0x9D8194);
        Addresses.ScrollArea_addContent = Environment.LaserBase.add(0x9D7F6C);
        Addresses.CustomButton_buttonPressed = Environment.LaserBase.add(0x9D61D4);
        Addresses.MovieClip_setText = Environment.LaserBase.add(0x9A8094);
        Addresses.GameButtonCtor = Environment.LaserBase.add(0x0A72F0);
        Addresses.MovieClipHelper_setTextFieldVerticallyCentered = Environment.LaserBase.add(0x384960);
        Addresses.MovieClipHelper_setTextAndScaleIfNecessary = Environment.LaserBase.add(0x384CB4);
        Addresses.Application_openUrl = Environment.LaserBase.add(0xB78D80);
        Addresses.MovieClip_getMovieClipByName = Environment.LaserBase.add(0x9A7B8C);
        Addresses.MovieClip_gotoAndStopFrameIndex = Environment.LaserBase.add(0x9A6F60);
        Addresses.GenericPopup_GenericPopup = Environment.LaserBase.add(0x184684);
        Addresses.GenericPopup_setTitleTid = Environment.LaserBase.add(0x184A88);
        Addresses.GenericPopup_addButton = Environment.LaserBase.add(0x184F2C);

        Addresses.ServerConnectionUpdate = Environment.LaserBase.add(0x23AE30);
        Addresses.State = ptr(Process.pointerSize * 4);
        Addresses.HasConnectFailed = ptr(Process.pointerSize);
        Addresses.MessagingSend = Environment.LaserBase.add(0xB6193C);
        Addresses.MessageManagerReceiveMessage = Environment.LaserBase.add(0x232704);
        Addresses.MessageManagerInstance = Environment.LaserBase.add(0xEC2A58);
        Addresses.CreateMessageByType = Environment.LaserBase.add(0x474204);
        Addresses.GetMessageType = ptr(Process.pointerSize * 5);
        Addresses.Destruct = ptr(Process.pointerSize * 7);
        Addresses.LogicLaserMessageFactory = Environment.LaserBase.add(0xD93D16);
        Addresses.Decode = ptr(3 * Process.pointerSize);
        Addresses.PiranhaMessage = Environment.LaserBase.add(0x10D4A62);
        Addresses.GetLength = Environment.LaserBase.add(0xa961f8);
        Addresses.IsServerShuttingDown = Environment.LaserBase.add(0x7ae610);
        Addresses.ByteStreamWriteIntToByteArray = Environment.LaserBase.add(0xc8dd20);
        Addresses.LoginOkMessage = Environment.LaserBase.add(0x5514c4);
        Addresses.HomePageButtonClicked = Environment.LaserBase.add(0x3fca84);
        Addresses.LogicConfDataGetIntValue = Environment.LaserBase.add(0xc2fb88);
        Addresses.LogicLocalizationGetString = Environment.LaserBase.add(0x50da0c);
        Addresses.StringConstructor = Environment.LaserBase.add(0xca8264);
        Addresses.PayloadSize = ptr(Process.pointerSize + Process.pointerSize * 4);
        Addresses.PayloadPtr = ptr(9 * Process.pointerSize);
        Addresses.LogicVersionIsDev = Environment.LaserBase.add(0xbc54cc);
        Addresses.LogicVersionIsProd = Environment.LaserBase.add(0x4aa080);
        Addresses.LogicVersionIsDeveloperBuild = Environment.LaserBase.add(0x6c70b8);
        Addresses.MessageLength = ptr(Process.pointerSize * 2 + Process.pointerSize * 4 + Process.pointerSize);
        Addresses.ByteStream = ptr(Process.pointerSize * 2);
        Addresses.Version = ptr(Process.pointerSize);
        Addresses.LogicGameModeUtil_getPlayerCount = Environment.LaserBase.add(0x4DB678);
        Addresses.sm_offlineLocation = Environment.LaserBase.add(0xEE6740).add(96);

        Addresses.LogicSkillServerCtor = Environment.LaserBase.add(0x459380);
        Addresses.LogicSkillServerDtor = Environment.LaserBase.add(0x459384);
    }
}

export default Addresses;
