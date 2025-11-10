import LogicGemOffer from "../../Arrays/LogicGemOffer";
import CurrentShopOffers from "../../../../../../../Static/ShopOffers";
import ChronosTextEntry from "../../../../../../../Utils/Chronos/ChronosTextEntry";

class LogicOfferBundle {
    static encode(stream: any): void {
        stream.WriteVInt(CurrentShopOffers.Offers.length); // Shop Offers Count

        for (const Offer of CurrentShopOffers.Offers) {
            stream.WriteVInt(Offer.Rewards.length) // Rewards Count
            for (const Rewards of Offer.Rewards) {
                LogicGemOffer.encode(stream, Rewards.ItemType, Rewards.Amount, Rewards.CsvID[0], Rewards.CsvID[1], Rewards.SkinID);
            }

            stream.WriteVInt(Offer.Rewards.length) // Rewards Count
            for (const Rewards of Offer.Rewards) {
                LogicGemOffer.encode(stream, Rewards.ItemType, Rewards.Amount, Rewards.CsvID[0], Rewards.CsvID[1], Rewards.SkinID);
            }

            stream.WriteVInt(Offer.Currency); // 0 => gems, 1 => gold
			stream.WriteVInt(Offer.Cost); // Price
			stream.WriteVInt(Offer.Time); // Offer time

			stream.WriteVInt(0);
			stream.WriteVInt(0);
			stream.WriteVInt(0);
			stream.WriteVInt(0);
			stream.WriteBoolean(Offer.IsClaim);
			stream.WriteVInt(0);
			stream.WriteVInt(0);

			stream.WriteBoolean(Offer.DailyOffer);
			stream.WriteVInt(Offer.OldPrice);

            ChronosTextEntry.encode(stream, Offer.Text, 0);
			stream.WriteBoolean(Offer.ShowAtLaunch);
            ChronosTextEntry.encode(stream, Offer.Background, 0);

			stream.WriteBoolean(Offer.Processed);
			stream.WriteVInt(Offer.TypeBenefit);
			stream.WriteVInt(Offer.Benefit);

			stream.WriteString(Offer.Text);
			stream.WriteBoolean(Offer.OneTimeOffer);
			stream.WriteBoolean(Offer.IsClaimed);

			stream.WriteDataReference(Offer.ShopStyle[0], Offer.ShopStyle[1]);
			stream.WriteDataReference(Offer.ShopStyle[0], Offer.ShopStyle[1]);
			stream.WriteDataReference(Offer.ShopStyle[0], Offer.ShopStyle[1]);
            
			stream.WriteBoolean(false);
			stream.WriteBoolean(false);
			stream.WriteBoolean(false);
			stream.WriteVInt(0);
			stream.WriteVInt(0);
			stream.WriteVInt(0);
			stream.WriteBoolean(false);
			stream.WriteBoolean(false);
			stream.WriteVInt(0);
			stream.WriteVInt(0);
			stream.WriteBoolean(false);
			stream.WriteVInt(0);
			stream.WriteVInt(0);
			stream.WriteVInt(0);
			stream.WriteVInt(0);
			stream.WriteVInt(0);
			stream.WriteBoolean(false);
			stream.WriteBoolean(false);
			stream.WriteBoolean(false);
			stream.WriteVInt(0);
			stream.WriteDataReference(0, 0);
			stream.WriteVInt(0);
            stream.WriteBoolean(false);
        }
    }
}

export default LogicOfferBundle