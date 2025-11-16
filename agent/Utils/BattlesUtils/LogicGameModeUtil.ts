class LogicGameModeUtil {
	static PlayersCollectPowerCubes(Variation: number): boolean {
		const V1 = Variation - 6;
		if (V1 <= 8) {
			return ((0x119 >> V1) & 1) !== 0;
		} else {
			return false;
		}
	}

	static GetBattleTicks(V: number): number {
		let V2 = 2400;

		switch (V) {
			case 0:
			case 5:
			case 16:
			case 22:
			case 23:
				V2 = 4200;
				break;
			case 3:
			case 7:
			case 8:
				break;
			case 6:
			case 9:
			case 10:
			case 12:
			case 13:
			case 18:
			case 20:
				return 1 /*BattleMode.NO_TIME_TICKS;*/
			case 14:
				V2 = 9600;
				break;
			case 17:
			case 21:
				V2 = 3600;
				break;
			default:
				V2 = 20 * ((100 - 100/*BattleMode.NORMAL_TICKS - BattleMode.INTRO_TICKS*/) / 20);
				break;
		}

		return /*BattleMode.INTRO_TICKS*/ 100 + V2;
	}

	static GetRespawnSeconds(Variation: number): number {
		switch (Variation) {
			case 0:
			case 2:
			case 7:
				return 3;
			case 3:
				return 1;
			default:
				return 5;
		}
	}

	static PlayersCollectBountyStars(Variation: number): boolean {
		return Variation === 3 || Variation === 15;
	}

	static HasTwoTeams(Variation: number): boolean {
		return Variation !== 6;
	}

	static HasTwoBases(Variation: number): boolean {
		return Variation === 2 || Variation === 11;
	}

	static getGameModeVariation(Mode: string): number {
		switch (Mode) {
			case "CoinRush":
			case "GemGrab":
				return 0;
			case "Heist":
				return 2;
			case "BossFight":
			case "BigGame":
				return 7;
			case "Bounty":
				return 3;
			case "Artifact":
				return 4;
			case "LaserBall":
				return 5;
			case "Showdown":
				return 6;
			case "BattleRoyaleTeam":
				return 9;
			case "Survival":
				return 8;
			case "Raid":
				return 10;
			case "RoboWars":
				return 11;
			case "Tutorial":
				return 12;
			case "Training":
				return 13;
			case "TagTeam":
				return 24;
			case "ReachExit":
				return 30;
			case "MapPrint":
				return 99;
			default:
				return -1;
		}
	}
}

export default LogicGameModeUtil