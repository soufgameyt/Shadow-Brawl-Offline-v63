import Environment from "../../../Environement/Environment";
import fs from "fs";


class Dumper {
    static OwnHomeDataMessageOutput: any
	static StreamVInt: any

	static DumpOHD() {
        Dumper.OwnHomeDataMessageOutput = `${ObjC.classes.NSHomeDirectory().toString()}/Documents/dump_vints.txt`
        fs.writeFileSync(Dumper.OwnHomeDataMessageOutput, "", "utf8");

		let sigmaboy = Interceptor.attach(Environment.LaserBase.add(0x396070), {
			onEnter: function(args) {
				Dumper.StreamVInt = Interceptor.attach(Environment.LaserBase.add(0x9EE72C), {
					onLeave: function(retval) {
						let VInt = "ByteStream.writeVInt(" + retval.toInt32() + ")\n";
                        fs.appendFileSync(Dumper.OwnHomeDataMessageOutput, VInt, "utf8");
					}
				});
			},
			onLeave(retval) {
				Dumper.StreamVInt.detach();
			}
		})
	}

	static DumpBattles() {
        console.log("ruck ypou" + Frida.version);
    }
}

declare let ObjC: any
export default Dumper
