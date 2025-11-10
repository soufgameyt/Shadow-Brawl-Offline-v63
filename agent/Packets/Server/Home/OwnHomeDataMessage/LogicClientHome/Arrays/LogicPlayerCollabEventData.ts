class LogicPlayerCollabEventData {
    static encode(stream: any): void {
        stream.WriteVInt(67); // Event Currency
        stream.WriteVInt(0);

        stream.WriteBoolean(true);

        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);

        stream.WriteBoolean(true);

        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteDataReference(83, 6);
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
        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
    }
}

export default LogicPlayerCollabEventData