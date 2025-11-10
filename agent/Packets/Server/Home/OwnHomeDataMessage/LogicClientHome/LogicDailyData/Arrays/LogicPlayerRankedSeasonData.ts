class LogicPlayerRankedSeasonData {
    static encode(stream: any): void {
        stream.WriteVInt(22) // Rank
        stream.WriteVInt(13000) // Rank Solo League (Tokens)
        stream.WriteVInt(22) // Rank
        stream.WriteVInt(13000) // Rank Team League (Tokens)
        stream.WriteVInt(22) // Rank
        stream.WriteVInt(13000) // High Rank Solo League (Tokens)
        stream.WriteVInt(22) // Rank
        stream.WriteVInt(13000) // High Rank Team League (Tokens)
        stream.WriteVInt(22) // Rank
        stream.WriteVInt(13000) // High Rank Team League (Tokens)
        stream.WriteVInt(22) // Rank
        stream.WriteVInt(13000) // High Rank Team League (Tokens)
        stream.WriteVInt(22) // Rank
        stream.WriteVInt(0);
    }
}

export default LogicPlayerRankedSeasonData