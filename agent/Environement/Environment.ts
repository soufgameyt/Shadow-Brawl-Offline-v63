import Java from "frida-java-bridge";
import ObjC from "frida-objc-bridge";
import Debugger from "../Utils/Debugger";

class Environment {
    static script_version: string = "1.1.6";
    static script_branch: string = "dev";
    static process_name: string = "Nulls Brawl"
    static platform: string = "iOS"

    static LaserModule: Module;
    static LaserBase: NativePointer;
    static LaserBaseSize: number;

    static Init() {
        if (Java.available) {
            Environment.platform = "Android";
        }
        else if (ObjC.available) {
            Environment.platform = "iOS";
        }
        else if (Process.platform == "linux") {
            Environment.platform = "Android";
        }
        else if (Process.platform == "darwin") {
            Environment.platform = "iOS";
        }
        else 
        {
            Debugger.Error("bro are you on windows phone or what");
        }


        if (Environment.platform == "iOS") {
            Environment.FindModuleByName("NullsBrawl");
            Environment.FindBaseAddress();
            Environment.FindBaseSize();
        }

        if (Environment.platform == "Android") {
            Environment.FindModuleByName("libg.so");
            Environment.FindBaseAddress();
            Environment.FindBaseSize();
        }
    }

    static FindModuleByName(name: string) {
        Environment.LaserModule = Process.getModuleByName(name);
    }

    static FindBaseAddress() {
        Environment.LaserBase = Environment.LaserModule.base;
    }

    static FindBaseSize() {
        Environment.LaserBaseSize = Environment.LaserModule.size;
    }
}

export default Environment;