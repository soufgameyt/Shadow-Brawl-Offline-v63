import LogicPlayerData from "../../../../../Configuration/LogicPlayerData";
import { Brawler } from "../../../../../Configuration/LogicPlayerData";
import Resources from "../../../../../Utils/CSV/csv_logic/Resources";

class LogicClientAvatar {
	private stream: any;
    private CommodityCount!: number

	private AccountID: number[];

	private Name: string;
	private IsNameSetByUser: boolean
	private NameSetByUser: string;
	private TutorialsCompletedCount: number;

	private Gold!: number;
	private Diamonds!: number;
	private FreeDiamonds!: number;
    private Blings!: number;
    private ChromaticTokens!: number;
    private DailyStreak!: number;
	private Powerpoints!: number;

	private CumulativePurchasedDiamonds!: number;

	private OwnedBrawlers: Record < number, Brawler > ;
	private OwnedBrawlersCount: number;

	public constructor(stream: any) {
		this.stream = stream;
        this.setCommodityCount(28);

		this.AccountID = [0, 256617006]; // LogicPlayerData.GetAccountID();

		this.Name = "Brawler";
		this.IsNameSetByUser = true;
		this.NameSetByUser = LogicPlayerData.getPlayerName();
		this.TutorialsCompletedCount = 2;

		this.setCommodityCount(28);
		let Currencies = LogicPlayerData.getCurrencys();

		this.setGold(Currencies.Gold);
		this.setDiamonds(Currencies.Diamonds);
		this.setFreeDiamonds(Currencies.FreeDiamonds);
		this.setBlings(Currencies.Blings);
		this.setChromaticTokens(Currencies.ChromaCredits);
		this.setPowerPoints(Currencies.PowerPoints);
		this.setDailyStreak(67);
		this.setCumulativePurchasedDiamonds(0);
		
		this.OwnedBrawlers = LogicPlayerData.GetOwnedBrawlers();
		this.OwnedBrawlersCount = Object.values(this.OwnedBrawlers).length;
	}

	public encode(): void {
		this.stream.WriteVLong(this.AccountID[0], this.AccountID[1]);
		this.stream.WriteVLong(this.AccountID[0], this.AccountID[1]);
		this.stream.WriteVLong(0, 0);

		this.stream.writeString(this.NameSetByUser);
		this.stream.writeBoolean(this.IsNameSetByUser);
		this.stream.WriteInt(-1);

		this.stream.writeVInt(this.CommodityCount);
		{
			this.encodeCommodity();
		}

		this.stream.writeVInt(this.FreeDiamonds);
		this.stream.writeVInt(this.Diamonds);
		this.stream.writeVInt(10);
		this.stream.writeVInt(0);
		this.stream.writeVInt(this.CumulativePurchasedDiamonds);
		this.stream.writeVInt(0);
		this.stream.writeVInt(0);
		this.stream.writeVInt(0);
		this.stream.writeVInt(0);
		this.stream.writeVInt(0);
		this.stream.writeVInt(0);
		this.stream.writeVInt(this.TutorialsCompletedCount);
		this.stream.writeVInt(0);
		this.stream.writeVInt(0);
		this.stream.writeVInt(0);
		this.stream.writeVInt(0);
		this.stream.writeString("");
		this.stream.writeVInt(0);
		this.stream.writeVInt(0);
		this.stream.writeVInt(0);
		this.stream.writeBoolean(false);
	}

	public encodeCommodity() {
		this.stream.writeVInt(Object.values(this.OwnedBrawlers).map(brawler => brawler.CardID).length + 8);
		for (const CardId of Object.values(this.OwnedBrawlers).map(brawler => brawler.CardID)) {
			this.stream.WriteDataReference(23, CardId);
			this.stream.writeVInt(-1);
			this.stream.writeVInt(1);
		}

		this.addCommodityArrayValue(5, Resources.Upgradium.RowID + 1, this.Gold);
		this.addCommodityArrayValue(5, Resources.Bling.RowID, this.Blings);
		this.addCommodityArrayValue(5, Resources.Legendarytrophies.RowID, 1000);
		this.addCommodityArrayValue(5, Resources.Chromatictokens.RowID + 1, this.ChromaticTokens);
		this.addCommodityArrayValue(5, Resources.Fame.RowID + 1, this.ChromaticTokens);
		this.addCommodityArrayValue(5, Resources.Powerpoints.RowID + 1, this.Powerpoints);
		this.addCommodityArrayValue(5, 24, 300000);
		this.addCommodityArrayValue(5, Resources.Dailystreak.RowID - 1, this.DailyStreak);

		this.stream.writeVInt(this.OwnedBrawlersCount);
		for (const CardId of Object.keys(this.OwnedBrawlers).map(id => parseInt(id))) {
			this.stream.WriteDataReference(16, CardId);
			this.stream.writeVInt(-1);
			this.stream.writeVInt(3000);
		}

		this.stream.writeVInt(this.OwnedBrawlersCount);
		for (const CardId of Object.keys(this.OwnedBrawlers).map(id => parseInt(id))) {
			this.stream.WriteDataReference(16, CardId);
			this.stream.writeVInt(-1);
			this.stream.writeVInt(3000);
		}

		this.stream.writeVInt(this.OwnedBrawlersCount);
		for (const CardId of Object.keys(this.OwnedBrawlers).map(id => parseInt(id))) {
			this.stream.WriteDataReference(16, CardId);
			this.stream.writeVInt(-1);
			this.stream.writeVInt(0);
		}

		this.stream.writeVInt(this.OwnedBrawlersCount);
		for (const CardId of Object.keys(this.OwnedBrawlers).map(id => parseInt(id))) {
			this.stream.WriteDataReference(16, CardId);
			this.stream.writeVInt(-1);
			this.stream.writeVInt(3000);
		}

		this.stream.writeVInt(this.OwnedBrawlersCount); // Power Level
		for (const CardId of Object.keys(this.OwnedBrawlers).map(id => parseInt(id))) {
			this.stream.WriteDataReference(16, CardId);
			this.stream.writeVInt(-1);
			this.stream.writeVInt(11 - 1);
		}

		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
		this.stream.writeVInt(0); // Array
	}

	public setCommodityCount(Value: number) {
		this.CommodityCount = Value;
	}

	public setGold(value: number) {
		this.Gold = value;
	}

	public setDiamonds(value: number) {
		this.Diamonds = value;
	}

	public setFreeDiamonds(value: number) {
		this.FreeDiamonds = value;
	}

	public setBlings(value: number) {
		this.Blings = value;
	}

	public setChromaticTokens(value: number) {
		this.ChromaticTokens = value;
	}

	public setDailyStreak(value: number) {
		this.DailyStreak = value;
	}

	public setPowerPoints(value: number) {
		this.Powerpoints = value;
	}

	public setCumulativePurchasedDiamonds(value: number) {
		this.CumulativePurchasedDiamonds = value;
	}

	public addCommodityArrayValue(CsvID: number, RowID: number, Value: number) {
		this.stream.WriteDataReference(CsvID, RowID);
		this.stream.writeVInt(-1);
		this.stream.writeVInt(Value);
	}

	public addCumulativePurchasedDiamonds(Value: number) {
		this.CumulativePurchasedDiamonds += Value;
	}

	public addPaidDiamonds(Value: number) {
		LogicPlayerData.getCurrencys().Diamonds += Value;
		this.CumulativePurchasedDiamonds += Value;
		LogicPlayerData.Save();
	}

	static useDiamonds(UsedDiamonds: number) {
		LogicPlayerData.getCurrencys().Diamonds -= UsedDiamonds;
		LogicPlayerData.getCurrencys().FreeDiamonds -= UsedDiamonds;
		LogicPlayerData.Save();
	}
}

export default LogicClientAvatar