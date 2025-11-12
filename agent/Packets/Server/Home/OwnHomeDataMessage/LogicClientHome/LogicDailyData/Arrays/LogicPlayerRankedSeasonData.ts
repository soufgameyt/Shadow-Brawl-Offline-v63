class LogicPlayerRankedSeasonData {
    static encode(stream: any): void {
        stream.writeVInt(22) // Rank
        stream.writeVInt(13000) // Rank Solo League (Tokens)
        stream.writeVInt(22) // Rank
        stream.writeVInt(13000) // Rank Team League (Tokens)
        stream.writeVInt(22) // Rank
        stream.writeVInt(13000) // High Rank Solo League (Tokens)
        stream.writeVInt(22) // Rank
        stream.writeVInt(13000) // High Rank Team League (Tokens)
        stream.writeVInt(22) // Rank
        stream.writeVInt(13000) // High Rank Team League (Tokens)
        stream.writeVInt(22) // Rank
        stream.writeVInt(13000) // High Rank Team League (Tokens)
        stream.writeVInt(22) // Rank
        stream.writeVInt(0);
    }
}

export default LogicPlayerRankedSeasonData