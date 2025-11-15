import ByteStream from "../../../DataStream/ByteStream";

class LogicLong {
	private MHighInteger: number;
	private MLowInteger: number;

	constructor(HighInteger: number = 0, LowInteger: number = 0) {
		this.MHighInteger = HighInteger;
		this.MLowInteger = LowInteger;
	}

	static ToLong(HighValue: number, LowValue: number): bigint {
		return (BigInt(HighValue) << 32n) | (BigInt(LowValue) & 0xFFFFFFFFn);
	}

	Clone(): LogicLong {
		return new LogicLong(this.MHighInteger, this.MLowInteger);
	}

	IsZero(): boolean {
		return this.MHighInteger === 0 && this.MLowInteger === 0;
	}

	GetHigherInt(): number {
		return this.MHighInteger;
	}

	GetLowerInt(): number {
		return this.MLowInteger;
	}

	decode(Stream: ByteStream): void {
		this.MHighInteger = Stream.ReadInt();
		this.MLowInteger = Stream.ReadInt();
	}

	encode(Stream: ByteStream): void {
		Stream.writeInt(this.MHighInteger);
		Stream.writeInt(this.MLowInteger);
	}

	HashCode(): number {
		return this.MLowInteger + 31 * this.MHighInteger;
	}

	Equals(Obj: any): boolean {
		if (Obj instanceof LogicLong) {
			return Obj.MHighInteger === this.MHighInteger && Obj.MLowInteger === this.MLowInteger;
		}
		return false;
	}

	static Equals(A1: LogicLong | null, A2: LogicLong | null): boolean {
		if (A1 === null || A2 === null) return A1 === null && A2 === null;
		return A1.MHighInteger === A2.MHighInteger && A1.MLowInteger === A2.MLowInteger;
	}

	ToString(): string {
		return `LogicLong(${this.MHighInteger}-${this.MLowInteger})`;
	}

	static FromBigInt(Long: bigint): LogicLong {
		return new LogicLong(Number(Long >> 32n), Number(Long & 0xFFFFFFFFn));
	}

	ToBigInt(): bigint {
		return (BigInt(this.MHighInteger) << 32n) | (BigInt(this.MLowInteger) & 0xFFFFFFFFn);
	}
}

export default LogicLong