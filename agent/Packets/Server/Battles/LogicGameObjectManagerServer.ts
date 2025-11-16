import BitStream from "../../../DataStream/BitStream.js"
import LogicBattleModeServer from "./LogicBattleModeServer.js";
import StartLoadingMessage from "./StartLoadingMessage.js";
import LogicGameModeUtil from "../../../Utils/BattlesUtils/LogicGameModeUtil.js";
import LogicCharacterServer from "./LogicCharacterServer.js";

class LogicGameObjectManagerServer {
    static encode() {
        let Stream = new BitStream();

        Stream.writePositiveIntMax2097151(1000000); // Global ID
        Stream.writePositiveIntMax2097151(0);

        Stream.writeBoolean(false);
        Stream.writeBoolean(false);

        if (StartLoadingMessage.GameModeVariation == LogicGameModeUtil.getGameModeVariation("GemGrab")) 
        {
            Stream.writePositiveVIntMax65535(0);
        }

        Stream.writeBoolean(false);
        Stream.writeIntMax15(-1); // GameState
        
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);

        Stream.writePositiveIntMax31(0);
        Stream.writePositiveIntMax63(0); // 14
        Stream.writePositiveIntMax31(0); // 16
        Stream.writePositiveIntMax63(0); // 32

        LogicGameObjectManagerServer.encodeTiles(Stream, 0); // 0 = tiles count
        LogicGameObjectManagerServer.encodeDynamicTiles(Stream);

        Stream.writePositiveVIntMax65535OftenZero(0);
        Stream.writePositiveVIntMax65535OftenZero(0);

        Stream.writePositiveIntMax4095(0); // Super Charge - Max 4000
        Stream.writePositiveIntMax3(0);
        Stream.writePositiveIntMax4095(0); // Hypercharge Charge - Max 4000
        Stream.writeBoolean(false); // Damaged Enemy Ulti Full Flag
        Stream.writeBoolean(false);
        Stream.writePositiveVIntMax255OftenZero(0); // Kills Count ??

        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writePositiveIntMax15(0);
        Stream.writeBoolean(false);
        Stream.writePositiveIntMax2047(0);

        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false); // Has Ulti
        Stream.writeBoolean(false) // Has Bonus Skill
        Stream.writeBoolean(false); // TemporaryTeamOverride
        Stream.writeBoolean(false); // ControlledCharacterGID

        Stream.writePositiveIntMax15(0);
        Stream.writePositiveVIntMax255OftenZero(0);

        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);

        Stream.writeBoolean(false);
        Stream.writeIntMax16383(0);
        Stream.writePositiveIntMax1048575(0);

        Stream.writePositiveVIntMax65535OftenZero(0);
        Stream.writePositiveVIntMax255OftenZero(0);
        Stream.writePositiveVIntMax2147483647OftenZero(69);

        Stream.writePositiveIntMax127(0);
        Stream.writePositiveIntMax127(0);
        Stream.writePositiveIntMax127(0);

        Stream.writePositiveVIntMax65535(0); // GameObjects Count
        {
            //Stream.writePositiveIntMax31(16); // Type : Brawler
            //Stream.writePositiveIntMax1023(0); // CSV ID : Shelly
            //Stream.writePositiveVIntMax65535(0);
            //Stream.writeBoolean(false);
            
            //LogicCharacterServer.encode(Stream);
        }
       
        return Stream;
    }

    static encodeTiles(Stream: any, TilesCount: number) {
        for (let i = 0; i < TilesCount; i++) 
        {
            Stream.writeBoolean(false);
        }
    }
    
    static encodeDynamicTiles(Stream: any) {
        Stream.writePositiveVIntMax65535OftenZero(0);
    }
}

export default LogicGameObjectManagerServer
