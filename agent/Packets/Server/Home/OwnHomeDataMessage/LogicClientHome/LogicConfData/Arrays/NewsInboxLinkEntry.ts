class NewsInboxLinkEntry {
    static encode(stream: any) {
        stream.writeVInt(0);
        stream.writeString("https://github.com/soufgameyt/Shadow-Brawl-Offline-v63/");
        if (stream.writeBoolean(true)) {
            stream.writeString("https://github.com/soufgameyt/Shadow-Brawl-Offline-v63/");
            stream.writeVInt(0);
        }
    }
}

export default NewsInboxLinkEntry