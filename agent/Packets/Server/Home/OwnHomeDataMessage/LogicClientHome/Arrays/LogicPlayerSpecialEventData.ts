class LogicPlayerSpecialEventData {
    static encode(stream: any): void {
        stream.WriteVInt(0);

        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);

        stream.WriteVInt(0);
        stream.WriteVInt(0);
    }
}

export default LogicPlayerSpecialEventData