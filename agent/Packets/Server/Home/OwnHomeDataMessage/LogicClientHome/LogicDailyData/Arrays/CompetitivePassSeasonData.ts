class CompetitivePassSeasonData {
    static encode(stream: any): void {
        stream.WriteVInt(1); // Seasons Count
        {
            stream.WriteBoolean(true)
            stream.WriteVInt(100000)
            stream.WriteVInt(2)
            stream.WriteVInt(0)
            stream.WriteBoolean(true)
            stream.WriteVInt(100000000)

            stream.WriteBoolean(true)
            stream.WriteInt(0)
            stream.WriteInt(0)
            stream.WriteInt(0)
            stream.WriteInt(0)

            stream.WriteBoolean(true)
            stream.WriteInt(0)
            stream.WriteInt(0)
            stream.WriteInt(0)
            stream.WriteInt(0)
        }
    }
}

export default CompetitivePassSeasonData