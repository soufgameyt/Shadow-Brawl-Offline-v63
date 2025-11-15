import LogicRandom from "../../../Utils/Math/LogicRandom"
import LogicGameModeUtil from "./Utils/LogicGameModeUtil"

// if the class is static its bc im lazy to rewrite some things
class LogicBattleModeServer {
    static Ticks: number = 1
    static HandledInputs: number = 0
    static Spectators: number = 0
    static IsBrawlTV: boolean = false

    static PlayerCount: number = 1 // LogicGameModeUtil.GetPlayerCount();
    static PlayerIndex: number = 0
    static TeamIndex: number = 0

    static ModifiersCount: number = 0
    static ModifiersID: number[] = [0]

    static CurrentPlayersInMM: number = 0
    static MaxPlayers: number = 6
    static MMTimer: number = 3

    static createOfflineServer(PlayerCount: number) 
    {
       // not done at all, and will not be done for a lot of time because its useless
       LogicBattleModeServer.setRandomSeed();
       LogicBattleModeServer.setPlayerCount(PlayerCount);
    }

    static setRandomSeed() 
    {
        let LogicRandomInstance = new LogicRandom();
        
        let result = LogicRandomInstance.rand(10000);
        LogicRandomInstance.setIteratedRandomSeed(result);
    }

    static setPlayerCount(PlayerCount: number) 
    {
        LogicBattleModeServer.PlayerCount = PlayerCount;
    }
}

export default LogicBattleModeServer