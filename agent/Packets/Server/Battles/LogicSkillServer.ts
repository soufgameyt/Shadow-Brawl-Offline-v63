class LogicSkillServer {
    static encode(Stream: any) {
        console.log("did not crashed, struct wrong after or RETARDATION :sobl");
        Stream.WritePositiveVIntMax255OftenZero(0);
        Stream.WritePositiveVIntMax255OftenZero(0);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.WritePositiveVIntMax255OftenZero(0);
        Stream.WritePositiveIntMax131071(0);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
    }
}

export default LogicSkillServer