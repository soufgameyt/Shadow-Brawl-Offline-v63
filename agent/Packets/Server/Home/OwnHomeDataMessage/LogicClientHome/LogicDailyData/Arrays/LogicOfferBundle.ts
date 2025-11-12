import LogicGemOffer from "../../Arrays/LogicGemOffer";
import CurrentShopOffers from "../../../../../../../Static/ShopOffers";
import ChronosTextEntry from "../../../../../../../Utils/Chronos/ChronosTextEntry";

class LogicOfferBundle {
    static encode(stream: any): void {
        stream.writeVInt(CurrentShopOffers.Offers.length); // Shop Offers Count

        for (const Offer of CurrentShopOffers.Offers) {
            stream.writeVInt(Offer.Rewards.length) // Rewards Count
            for (const Rewards of Offer.Rewards) {
                LogicGemOffer.encode(stream, Rewards.ItemType, Rewards.Amount, Rewards.CsvID[0], Rewards.CsvID[1], Rewards.SkinID);
            }

            stream.writeVInt(Offer.Rewards.length) // Rewards Count
            for (const Rewards of Offer.Rewards) {
                LogicGemOffer.encode(stream, Rewards.ItemType, Rewards.Amount, Rewards.CsvID[0], Rewards.CsvID[1], Rewards.SkinID);
            }

            stream.writeVInt(Offer.Currency); // 0 => gems, 1 => gold
			stream.writeVInt(Offer.Cost); // Price
			stream.writeVInt(Offer.Time); // Offer time

			stream.writeVInt(0);
			stream.writeVInt(0);
			stream.writeVInt(0);
			stream.writeVInt(0);
			stream.writeBoolean(Offer.IsClaim);
			stream.writeVInt(0);
			stream.writeVInt(0);

			stream.writeBoolean(Offer.DailyOffer);
			stream.writeVInt(Offer.OldPrice);

            ChronosTextEntry.encode(stream, Offer.Text, 0);
			stream.writeBoolean(Offer.ShowAtLaunch);
            ChronosTextEntry.encode(stream, Offer.Background, 0);

			stream.writeBoolean(Offer.Processed);
			stream.writeVInt(Offer.TypeBenefit);
			stream.writeVInt(Offer.Benefit);

			stream.writeString(Offer.Text);
			stream.writeBoolean(Offer.OneTimeOffer);
			stream.writeBoolean(Offer.IsClaimed);

			stream.WriteDataReference(Offer.ShopStyle[0], Offer.ShopStyle[1]);
			stream.WriteDataReference(Offer.ShopStyle[0], Offer.ShopStyle[1]);
			stream.WriteDataReference(Offer.ShopStyle[0], Offer.ShopStyle[1]);
            
			stream.writeBoolean(false);
			stream.writeBoolean(false);
			stream.writeBoolean(false);
			stream.writeVInt(0);
			stream.writeVInt(0);
			stream.writeVInt(0);
			stream.writeBoolean(false);
			stream.writeBoolean(false);
			stream.writeVInt(0);
			stream.writeVInt(0);
			stream.writeBoolean(false);
			stream.writeVInt(0);
			stream.writeVInt(0);
			stream.writeVInt(0);
			stream.writeVInt(0);
			stream.writeVInt(0);
			stream.writeBoolean(false);
			stream.writeBoolean(false);
			stream.writeBoolean(false);
			stream.writeVInt(0);
			stream.WriteDataReference(0, 0);
			stream.writeVInt(0);
            stream.writeBoolean(false);
        }
    }
}

export default LogicOfferBundle