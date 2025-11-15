// credit to nutsworks, i still edited it kinda but base is from him so ill credit ig
class ByteStreamHelper {
    static Utf8ArrayToString(Array: Uint8Array): string {
        let Out = '';
        let Index = 0;
        let Length = Array.length;

        while (Index < Length) {
            let Char = Array[Index++];
            if (Char < 128) {
                Out += String.fromCharCode(Char);
            } else if (Char > 191 && Char < 224) {
                let Char2 = Array[Index++];
                Out += String.fromCharCode(((Char & 31) << 6) | (Char2 & 63));
            } else {
                let Char2 = Array[Index++];
                let Char3 = Array[Index++];
                Out += String.fromCharCode(((Char & 15) << 12) | ((Char2 & 63) << 6) | (Char3 & 63));
            }
        }

        return Out;
    }

    static StringToUtf8Array(Str: string): Uint8Array {
        let Utf8: number[] = [];

        for (let Index = 0; Index < Str.length; Index++) {
            let CharCode = Str.charCodeAt(Index);

            if (CharCode < 0x80) {
                Utf8.push(CharCode);
            } else if (CharCode < 0x800) {
                Utf8.push(0xc0 | (CharCode >> 6), 0x80 | (CharCode & 0x3f));
            } else if (CharCode < 0xd800 || CharCode >= 0xe000) {
                Utf8.push(
                    0xe0 | (CharCode >> 12),
                    0x80 | ((CharCode >> 6) & 0x3f),
                    0x80 | (CharCode & 0x3f)
                );
            } else {
                Index++;
                let SurrogatePair = 0x10000 + (((CharCode & 0x3ff) << 10) | (Str.charCodeAt(Index) & 0x3ff));
                Utf8.push(
                    0xf0 | (SurrogatePair >> 18),
                    0x80 | ((SurrogatePair >> 12) & 0x3f),
                    0x80 | ((SurrogatePair >> 6) & 0x3f),
                    0x80 | (SurrogatePair & 0x3f)
                );
            }
        }

        return new Uint8Array(Utf8);
    }
}

export class ByteStream {
    Payload: number[];
    BitOffset: number;
    Offset: number;
    constructor(Payload: number[]) {
        this.Payload = Payload;
        this.BitOffset = 0;
        this.Offset = 0;
    }

    ReadInt(): number {
        this.BitOffset = 0;
        let Result = this.Payload[this.Offset] << 24 | this.Payload[this.Offset + 1] << 16 | this.Payload[this.Offset + 2] << 8 | this.Payload[this.Offset + 3];
        this.Offset += 4;
        return Result;
    }

    ReadByte(): number {
        this.BitOffset = 0;
        let Result = this.Payload[this.Offset];
        this.Offset++;
        return Result;
    }

    ReadShort(): number {
        this.BitOffset = 0;
        let Result = this.Payload[this.Offset] << 8 | this.Payload[this.Offset + 1];
        this.Offset += 2;
        return Result;
    }

    ReadLong(): number {
        this.BitOffset = 0;
        let High = this.ReadInt();
        let Low = this.ReadInt();

        return Number((BigInt(High) << 32n) | BigInt(Low));
    }

    ReadString(): string {
        this.BitOffset = 0
        let Length = this.ReadInt()
        let Bytes = new Uint8Array(this.Payload.slice(this.Offset, this.Offset + Length))
        this.Offset += Length
        return ByteStreamHelper.Utf8ArrayToString(Bytes)
    }

    ReadVInt(): number {
        let Offset = this.Offset
        this.BitOffset = 0
        let Result = this.Payload[Offset] & 0x3F
        this.Offset += 1

        if (this.Payload[Offset] & 0x40) {
            if (this.Payload[Offset] & 0x80) {
                Result |= (this.Payload[Offset + 1] & 0x7F) << 6
                this.Offset += 2

                if (this.Payload[Offset + 1] & 0x80) {
                    Result |= (this.Payload[Offset + 2] & 0x7F) << 13
                    this.Offset += 3

                    if (this.Payload[Offset + 2] & 0x80) {
                        Result |= (this.Payload[Offset + 3] & 0x7F) << 20
                        this.Offset += 4

                        if (this.Payload[Offset + 3] & 0x80) {
                            Result |= this.Payload[Offset + 4] << 27
                            this.Offset += 5
                            return Result | 0x80000000
                        }
                        return Result | 0xF8000000
                    }
                    return Result | 0xFFF00000
                }
                return Result | 0xFFFFE000
            }
            return this.Payload[Offset] | 0xFFFFFFC0
        }
        else if (this.Payload[Offset] & 0x80) {
            Result |= (this.Payload[Offset + 1] & 0x7F) << 6
            this.Offset += 2

            if (this.Payload[Offset + 1] & 0x80) {
                Result |= (this.Payload[Offset + 2] & 0x7F) << 13
                this.Offset += 3

                if (this.Payload[Offset + 2] & 0x80) {
                    Result |= (this.Payload[Offset + 3] & 0x7F) << 20
                    this.Offset += 4

                    if (this.Payload[Offset + 3] & 0x80) {
                        Result |= this.Payload[Offset + 4] << 27
                        this.Offset += 5
                    }
                }
            }
        }

        return Result
    }

    ReadVlong(): number {
        let High = this.ReadVInt();
        let Low = this.ReadVInt();

        return Number((BigInt(High) << 32n) | BigInt(Low & 0xFFFFFFFF));
    }

    ReadBoolean(): boolean {
        this.BitOffset = 0;
        return Boolean(this.Payload[this.Offset++]);
    }

    ReadDataReference(): number {
        let High = this.ReadVInt();
        if (High == 0)
            return 0;
        let Low = this.ReadVInt();
        return Number((BigInt(High) << 32n) | BigInt(Low & 0xFFFFFFFF));
    }

    WriteByte(Value: number) { 
        this.BitOffset = 0; 
        this.Payload.push(Value & 0xFF); 
        this.Offset++;
    }

    WriteBytes(Value: number[] | null) {
        if (Value != null) {
            const length = Value.length;
            this.WriteInt(length);

            for (let i = 0; i < length; i++) {
                this.Payload.push(Value[i] & 0xFF);
                this.Offset++;
            }
        } else {
            this.WriteInt(-1);
        }
    }


    WriteShort(Value: number) {
        this.BitOffset = 0;
        this.Payload.push((Value >> 8) & 0xFF);
        this.Payload.push(Value & 0xFF);
        this.Offset += 2;
    }

    WriteInt(Value: number) {
        this.BitOffset = 0;
        this.Payload.push((Value >> 24) & 0xFF);
        this.Payload.push((Value >> 16) & 0xFF);
        this.Payload.push((Value >> 8) & 0xFF);
        this.Payload.push(Value & 0xFF);
        this.Offset += 4;
    }

    WriteLong(High: number, Low: number) {
        this.BitOffset = 0;
        this.WriteInt(High);
        this.WriteInt(Low);
    }

    writeString(Str: string) {
        this.BitOffset = 0;
        let Bytes = ByteStreamHelper.StringToUtf8Array(Str);
        this.WriteInt(Bytes.length);
        for (let i = 0; i < Bytes.length; i++)
            this.WriteByte(Bytes[i]);
    }

    writeStringReference(Str: string) {
        this.BitOffset = 0;
        const Bytes = ByteStreamHelper.StringToUtf8Array(Str);
        const StrLength = Bytes.length;

        if (StrLength < 900001) {
            this.WriteInt(StrLength);
            for (let i = 0; i < StrLength; i++) {
                this.WriteByte(Bytes[i]);
            }
        } else {
            console.warn(`ByteStream::writeString invalid string length ${StrLength}`);
            this.WriteInt(-1);
        }
    }

    writeVInt(Value: number) {
        this.BitOffset = 0;
        if (Value < 0) {
            if (Value >= -63) {
                this.Payload.push((Value & 0x3F) | 0x40);
                this.Offset += 1;
            }
            else if (Value >= -8191) {
                this.Payload.push((Value & 0x3F) | 0xC0);
                this.Payload.push((Value >> 6) & 0x7F);
                this.Offset += 2;
            }
            else if (Value >= -1048575) {
                this.Payload.push((Value & 0x3F) | 0xC0);
                this.Payload.push(((Value >> 6) & 0x7F) | 0x80);
                this.Payload.push((Value >> 13) & 0x7F);
                this.Offset += 3;
            }
            else if (Value >= -134217727) {
                this.Payload.push((Value & 0x3F) | 0xC0);
                this.Payload.push(((Value >> 6) & 0x7F) | 0x80);
                this.Payload.push(((Value >> 13) & 0x7F) | 0x80);
                this.Payload.push((Value >> 20) & 0x7F);
                this.Offset += 4;
            }
            else {
                this.Payload.push((Value & 0x3F) | 0xC0);
                this.Payload.push(((Value >> 6) & 0x7F) | 0x80);
                this.Payload.push(((Value >> 13) & 0x7F) | 0x80);
                this.Payload.push(((Value >> 20) & 0x7F) | 0x80);
                this.Payload.push((Value >> 27) & 0xF);
                this.Offset += 5;
            }
        }
        else {
            if (Value <= 63) {
                this.Payload.push(Value & 0x3F);
                this.Offset += 1;
            }
            else if (Value <= 8191) {
                this.Payload.push((Value & 0x3F) | 0x80);
                this.Payload.push((Value >> 6) & 0x7F);
                this.Offset += 2;
            }
            else if (Value <= 1048575) {
                this.Payload.push((Value & 0x3F) | 0x80);
                this.Payload.push(((Value >> 6) & 0x7F) | 0x80);
                this.Payload.push((Value >> 13) & 0x7F);
                this.Offset += 3;
            }
            else if (Value <= 134217727) {
                this.Payload.push((Value & 0x3F) | 0x80);
                this.Payload.push(((Value >> 6) & 0x7F) | 0x80);
                this.Payload.push(((Value >> 13) & 0x7F) | 0x80);
                this.Payload.push((Value >> 20) & 0x7F);
                this.Offset += 4;
            }
            else {
                this.Payload.push((Value & 0x3F) | 0x80);
                this.Payload.push(((Value >> 6) & 0x7F) | 0x80);
                this.Payload.push(((Value >> 13) & 0x7F) | 0x80);
                this.Payload.push(((Value >> 20) & 0x7F) | 0x80);
                this.Payload.push((Value >> 27) & 0xF);
                this.Offset += 5;
            }
        }
    }

    WriteVLong(High: number, Low: number) {
        this.BitOffset = 0;
        this.writeVInt(High);
        this.writeVInt(Low);
    }

    writeBoolean(Value: boolean) {
        if (this.BitOffset == 0) {
            this.Payload.push(0)
            this.Offset++
        }

        if (Value) {
            this.Payload[this.Offset - 1] |= 1 << (this.BitOffset & 7);
        }

        this.BitOffset = (this.BitOffset + 1) & 7;
        return Value
    }

    WriteDataReference(High: number, Low = -1) {
        this.BitOffset = 0;
        this.writeVInt(High);
        if (High != 0) this.writeVInt(Low);
    }

    writeHexa(data: string) {
        this.BitOffset = 0;
        for (let i = 0; i < data.length; i += 2) {
            const byteString = data.substring(i, i + 2);
            this.Payload.push(parseInt(byteString, 16));
        }
        this.Offset += data.length / 2;
    }
}

export default ByteStream