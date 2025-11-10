import ChronosAssetListEvent from "./Arrays/ChronosAssetListEvent";
import IntValueEntry from "./Arrays/IntValueEntry";
import EventData from "./Arrays/EventData";
import ReleaseEntry from "./Arrays/ReleaseEntry";
import TimedIntValueEntry from "./Arrays/TimedIntValueEntry";
import NewsInboxLinkEntry from "./Arrays/NewsInboxLinkEntry";

class LogicConfData {
    static encode(stream: any): void {
        stream.WriteVInt(2025074);

        stream.WriteVInt(52); // Event Slots
        for (let EventID = 0; EventID < 52; EventID++) {
            stream.WriteVInt(EventID);
        }
        
        stream.WriteVInt(EventData.EventCount); // EventData::encode
        {
            EventData.EncodeEvents(stream);
        }

        stream.WriteVInt(0); // EventData::encode
        stream.WriteVInt(0); // EventData::encode

        LogicConfData.EncodeIntList(stream, [20, 35, 75, 140, 290, 480, 800, 1250, 1875, 2800]);
        LogicConfData.EncodeIntList(stream, [69, 67, 69, 67]); // Shop Coins Price
        LogicConfData.EncodeIntList(stream, [67, 69, 67, 69]); // Shop Coins Amount

        stream.WriteVInt(1); // ReleaseEntry::encode
        {
            ReleaseEntry.encode(stream, 0, 0, 0, 0, 0, false);
        }
        
        IntValueEntry.encode(stream);

        stream.WriteVInt(1); // TimedIntValueEntry::encode
        {
            TimedIntValueEntry.encode(stream, 0, 0, 0, 0);
        }
        stream.WriteVInt(0); // CustomEvent::encode
        stream.WriteVInt(0); // ShopChainOfferThemeEntry::encode
        stream.WriteVInt(0); // AdPlacementEntry::encode
        stream.WriteVInt(0); // ThemeOverrideEntry::encode
        stream.WriteVInt(0); // JoinClubEventEntry::encode
        stream.WriteVInt(0); // DailyFortuneCookieEntry::encode
        stream.WriteVInt(1); // ChronosAssetListEvent::encode
        {
            ChronosAssetListEvent.encode(stream);
        }
        stream.WriteVInt(0); // ShopVisualOfferGroupingEntry::encode
        stream.WriteVInt(0); // Array
        stream.WriteVInt(0); // Array
        LogicConfData.EncodeIntList(stream, [0]);
        stream.WriteVInt(1); // NewsInboxLinkEntry::encode
        {
            NewsInboxLinkEntry.encode(stream);
        }
        stream.WriteVInt(0); // Array
        stream.WriteVInt(0); // Array
    }

    static EncodeIntList(stream: any, IntList: number[]) {
        stream.WriteVInt(IntList.length);

        for (const Int of IntList) {
            stream.WriteVInt(Int);
        }
    }
}

export default LogicConfData