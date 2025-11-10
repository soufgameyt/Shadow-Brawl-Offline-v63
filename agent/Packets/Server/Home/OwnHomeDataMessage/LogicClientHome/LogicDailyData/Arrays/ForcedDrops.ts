class ForcedDrops {
    static encode(stream: any): void {
        stream.WriteVInt(200);
        stream.WriteVInt(200);

        stream.WriteVInt(5);
        {
            stream.WriteVInt(93);
            stream.WriteVInt(206);
            stream.WriteVInt(456);
            stream.WriteVInt(1001);
            stream.WriteVInt(2264);
        }
    }
}

export default ForcedDrops