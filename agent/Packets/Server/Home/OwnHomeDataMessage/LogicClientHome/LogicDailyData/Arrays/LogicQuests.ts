class LogicQuests {
    static encode(stream: any): void {
        stream.WriteVInt(0); // Quests Count
        stream.WriteVInt(10000); // Time Left For Quest Reroll Refresh
        stream.WriteVInt(3); // Quest Rerolls Used
        stream.WriteVInt(0); // Finished Quests Count
    }
}

export default LogicQuests
