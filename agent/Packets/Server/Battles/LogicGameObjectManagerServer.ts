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

        Stream.writeBoolean(false);
        Stream.writeBoolean(false);

        if (StartLoadingMessage.GameModeVariation == LogicGameModeUtil.GetGameModeVariation("GemGrab")) 
        {
            Stream.WritePositiveVIntMax65535(0);
        }

        Stream.writeBoolean(false);
        Stream.WriteIntMax15(-1); // GameState
        
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);

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
        Stream.writeBoolean(false); // Damaged Enemy Ulti Full Flag
        Stream.writeBoolean(false);
        Stream.WritePositiveVIntMax255OftenZero(0); // Kills Count ??

        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.WritePositiveIntMax15(0);
        Stream.writeBoolean(false);
        Stream.WritePositiveIntMax131071(0);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);

        Stream.writeBoolean(false); // Has Ulti
        Stream.writeBoolean(false) // Has Bonus Skill

        Stream.writeBoolean(false); // TemporaryTeamOverride
        Stream.writeBoolean(false); // ControlledCharacterGID

        Stream.WritePositiveIntMax15(0);
        Stream.WritePositiveVIntMax255OftenZero(0);

        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);

        Stream.writeBoolean(false);
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
            Stream.writeBoolean(true);
            
            LogicCharacterServer.encode(Stream);
        }
       

        return Stream 
    }

    static EncodeTiles(Stream: any, TilesCount: number) {
        for (let i = 0; i < TilesCount; i++) 
        {
            Stream.writeBoolean(false);
        }
    }
    
    static EncodeDynamicTiles(Stream: any) {
        Stream.WritePositiveVIntMax65535OftenZero(0);
    }
}

export default LogicGameObjectManagerServer
