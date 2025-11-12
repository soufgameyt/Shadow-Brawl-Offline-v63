class ChronosTextEntry {
    static encode(stream: any, Str: string, Int: number) {
        stream.writeString(Str);
        stream.writeVInt(Int);
    }
}

export default ChronosTextEntry