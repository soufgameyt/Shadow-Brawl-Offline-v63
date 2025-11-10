import LogicPlayerData from "../../../../../Configuration/LogicPlayerData";
import { Brawler } from "../../../../../Configuration/LogicPlayerData";
import Resources from "../../../../../Utils/CSV/csv_logic/Resources";

class LogicClientAvatar {
	private stream: any;
    private CommodityCount: number

	private AccountID: number[];

	private Name: string;
	private IsNameSetByUser: boolean
	private NameSetByUser: string;
	private TutorialsCompletedCount: number;

	private Gold: number;
	private Diamonds: number;
	private FreeDiamonds: number;
    private Blings: number;
    private ChromaticTokens: number;
    private DailyStreak: number;
	private Powerpoints: number;

	private CumulativePurchasedDiamonds: number;

	private OwnedBrawlers: Record < number, Brawler > ;
	private OwnedBrawlersCount: number;

	public constructor(stream: any) {
		this.stream = stream;
        this.CommodityCount = 28;

		this.AccountID = [0, 256617006]; // LogicPlayerData.GetAccountID();

		this.Name = "Brawler";
		this.IsNameSetByUser = true;
		this.NameSetByUser = LogicPlayerData.GetPlayerName();
		this.TutorialsCompletedCount = 2;

		this.Gold = LogicPlayerData.GetCurrencys().Gold;
		this.Diamonds = LogicPlayerData.GetCurrencys().Diamonds;
		this.FreeDiamonds = LogicPlayerData.GetCurrencys().FreeDiamonds;
        this.Blings = LogicPlayerData.GetCurrencys().Blings;
        this.ChromaticTokens = LogicPlayerData.GetCurrencys().ChromaCredits;
		this.Powerpoints = LogicPlayerData.GetCurrencys().PowerPoints;
        this.DailyStreak = 67;

		this.CumulativePurchasedDiamonds = 0;

		this.OwnedBrawlers = LogicPlayerData.GetOwnedBrawlers();
		this.OwnedBrawlersCount = Object.values(this.OwnedBrawlers).length;

		this.encode();
	}

	public encode(): void {
		this.stream.WriteVLong(this.AccountID[0], this.AccountID[1]);
		this.stream.WriteVLong(this.AccountID[0], this.AccountID[1]);
		this.stream.WriteVLong(0, 0);

		this.stream.WriteString(this.NameSetByUser);
		this.stream.WriteBoolean(this.IsNameSetByUser);
		this.stream.WriteInt(-1);

		this.stream.WriteVInt(this.CommodityCount);
		{
			this.EncodeCommodity();
		}

		this.stream.WriteVInt(this.FreeDiamonds);
		this.stream.WriteVInt(this.Diamonds);
		this.stream.WriteVInt(10);
		this.stream.WriteVInt(0);
		this.stream.WriteVInt(this.CumulativePurchasedDiamonds);
		this.stream.WriteVInt(0);
		this.stream.WriteVInt(0);
		this.stream.WriteVInt(0);
		this.stream.WriteVInt(0);
		this.stream.WriteVInt(0);
		this.stream.WriteVInt(0);
		this.stream.WriteVInt(this.TutorialsCompletedCount);
		this.stream.WriteVInt(0);
		this.stream.WriteVInt(0);
		this.stream.WriteVInt(0);
		this.stream.WriteVInt(0);
		this.stream.WriteString("");
		this.stream.WriteVInt(0);
		this.stream.WriteVInt(0);
		this.stream.WriteVInt(0);
		this.stream.WriteBoolean(false);
	}

	public EncodeCommodity() {
		this.stream.WriteVInt(Object.values(this.OwnedBrawlers).map(brawler => brawler.CardID).length + 8);
		for (const CardId of Object.values(this.OwnedBrawlers).map(brawler => brawler.CardID)) {
			this.stream.WriteDataReference(23, CardId);
			this.stream.WriteVInt(-1);
			this.stream.WriteVInt(1);
		}

		this.AddCommodityArrayValue(5, Resources.Upgradium.RowID + 1, this.Gold);
		this.AddCommodityArrayValue(5, Resources.Bling.RowID, this.Blings);
		this.AddCommodityArrayValue(5, Resources.Legendarytrophies.RowID, 1000);
		this.AddCommodityArrayValue(5, Resources.Chromatictokens.RowID + 1, this.ChromaticTokens);
		this.AddCommodityArrayValue(5, Resources.Fame.RowID + 1, this.ChromaticTokens);
		this.AddCommodityArrayValue(5, Resources.Powerpoints.RowID + 1, this.Powerpoints);
		this.AddCommodityArrayValue(5, 24, 300000);
		this.AddCommodityArrayValue(5, Resources.Dailystreak.RowID - 1, this.DailyStreak);

		this.stream.WriteVInt(this.OwnedBrawlersCount);
		for (const CardId of Object.keys(this.OwnedBrawlers).map(id => parseInt(id))) {
			this.stream.WriteDataReference(16, CardId);
			this.stream.WriteVInt(-1);
			this.stream.WriteVInt(3000);
		}

		this.stream.WriteVInt(this.OwnedBrawlersCount);
		for (const CardId of Object.keys(this.OwnedBrawlers).map(id => parseInt(id))) {
			this.stream.WriteDataReference(16, CardId);
			this.stream.WriteVInt(-1);
			this.stream.WriteVInt(3000);
		}

		this.stream.WriteVInt(this.OwnedBrawlersCount);
		for (const CardId of Object.keys(this.OwnedBrawlers).map(id => parseInt(id))) {
			this.stream.WriteDataReference(16, CardId);
			this.stream.WriteVInt(-1);
			this.stream.WriteVInt(0);
		}

		this.stream.WriteVInt(this.OwnedBrawlersCount);
		for (const CardId of Object.keys(this.OwnedBrawlers).map(id => parseInt(id))) {
			this.stream.WriteDataReference(16, CardId);
			this.stream.WriteVInt(-1);
			this.stream.WriteVInt(3000);
		}

		this.stream.WriteVInt(this.OwnedBrawlersCount); // Power Level
		for (const CardId of Object.keys(this.OwnedBrawlers).map(id => parseInt(id))) {
			this.stream.WriteDataReference(16, CardId);
			this.stream.WriteVInt(-1);
			this.stream.WriteVInt(11 - 1);
		}

		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
		this.stream.WriteVInt(0); // Array
	}

	public SetCommodityCount(Value: number) {
		this.CommodityCount = Value;
	}

	public AddCommodityArrayValue(CsvID: number, RowID: number, Value: number) {
		this.stream.WriteDataReference(CsvID, RowID);
		this.stream.WriteVInt(-1);
		this.stream.WriteVInt(Value);
	}

	public AddCumulativePurchasedDiamonds(Value: number) {
		this.CumulativePurchasedDiamonds += Value;
	}

	public AddPaidDiamonds(Value: number) {
		LogicPlayerData.GetCurrencys().Diamonds += Value;
		this.CumulativePurchasedDiamonds += Value;
		LogicPlayerData.Save();
	}

	static UseDiamonds(UsedDiamonds: number) {
		LogicPlayerData.GetCurrencys().Diamonds -= UsedDiamonds;
		LogicPlayerData.GetCurrencys().FreeDiamonds -= UsedDiamonds;
		LogicPlayerData.Save();
	}
}

export default LogicClientAvatar