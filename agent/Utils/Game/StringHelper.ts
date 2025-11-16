import Functions from "../../Manager/Functions";

class StringHelper {
    static ptr(Text: string) {
        return Memory.allocUtf8String(Text);
    }

    static scptr(Text: string) {
        let scptrmem = Functions.Imports.malloc(Text.length + 1);
        Functions.String.StringCtor(scptrmem, StringHelper.ptr(Text))
        return scptrmem
    }

    static ReadSCPtr(scptr: NativePointer) {
	    const StringByteLength = scptr.add(4).readInt();
	    if (StringByteLength > 7) {
		    return scptr.add(8).readPointer().readUtf8String(StringByteLength);
	    }
	    return scptr.add(8).readUtf8String(StringByteLength);
    }

}

export default StringHelper