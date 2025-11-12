class LogicPlayerSpecialEventData {
    static encode(stream: any): void {
        stream.writeVInt(0);

        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);

        stream.writeVInt(0);
        stream.writeVInt(0);
    }
}

export default LogicPlayerSpecialEventData