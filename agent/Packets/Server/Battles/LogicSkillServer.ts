class LogicSkillServer {
    static encode(Stream: any) {
        console.log("did not crashed, struct wrong after or RETARDATION :sobl");
        Stream.writePositiveVIntMax255OftenZero(0);
        Stream.writePositiveVIntMax255OftenZero(0);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
        Stream.writePositiveVIntMax255OftenZero(0);
        Stream.writePositiveIntMax131071(0);
        Stream.writeBoolean(false);
        Stream.writeBoolean(false);
    }
}

export default LogicSkillServer