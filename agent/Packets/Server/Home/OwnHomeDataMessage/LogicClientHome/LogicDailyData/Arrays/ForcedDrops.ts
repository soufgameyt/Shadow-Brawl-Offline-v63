class ForcedDrops {
    static encode(stream: any): void {
        stream.writeVInt(200);
        stream.writeVInt(200);

        stream.writeVInt(5);
        {
            stream.writeVInt(93);
            stream.writeVInt(206);
            stream.writeVInt(456);
            stream.writeVInt(1001);
            stream.writeVInt(2264);
        }
    }
}

export default ForcedDrops