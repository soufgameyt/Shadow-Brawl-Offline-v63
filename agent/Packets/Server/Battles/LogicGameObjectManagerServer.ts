import BitStream from "../../../DataStream/BitStream.js"
import LogicBattleModeServer from "./LogicBattleModeServer.js";
import StartLoadingMessage from "./StartLoadingMessage.js";
import LogicGameModeUtil from "../../../Utils/BattlesUtils/LogicGameModeUtil.js";
import LogicPlayer from "./LogicPlayer.js";
import LogicCharacterServer from "./LogicCharacterServer.js";

class LogicGameObjectManagerServer {
    static encode() {
        let Stream = new BitStream();

        Stream.WritePositiveIntMax2097151(1000000); // Global ID
        Stream.WritePositiveIntMax2097151(0);

        Stream.WriteBoolean(false);
        Stream.WriteBoolean(false);

        if (StartLoadingMessage.GameModeVariation == LogicGameModeUtil.GetGameModeVariation("GemGrab")) 
        {
            Stream.WritePositiveVIntMax65535(0);
        }

        Stream.WriteBoolean(false);
        Stream.WriteIntMax15(-1); // GameState
        
        Stream.WriteBoolean(false);
        Stream.WriteBoolean(false);
        Stream.WriteBoolean(false);
        Stream.WriteBoolean(false);

        Stream.WritePositiveIntMax31(0);
        Stream.WritePositiveIntMax63(0); // 14
        Stream.WritePositiveIntMax31(0); // 16
        Stream.WritePositiveIntMax63(0); // 32

        LogicGameObjectManagerServer.EncodeTiles(Stream, 0); // 0 = tiles count
        LogicGameObjectManagerServer.EncodeDynamicTiles(Stream);

        Stream.WritePositiveVIntMax65535OftenZero(0);
        Stream.WritePositiveVIntMax65535OftenZero(0);

        Stream.WritePositiveIntMax4095(4000); // Super Charge - Max 4000
        Stream.WritePositiveIntMax3(0);
        Stream.WritePositiveIntMax4095(4000); // Hypercharge Charge - Max 4000
        Stream.WriteBoolean(false); // Damaged Enemy Ulti Full Flag
        Stream.WriteBoolean(false);
        Stream.WritePositiveVIntMax255OftenZero(0); // Kills Count ??

        Stream.WriteBoolean(false);
        Stream.WriteBoolean(false);
        Stream.WritePositiveIntMax15(0);
        Stream.WriteBoolean(false);
        Stream.WritePositiveIntMax131071(0);
        Stream.WriteBoolean(false);
        Stream.WriteBoolean(false);

        Stream.WriteBoolean(false); // Has Ulti
        Stream.WriteBoolean(false) // Has Bonus Skill

        Stream.WriteBoolean(false); // TemporaryTeamOverride
        Stream.WriteBoolean(false); // ControlledCharacterGID

        Stream.WritePositiveIntMax15(0);
        Stream.WritePositiveVIntMax255OftenZero(0);

        Stream.WriteBoolean(false);
        Stream.WriteBoolean(false);
        Stream.WriteBoolean(false);

        Stream.WriteBoolean(false);
        Stream.WriteIntMax16383(0);
        Stream.WritePositiveIntMax1048575(0);

        Stream.WritePositiveVIntMax65535OftenZero(0);
        Stream.WritePositiveVIntMax255OftenZero(0);

        Stream.WritePositiveIntMax127(0);
        Stream.WritePositiveIntMax127(0);

        Stream.WritePositiveVIntMax65535(1); // GameObjects Count
        {
            Stream.WritePositiveIntMax127(16); // Type : Brawler
            Stream.WritePositiveVIntMax65535(1); // CSV ID : Colt
            Stream.WriteBoolean(true);
            
            LogicCharacterServer.encode(Stream);
        }
       

        return Stream 
    }

    static EncodeTiles(Stream: any, TilesCount: number) {
        for (let i = 0; i < TilesCount; i++) 
        {
            Stream.WriteBoolean(false);
        }
    }
    
    static EncodeDynamicTiles(Stream: any) {
        Stream.WritePositiveVIntMax65535OftenZero(0);
    }
}

export default LogicGameObjectManagerServer
