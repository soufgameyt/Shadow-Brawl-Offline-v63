class BrawlPassSeasonData {
    static encode(stream: any): void {
        stream.writeVInt(1); // Seasons Count
        {
            stream.writeVInt(43 - 1) // Current Season
            stream.writeVInt(100000) // BP Tokens
            stream.writeBoolean(true) // Brawl Pass State
            stream.writeVInt(0)
            stream.writeBoolean(false)

            stream.writeBoolean(true)
            stream.WriteInt(0)
            stream.WriteInt(0)
            stream.WriteInt(0)
            stream.WriteInt(0)

            stream.writeBoolean(true)
            stream.WriteInt(0)
            stream.WriteInt(0)
            stream.WriteInt(0)
            stream.WriteInt(0)

            stream.writeBoolean(true) // Brawl Pass Plus State
            stream.writeBoolean(true)
            stream.WriteInt(0)
            stream.WriteInt(0)
            stream.WriteInt(0)
            stream.WriteInt(0)
        }
    }
}

export default BrawlPassSeasonData