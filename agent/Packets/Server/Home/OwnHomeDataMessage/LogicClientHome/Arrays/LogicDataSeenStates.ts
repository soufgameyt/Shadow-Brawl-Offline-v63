class LogicDataSeenStates {
    static encode(stream: any): void {
        stream.writeVInt(0);
    }
}

export default LogicDataSeenStates