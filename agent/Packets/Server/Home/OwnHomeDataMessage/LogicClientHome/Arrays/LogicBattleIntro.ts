class LogicBattleIntro {
    static encode(stream: any): void {
        stream.WriteDataReference(100, 1);
        stream.WriteDataReference(28, -1); // Icon 1
        stream.WriteDataReference(28, -1); // Icon 2
        stream.WriteDataReference(52, -1); // Pin
        stream.WriteDataReference(76, -1); // Title
        stream.WriteDataReference(0);
        stream.WriteBoolean(false);
        stream.WriteBoolean(false);
        stream.WriteBoolean(false);
        stream.WriteBoolean(false);
        stream.WriteBoolean(false);
        stream.WriteVInt(0); // Count
    }
}

export default LogicBattleIntro