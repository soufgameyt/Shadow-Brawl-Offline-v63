class IntValueEntry {
    static ThemesID: number[] = [143, 144, 145, 146, 147, 148, 149, 150, 151];
    static encode(stream: any): void {
        stream.WriteVInt(9);
        stream.WriteDataReference(41000000 + IntValueEntry.ThemesID[Math.floor(Math.random() * IntValueEntry.ThemesID.length)], 1); 
        stream.WriteDataReference(89, 6);
        stream.WriteDataReference(22, 0);
        stream.WriteDataReference(36, 1);
        stream.WriteDataReference(73, 1);
        stream.WriteDataReference(16, 5);
        stream.WriteDataReference(1, 10056);
        stream.WriteDataReference(1, 10057);
        stream.WriteDataReference(1000, 10063);
    }
}

export default IntValueEntry