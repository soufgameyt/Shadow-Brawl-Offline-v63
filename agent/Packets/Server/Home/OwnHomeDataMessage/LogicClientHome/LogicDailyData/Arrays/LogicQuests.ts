class LogicQuests {
    static encode(stream: any): void {
        stream.writeVInt(0); // Quests Count
        stream.writeVInt(10000); // Time Left For Quest Reroll Refresh
        stream.writeVInt(3); // Quest Rerolls Used
        stream.writeVInt(0); // Finished Quests Count
    }
}

export default LogicQuests
