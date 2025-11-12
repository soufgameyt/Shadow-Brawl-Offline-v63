class LogicGatchaDrop {
    static encode(stream: any): void {
        stream.writeVInt(0);
        stream.WriteDataReference(0);
        stream.writeVInt(0);

        stream.WriteDataReference(0);
        stream.WriteDataReference(0);
        stream.WriteDataReference(0);

        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
    }
}

export default LogicGatchaDrop