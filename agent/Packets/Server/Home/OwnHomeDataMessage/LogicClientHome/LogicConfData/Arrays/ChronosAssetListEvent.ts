class ChronosFileEntry {
    static encode(stream: any): void {
        stream.WriteString("4db05b9a886581e81fb981a8e68482a9e521cb36");
        stream.WriteString("daaa0d43-d80a-47a0-9842-581fc84f1585_8c904385_20ce_4435_b84c_0b1eb9d33d6d_collab_subway_surfers__1_.sc")
    }
}
class ChronosAssetEntry {
    static encode(stream: any): void {
        if (stream.WriteBoolean(true)) {
            ChronosFileEntry.encode(stream);
        }
        stream.WriteDataReference(83, 6);
    }
}

class ChronosAssetListEvent {
    static encode(stream: any): void {
        stream.WriteVInt(1); // Events Count
        {
            if (stream.WriteBoolean(true)) {
                ChronosAssetEntry.encode(stream);
            }
        }

        stream.WriteVInt(0);
        stream.WriteVInt(0);
        stream.WriteVInt(0);
    }
}

export default ChronosAssetListEvent