import LogicGemOffer from "./LogicGemOffer";

class LogicLoginCalendar {
    static encode(stream: any): void {
        LogicLoginCalendarTrack.encode(stream);

        stream.writeVInt(3); // LogicLoginCalendarTrack::encode
        {
            LogicLoginCalendarTrack.encode(stream);
            LogicLoginCalendarTrack.encode(stream);
            LogicLoginCalendarTrack.encode(stream);
        }
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);

        stream.writeBoolean(false);
        stream.writeBoolean(false);

        stream.writeVInt(0);
        stream.writeBoolean(false);
        stream.writeVInt(0);
    }
}

class LogicLoginCalendarTrack {
    static encode(stream: any): void {
        stream.writeVInt(1);
        stream.writeVInt(1);
        {
            LogicLoginCalendarDay.encode(stream);
        }
    }
}

class LogicLoginCalendarDay {
    static encode(stream: any): void {
        stream.writeVInt(1);
        stream.writeBoolean(true);
        stream.writeVInt(1);
        {
            LogicLoginCalendarRewardOption.encode(stream);
        }
    }
}

class LogicLoginCalendarRewardOption {
    static encode(stream: any): void {
        LogicGemOffer.encode(stream, 3, 1, 16, 76, 0);
        stream.writeBoolean(false);
    }
}
export default LogicLoginCalendar