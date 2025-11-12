class LogicPlayerRecordsData {
    static encode(stream: any): void {
        stream.writeVInt(0); // Array
        stream.writeVInt(0); // Array
        stream.writeVInt(0); // Records Points
        stream.writeVInt(0); // Records Points
        stream.writeVInt(1); // Array
        {
            stream.writeVInt(13); // Records Rank
        }
        
        LogicPlayerRecordsData.EncodeCustom(stream);
    }
    static EncodeCustom(stream: any): void {
        stream.writeVInt(0);
    } 
}

export default LogicPlayerRecordsData
