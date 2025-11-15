import ByteStream from "../../DataStream/ByteStream";

class LogicRandom {
	private Seed: number;

	constructor(Seed: number = 0) {
		this.Seed = Seed;
	}

	getIteratedRandomSeed(): number {
		return this.Seed;
	}

	setIteratedRandomSeed(Value: number): void {
		this.Seed = Value;
	}

	rand(Max: number): number {
		if (Max > 0) {
			this.Seed = this.iterateRandomSeed();
			let TmpVal = this.Seed;

			if (TmpVal < 0) {
				TmpVal = -TmpVal;
			}

			return TmpVal % Max;
		}

		return 0;
	}

	iterateRandomSeed(): number {
		let Seed = this.Seed;

		if (Seed === 0) {
			Seed = -1;
		}

		const Tmp = Seed ^ (Seed << 13) ^ ((Seed ^ (Seed << 13)) >> 17);
		const Tmp2 = Tmp ^ (32 * Tmp);

		return Tmp2;
	}

	decode(Stream: ByteStream): void {
		this.Seed = Stream.ReadVInt();
	}

	encode(Stream: ByteStream): void {
		Stream.writeVInt(this.Seed);
	}
}

export default LogicRandom;
