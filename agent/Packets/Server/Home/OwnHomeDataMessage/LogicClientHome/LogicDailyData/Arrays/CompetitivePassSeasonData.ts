class CompetitivePassSeasonData {
    static encode(stream: any): void {
        stream.writeVInt(1); // Seasons Count
        {
            stream.writeBoolean(true)
            stream.writeVInt(100000)
            stream.writeVInt(2)
            stream.writeVInt(0)
            stream.writeBoolean(true)
            stream.writeVInt(100000000)

            stream.writeBoolean(true)
            stream.writeInt(0)
            stream.writeInt(0)
            stream.writeInt(0)
            stream.writeInt(0)

            stream.writeBoolean(true)
            stream.writeInt(0)
            stream.writeInt(0)
            stream.writeInt(0)
            stream.writeInt(0)
        }
    }
}

export default CompetitivePassSeasonData