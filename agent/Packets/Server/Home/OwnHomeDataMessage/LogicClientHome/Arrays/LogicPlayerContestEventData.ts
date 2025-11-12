import LogicGemOffer from "./LogicGemOffer";

class LogicPlayerContestEventData {
    static encode(stream: any): void {
        stream.writeVInt(0);
        stream.writeVInt(0);

        stream.WriteLong(0, 1);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        
        stream.WriteLong(0, 1);

        stream.writeBoolean(false);
        {
            LogicGemOffer.encode(stream, 57, 14888, 0, 0, 0);
        }

        stream.writeVInt(0);
    }
}

export default LogicPlayerContestEventData