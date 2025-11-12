class LogicPlayerCollabEventData {
    static encode(stream: any): void {
        stream.writeVInt(67); // Event Currency
        stream.writeVInt(0);

        stream.writeBoolean(true);

        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);

        stream.writeBoolean(true);

        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.WriteDataReference(83, 6);
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
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
    }
}

export default LogicPlayerCollabEventData