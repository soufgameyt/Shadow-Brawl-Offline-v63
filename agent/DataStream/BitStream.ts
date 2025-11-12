// credit to ??? this has been used so much times i dont even know whos the original that made that code but its from python
// and also credit to gpt for python to typescript :trolled:
class BitStream {
    private BitOffset: number = 0;
    private MessagePayload: Uint8Array;
    private Length: number;
    private Capacity: number = 100;
    private ByteOffset: number = 0;

    constructor(messageBytes?: Uint8Array) {
        if (!messageBytes) {
            messageBytes = new Uint8Array(100);
        }
        this.MessagePayload = messageBytes;
        this.Length = messageBytes.length;
    }

    public GetLength(): number {
        return this.ByteOffset;
    }

    public GetByteArray(): Uint8Array {
        return this.MessagePayload.slice(0, this.ByteOffset);
    }

    public ReadBoolean(): boolean {
        return this.ReadOneBit() === 1;
    }

    public ReadOneBit(): number {
        const bitOffset = this.BitOffset;
        this.BitOffset++;
        const byte = this.MessagePayload[this.ByteOffset];
        if (this.BitOffset === 8) {
            this.ByteOffset++;
            this.BitOffset = 0;
        }
        const result = (1 << (bitOffset & 31) & byte) >> (bitOffset & 31);
        return result;
    }

    public ReadBits(nbBits: number): number {
        let byteOffset = this.ByteOffset;
        let bitOffset = this.BitOffset;
        let bitResult = 0;

        for (let i = 0; i < nbBits; i++) {
            const bit = bitOffset & 31;
            bitOffset++;
            bitResult = (((1 << bit) & this.MessagePayload[byteOffset]) >> bit) << (i & 31) | bitResult;
            if (bitOffset === 8) {
                bitOffset = 0;
                byteOffset++;
            }
        }

        this.ByteOffset = byteOffset;
        this.BitOffset = bitOffset;
        return bitResult;
    }

    public ReadPositiveIntMax3(): number { return this.ReadBits(2); }
    public ReadPositiveIntMax7(): number { return this.ReadBits(3); }
    public ReadPositiveIntMax15(): number { return this.ReadBits(4); }
    public ReadPositiveIntMax31(): number { return this.ReadBits(5); }
    public ReadPositiveIntMax63(): number { return this.ReadBits(6); }
    public ReadPositiveIntMax127(): number { return this.ReadBits(7); }
    public ReadPositiveIntMax255(): number { return this.ReadBits(8); }
    public ReadPositiveIntMax511(): number { return this.ReadBits(9); }
    public ReadPositiveIntMax1023(): number { return this.ReadBits(10); }
    public ReadPositiveIntMax2047(): number { return this.ReadBits(11); }
    public ReadPositiveIntMax4095(): number { return this.ReadBits(12); }
    public ReadPositiveIntMax8191(): number { return this.ReadBits(13); }
    public ReadPositiveIntMax16383(): number { return this.ReadBits(14); }
    public ReadPositiveIntMax32767(): number { return this.ReadBits(15); }
    public ReadPositiveIntMax65535(): number { return this.ReadBits(16); }
    public ReadPositiveIntMax131071(): number { return this.ReadBits(17); }
    public ReadPositiveIntMax262143(): number { return this.ReadBits(18); }
    public ReadPositiveIntMax524287(): number { return this.ReadBits(19); }
    public ReadPositiveIntMax2097151(): number { return this.ReadBits(21); }

    public ReadIntMax1(): number {
        const signedBit = this.ReadBits(1);
        const value = this.ReadBits(1);
        return (signedBit * 2 + -1) * value;
    }

    public ReadIntMax7(): number {
        const signedBit = this.ReadBits(1);
        const value = this.ReadBits(3);
        return (signedBit * 2 + -1) * value;
    }

    public ReadIntMax15(): number {
        const signedBit = this.ReadBits(1);
        const value = this.ReadBits(4);
        return (signedBit * 2 + -1) * value;
    }

    public ReadIntMax127(): number {
        const signedBit = this.ReadBits(1);
        const value = this.ReadBits(7);
        return (signedBit * 2 + -1) * value;
    }

    public ReadVIntMax255(): number {
        let value = this.ReadBits(3);
        value = this.ReadBits(value + 1);
        return value;
    }

    public ReadPositiveVIntMax255OftenZero(): number {
        if (this.ReadBoolean()) {
            return 0;
        }
        let value = this.ReadBits(3);
        value = this.ReadBits(value + 1);
        return value;
    }

    public ReadVIntMax65535(): number {
        let value = this.ReadBits(4);
        value = this.ReadBits(value + 1);
        return value;
    }

    public ReadPositiveVIntMax65535OftenZero(): number {
        if (this.ReadBoolean()) {
            return 0;
        }
        let value = this.ReadBits(4);
        value = this.ReadBits(value + 1);
        return value;
    }

    private Clamp(num: number, minValue: number, maxValue: number): number {
        return Math.max(Math.min(num, maxValue), minValue);
    }

    public EnsureCapacity(): void {
        if (this.Capacity < this.ByteOffset + 6) {
            this.Capacity += 100;
            const newPayload = new Uint8Array(this.Capacity);
            newPayload.set(this.MessagePayload);
            this.MessagePayload = newPayload;
        }
    }

    public WritePositiveInt(value: number, nbBits: number): void {
        this.EnsureCapacity();
        const clampedValue = this.Clamp(value, 0, ~(-1 << (nbBits & 31)));
        this.WriteBits(clampedValue, nbBits);
    }

    public WriteInt(value: number, nbBits: number): void {
        let clampedValue = -1 << (nbBits & 31);
        clampedValue = this.Clamp(value, clampedValue + 1, ~clampedValue);
        this.EnsureCapacity();
        if (clampedValue < 0) {
            this.WriteBits(0, 1);
            clampedValue = -clampedValue;
        } else {
            this.WriteBits(1, 1);
        }
        this.WriteBits(clampedValue, nbBits);
    }

    public WritePositiveVInt(value: number, nbBits: number): void {
        this.EnsureCapacity();
        let clampedValue = this.Clamp(value, 0, ~(-1 << (1 << (nbBits & 31) & 31)));
        let s: number;
        if (clampedValue === 0) {
            s = 1;
        } else if (clampedValue < 1) {
            s = 0;
        } else {
            s = 0;
            let a = clampedValue;
            let bvar1 = 1 < a;
            while (bvar1) {
                bvar1 = 1 < a;
                a >>= 1;
                s++;
            }
        }

        this.WriteBits(s - 1, nbBits);
        this.WriteBits(clampedValue, s);
    }

    public writeBoolean(value: boolean): boolean {
        this.EnsureCapacity();
        this.WriteBits(value ? 1 : 0, 1);
        return value
    }

    public WriteBits(value: number, nbBits: number): void {
        for (let i = 0; i < nbBits; i++) {
            this.MessagePayload[this.ByteOffset] |= (((1 << (i & 7)) & value) >> (i & 7)) << (this.BitOffset & 7);
            this.BitOffset++;
            if (this.BitOffset === 8) {
                this.BitOffset = 0;
                this.ByteOffset++;
            }
        }
    }

    public WriteDataReference(csvId: number, row: number): void {
        if (csvId !== 0) {
            this.WritePositiveIntMax31(csvId);
            this.WritePositiveIntMax1023(row);
            return;
        }
        this.WritePositiveIntMax31(0);
    }

    public ResetOffset(): void {
        this.BitOffset = 0;
        this.ByteOffset = 0;
    }

    // --- Convenience Wrappers ---

    public WritePositiveIntMax3(value: number): void { this.WritePositiveInt(value, 2); }
    public WritePositiveIntMax7(value: number): void { this.WritePositiveInt(value, 3); }
    public WritePositiveIntMax15(value: number): void { this.WritePositiveInt(value, 4); }
    public WritePositiveIntMax31(value: number): void { this.WritePositiveInt(value, 5); }
    public WritePositiveIntMax63(value: number): void { this.WritePositiveInt(value, 6); }
    public WritePositiveIntMax127(value: number): void { this.WritePositiveInt(value, 7); }
    public WritePositiveIntMax255(value: number): void { this.WritePositiveInt(value, 8); }
    public WritePositiveIntMax511(value: number): void { this.WritePositiveInt(value, 9); }
    public WritePositiveIntMax1023(value: number): void { this.WritePositiveInt(value, 10); }
    public WritePositiveIntMax2047(value: number): void { this.WritePositiveInt(value, 11); }
    public WritePositiveIntMax4095(value: number): void { this.WritePositiveInt(value, 12); }
    public WritePositiveIntMax8191(value: number): void { this.WritePositiveInt(value, 13); }
    public WritePositiveIntMax16383(value: number): void { this.WritePositiveInt(value, 14); }
    public WritePositiveIntMax32767(value: number): void { this.WritePositiveInt(value, 15); }
    public WritePositiveIntMax65535(value: number): void { this.WritePositiveInt(value, 16); }
    public WritePositiveIntMax131071(value: number): void { this.WritePositiveInt(value, 17); }
    public WritePositiveIntMax262143(value: number): void { this.WritePositiveInt(value, 18); }
    public WritePositiveIntMax524287(value: number): void { this.WritePositiveInt(value, 19); }
    public WritePositiveIntMax1048575(value: number): void { this.WritePositiveInt(value, 20); }
    public WritePositiveIntMax2097151(value: number): void { this.WritePositiveInt(value, 21); }
    public WritePositiveIntMax134217727(value: number): void { this.WritePositiveInt(value, 27); }

    public WritePositiveVIntMax255(value: number): void { this.WritePositiveVInt(value, 3); }

    public WritePositiveVIntMax255OftenZero(value: number): void {
        if (value !== 0) {
            this.WritePositiveInt(0, 1);
            this.WritePositiveVInt(value, 3);
            return;
        }
        this.WritePositiveInt(1, 1);
    }

    public WritePositiveVIntMax65535(value: number): void { this.WritePositiveVInt(value, 4); }

    public WritePositiveVIntMax65535OftenZero(value: number): void {
        if (value !== 0) {
            this.WritePositiveInt(0, 1);
            this.WritePositiveVInt(value, 4);
            return;
        }
        this.WritePositiveInt(1, 1);
    }

    public WritePositiveVIntMax2147483647(value: number): void { this.WritePositiveVInt(value, 5); }

    public WritePositiveVIntMax2147483647OftenZero(value: number): void {
        if (value !== 0) {
            this.WritePositiveInt(0, 1);
            this.WritePositiveVInt(value, 5);
            return;
        }
        this.WritePositiveInt(1, 1);
    }

    public WriteIntMax1(value: number): void { this.WriteInt(value, 1); }
    public WriteIntMax3(value: number): void { this.WriteInt(value, 2); }
    public WriteIntMax7(value: number): void { this.WriteInt(value, 3); }
    public WriteIntMax15(value: number): void { this.WriteInt(value, 4); }
    public WriteIntMax31(value: number): void { this.WriteInt(value, 4); }
    public WriteIntMax63(value: number): void { this.WriteInt(value, 6); }
    public WriteIntMax127(value: number): void { this.WriteInt(value, 7); }
    public WriteIntMax1023(value: number): void { this.WriteInt(value, 10); }
    public WriteIntMax16383(value: number): void { this.WriteInt(value, 14); }
    public WriteIntMax2047(value: number): void { this.WriteInt(value, 11); }
    public WriteIntMax255(value: number): void { this.WriteInt(value, 8); }
}

export default BitStream