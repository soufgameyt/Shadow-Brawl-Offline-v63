class ChallengeRewardNotification {
    static encode(stream: any) {
        stream.writeVInt(0); // LogicRewards::encode
        stream.writeVInt(0);
        stream.writeVInt(0);
        
        stream.writeString("");
        stream.writeBoolean(false);
    }
}

export default ChallengeRewardNotification