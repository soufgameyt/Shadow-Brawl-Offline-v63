import LogicGemOffer from "./LogicGemOffer";

class LogicLoginCalendar {
    static encode(stream: any): void {
        LogicLoginCalendarTrack.encode(stream);

        stream.WriteVInt(3); // LogicLoginCalendarTrack::encode
        {
            LogicLoginCalendarTrack.encode(stream);
            LogicLoginCalendarTrack.encode(stream);
            LogicLoginCalendarTrack.encode(stream);
        }
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);

        stream.WriteBoolean(false);
        stream.WriteBoolean(false);

        stream.WriteVInt(0);
        stream.WriteBoolean(false);
        stream.WriteVInt(0);
    }
}

class LogicLoginCalendarTrack {
    static encode(stream: any): void {
        stream.WriteVInt(1);
        stream.WriteVInt(1);
        {
            LogicLoginCalendarDay.encode(stream);
        }
    }
}

class LogicLoginCalendarDay {
    static encode(stream: any): void {
        stream.WriteVInt(1);
        stream.WriteBoolean(true);
        stream.WriteVInt(1);
        {
            LogicLoginCalendarRewardOption.encode(stream);
        }
    }
}

class LogicLoginCalendarRewardOption {
    static encode(stream: any): void {
        LogicGemOffer.encode(stream, 3, 1, 16, 76, 0);
        stream.WriteBoolean(false);
    }
}
export default LogicLoginCalendar