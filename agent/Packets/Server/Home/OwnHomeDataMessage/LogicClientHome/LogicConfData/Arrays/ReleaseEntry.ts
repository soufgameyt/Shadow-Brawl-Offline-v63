class ReleaseEntry {
    static encode(stream: any, CSVId: number, CSVRow: number, Time: number, SecondTime: number, ThirdTime: number, IsNew: boolean): void {
        stream.WriteDataReference(CSVId, CSVRow);
        stream.WriteInt(Time);
        stream.WriteInt(SecondTime);
        stream.WriteInt(ThirdTime);
        stream.writeBoolean(IsNew);
    }
}

export default ReleaseEntry