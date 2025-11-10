class CooldownEntry {
    static encode(stream: any): void {
        stream.WriteVInt(0);
    }
}

export default CooldownEntry