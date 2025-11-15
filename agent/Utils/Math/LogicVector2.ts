import ByteStream from "../../DataStream/ByteStream";
import LogicMath from "./LogicMath";

class LogicVector2 {
	X: number;
	Y: number;

	constructor(X: number = 0, Y: number = 0) {
		this.X = X;
		this.Y = Y;
	}

	destruct(): void {
		this.X = 0;
		this.Y = 0;
	}

	Add(Vector2: LogicVector2): void {
		this.X += Vector2.X;
		this.Y += Vector2.Y;
	}

	Clone(): LogicVector2 {
		return new LogicVector2(this.X, this.Y);
	}

	Dot(Vector2: LogicVector2): number {
		return this.X * Vector2.X + this.Y * Vector2.Y;
	}

	GetAngle(): number {
		return LogicMath.GetAngle(this.X, this.Y);
	}

	GetAngleBetween(X: number, Y: number): number {
		return LogicMath.GetAngleBetween(LogicMath.GetAngle(this.X, this.Y), LogicMath.GetAngle(X, Y));
	}

	GetDistance(Vector2: LogicVector2): number {
		const DX = this.X - Vector2.X;
		let Distance = 0x7FFFFFFF;

		if ((DX + 46340) >>> 0 <= 92680) {
			const DY = this.Y - Vector2.Y;

			if ((DY + 46340) >>> 0 <= 92680) {
				const DistanceX = DX * DX;
				const DistanceY = DY * DY;

				if ((DistanceY >>> 0) < (DistanceX ^ 0x7FFFFFFF)) {
					Distance = DistanceX + DistanceY;
				}
			}
		}

		return LogicMath.Sqrt(Distance);
	}

	GetDistanceSquared(Vector2: LogicVector2): number {
		const DX = this.X - Vector2.X;
		let Distance = 0x7FFFFFFF;

		if ((DX + 46340) >>> 0 <= 92680) {
			const DY = this.Y - Vector2.Y;

			if ((DY + 46340) >>> 0 <= 92680) {
				const DistanceX = DX * DX;
				const DistanceY = DY * DY;

				if ((DistanceY >>> 0) < (DistanceX ^ 0x7FFFFFFF)) {
					Distance = DistanceX + DistanceY;
				}
			}
		}

		return Distance;
	}

	GetDistanceSquaredTo(X: number, Y: number): number {
		let Distance = 0x7FFFFFFF;

		X -= this.X;
		if ((X + 46340) >>> 0 <= 92680) {
			Y -= this.Y;

			if ((Y + 46340) >>> 0 <= 92680) {
				const DistanceX = X * X;
				const DistanceY = Y * Y;

				if ((DistanceY >>> 0) < (DistanceX ^ 0x7FFFFFFF)) {
					Distance = DistanceX + DistanceY;
				}
			}
		}

		return Distance;
	}

	GetLength(): number {
		let Length = 0x7FFFFFFF;

		if ((46340 - this.X) >>> 0 <= 92680) {
			if ((46340 - this.Y) >>> 0 <= 92680) {
				const LengthX = this.X * this.X;
				const LengthY = this.Y * this.Y;

				if ((LengthY >>> 0) < (LengthX ^ 0x7FFFFFFF)) {
					Length = LengthX + LengthY;
				}
			}
		}

		return LogicMath.Sqrt(Length);
	}

	GetLengthSquared(): number {
		let Length = 0x7FFFFFFF;

		if ((46340 - this.X) >>> 0 <= 92680) {
			if ((46340 - this.Y) >>> 0 <= 92680) {
				const LengthX = this.X * this.X;
				const LengthY = this.Y * this.Y;

				if ((LengthY >>> 0) < (LengthX ^ 0x7FFFFFFF)) {
					Length = LengthX + LengthY;
				}
			}
		}

		return Length;
	}

	IsEqual(Vector2: LogicVector2): boolean {
		return this.X === Vector2.X && this.Y === Vector2.Y;
	}

	IsInArea(MinX: number, MinY: number, MaxX: number, MaxY: number): boolean {
		return this.X >= MinX && this.Y >= MinY && this.X < MinX + MaxX && this.Y < MinY + MaxY;
	}

	Multiply(Vector2: LogicVector2): void {
		this.X *= Vector2.X;
		this.Y *= Vector2.Y;
	}

	Normalize(Value: number): number {
		const Length = this.GetLength();

		if (Length !== 0) {
			this.X = (this.X * Value) / Length;
			this.Y = (this.Y * Value) / Length;
		}

		return Length;
	}

	Rotate(Degrees: number): void {
		const NewX = LogicMath.GetRotatedX(this.X, this.Y, Degrees);
		const NewY = LogicMath.GetRotatedY(this.X, this.Y, Degrees);

		this.X = NewX;
		this.Y = NewY;
	}

	Set(X: number, Y: number): void {
		this.X = X;
		this.Y = Y;
	}

	Substract(Vector2: LogicVector2): void {
		this.X -= Vector2.X;
		this.Y -= Vector2.Y;
	}

	decode(Stream: ByteStream): void {
		this.X = Stream.ReadVInt();
		this.Y = Stream.ReadVInt();
	}

	encode(Stream: ByteStream): void {
		Stream.writeVInt(this.X);
		Stream.writeVInt(this.Y);
	}

	ToString(): string {
		return `LogicVector2(${this.X},${this.Y})`;
	}
}

export default LogicVector2;
