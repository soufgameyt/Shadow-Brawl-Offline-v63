import LogicGameObjectServer from "./LogicGameObjectServer";
import LogicCharacterComponentControllerServer from "./LogicCharacterComponentControllerServer";
import LogicStatusEffectControllerServer from "./LogicStatusEffectControllerServer";
import LogicSkillServer from "./LogicSkillServer";

class LogicCharacterServer {
    static encode(Stream: any) {
        LogicGameObjectServer.encode(Stream);

        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);

        Stream.writePositiveIntMax7(1); // Walk Animation??
        Stream.writeBoolean(false); // Damage Boost
        Stream.writeIntMax63(63);

        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writePositiveIntMax7(0);
        Stream.writePositiveIntMax511(0);

        Stream.writePositiveVIntMax65535OftenZero(0);
        Stream.writePositiveVIntMax65535OftenZero(0);

        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);

        Stream.writePositiveVIntMax255OftenZero(0);

        LogicStatusEffectControllerServer.encode(Stream);
        LogicCharacterComponentControllerServer.encode(Stream);

        Stream.writePositiveVIntMax255OftenZero(0);
        Stream.writePositiveVIntMax2147483647(0);
        Stream.writePositiveVIntMax2147483647(0);

        Stream.writeBoolean(false);
        Stream.writePositiveVIntMax255OftenZero(0);
        Stream.writePositiveVIntMax255OftenZero(0);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writePositiveVIntMax255OftenZero(0);
        Stream.writeBoolean(false);

        Stream.writePositiveIntMax3(0);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writePositiveIntMax3(0);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writePositiveIntMax511(0);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);

        Stream.writePositiveIntMax31(0);
        Stream.writeBoolean(false);

        Stream.writePositiveIntMax3(0);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writePositiveIntMax1023(0);
        Stream.writeBoolean(false);
        Stream.writePositiveVIntMax65535OftenZero(0);
        Stream.writePositiveVIntMax2147483647OftenZero(0);
    }
}

export default LogicCharacterServer;
