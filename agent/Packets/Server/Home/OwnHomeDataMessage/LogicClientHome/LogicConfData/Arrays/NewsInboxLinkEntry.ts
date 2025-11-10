class NewsInboxLinkEntry {
    static encode(stream: any) {
        stream.WriteVInt(0);
        stream.WriteString("https://github.com/soufgameyt/Shadow-Brawl-Offline-v63/");
        if (stream.WriteBoolean(true)) {
            stream.WriteString("https://github.com/soufgameyt/Shadow-Brawl-Offline-v63/");
            stream.WriteVInt(0);
        }
    }
}

export default NewsInboxLinkEntry