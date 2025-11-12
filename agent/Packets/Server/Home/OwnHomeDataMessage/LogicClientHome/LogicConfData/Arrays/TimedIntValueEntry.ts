class TimedIntValueEntry {
    static encode(stream: any, a1: number, a2: number, a3: number, a4: number): void {
        stream.writeVInt(a1);
        stream.writeVInt(a2);
        stream.writeVInt(a3);
        stream.writeVInt(a4);
    }
}

export default TimedIntValueEntry