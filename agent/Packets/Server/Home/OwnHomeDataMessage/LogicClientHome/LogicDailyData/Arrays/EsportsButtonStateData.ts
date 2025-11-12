class EsportsButtonStateData {
    static encode(stream: any): void {
        stream.writeVInt(22);
        stream.writeVInt(22);
        stream.writeVInt(22);
    }
}

export default EsportsButtonStateData