class TimedIntValueEntry {
    static encode(stream: any, a1: number, a2: number, a3: number, a4: number): void {
        stream.WriteVInt(a1);
        stream.WriteVInt(a2);
        stream.WriteVInt(a3);
        stream.WriteVInt(a4);
    }
}

export default TimedIntValueEntry