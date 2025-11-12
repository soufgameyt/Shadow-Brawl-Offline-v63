class LogicGemOffer {
    static encode(stream: any, a1: number, a2: number, a3: number, a4: number, a5: number): void {
        stream.writeVInt(a1);
        stream.writeVInt(a2);
        stream.WriteDataReference(a3, a4);
        stream.writeVInt(a5);
    }
}

export default LogicGemOffer