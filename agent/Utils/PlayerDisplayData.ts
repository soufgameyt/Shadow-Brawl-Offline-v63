class PlayerDisplayData 
{
    static encode(stream: any, PlayerName: string, PlayerXP: number, Thumbnail: number, NameColor: number, BpNameColor: number) 
    {
        stream.writeString(PlayerName);
        stream.writeVInt(PlayerXP);
        stream.writeVInt(28000000 + Thumbnail);
        stream.writeVInt(43000000 + NameColor);
        stream.writeVInt(43000000 + BpNameColor);
    }
}

export default PlayerDisplayData;