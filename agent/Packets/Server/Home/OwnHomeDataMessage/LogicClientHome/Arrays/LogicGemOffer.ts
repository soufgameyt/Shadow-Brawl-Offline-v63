class LogicGemOffer {
    static encode(stream: any, a1: number, a2: number, a3: number, a4: number, a5: number): void {
        stream.WriteVInt(a1);
        stream.WriteVInt(a2);
        stream.WriteDataReference(a3, a4);
        stream.WriteVInt(a5);
    }
}

export default LogicGemOffer