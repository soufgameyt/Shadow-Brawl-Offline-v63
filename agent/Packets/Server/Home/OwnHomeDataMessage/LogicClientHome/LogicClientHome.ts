import LogicConfData from "./LogicConfData/LogicConfData.js";
import LogicDailyData from "./LogicDailyData/LogicDailyData.js";

import LogicRandomRewardManager from "./Arrays/LogicRandomRewardManager.js";
import LogicBattleIntro from "./Arrays/LogicBattleIntro.js";
import LogicMastery from "./Arrays/LogicMastery.js";
import LogicHeroGears from "./Arrays/LogicHeroGears.js";
import LogicBrawlerRecruitRoad from "./Arrays/LogicBrawlerRecruitRoad.js";
import LogicLoginCalendar from "./Arrays/LogicLoginCalendar.js";
import LogicPlayerAlliancePiggyBankData from "./Arrays/LogicPlayerAlliancePiggyBankData.js";
import LogicPlayerCollabEventData from "./Arrays/LogicPlayerCollabEventData.js";
import LogicPlayerSpecialEventData from "./Arrays/LogicPlayerSpecialEventData.js";
import LogicDataSeenStates from "./Arrays/LogicDataSeenStates.js";
import LogicPlayerContestEventData from "./Arrays/LogicPlayerContestEventData.js";
import LogicPlayerRecordsData from "./Arrays/LogicPlayerRecordsData.js";
import LogicGemOffer from "./Arrays/LogicGemOffer.js";
import NotificationFactory from "../NotificationFactory/NotificationFactory.js";
import LogicGatchaDrop from "./Arrays/LogicGatchaDrop.js";

class LogicClientHome {
    private stream: any;

    static LogicDailyData: any
    static LogicConfData: any

    static NotificationFactory: any

    constructor(stream: any) {
        this.stream = stream

        this.encode();
    }

    public encode(): void {
        LogicClientHome.LogicDailyData = LogicDailyData.encode(this.stream);
        LogicClientHome.LogicConfData = LogicConfData.encode(this.stream);

        this.stream.WriteLong(0, 1);

        LogicClientHome.NotificationFactory = new NotificationFactory(this.stream);

        this.stream.writeVInt(1337);

        if (this.stream.writeBoolean(true)) 
        {
            this.stream.writeVInt(1);
            {
                LogicGatchaDrop.encode(this.stream); // LogicGatchDrop::encode
            }
        }
        else 
        {
            this.stream.writeVInt(0);
        }

        this.stream.writeVInt(1); // Array
        {
            this.stream.WriteDataReference(0);
        }

        this.stream.writeVInt(1); // Array
        {
            this.stream.WriteDataReference(0);
            this.stream.WriteDataReference(0);
            this.stream.WriteByte(0);
        }
        
        if (this.stream.writeBoolean(true)) {
            LogicLoginCalendar.encode(this.stream);
        }
        if (this.stream.writeBoolean(true)) {
            LogicLoginCalendar.encode(this.stream);
        }
        if (this.stream.writeBoolean(true)) {
            LogicLoginCalendar.encode(this.stream);
        }
        if (this.stream.writeBoolean(true)) {
            LogicLoginCalendar.encode(this.stream);
        }

        LogicHeroGears.encode(this.stream)

        if (this.stream.writeBoolean(true)) {
            LogicBrawlerRecruitRoad.encode(this.stream);
        }

        LogicMastery.encode(this.stream);
        LogicBattleIntro.encode(this.stream);
        LogicRandomRewardManager.encode(this.stream);

        if (this.stream.writeBoolean(false)) {
            LogicPlayerAlliancePiggyBankData.encode(this.stream);
        }
        
        if (this.stream.writeBoolean(true)) {
            LogicPlayerCollabEventData.encode(this.stream);
        }

        if (this.stream.writeBoolean(true)) {
            LogicPlayerSpecialEventData.encode(this.stream);
        }

        LogicDataSeenStates.encode(this.stream);

        if (this.stream.writeBoolean(false)) {
            LogicPlayerContestEventData.encode(this.stream);
        }

        if (this.stream.writeBoolean(true)) {
            LogicPlayerRecordsData.encode(this.stream);
        }

        this.stream.writeBoolean(true);
        {
            this.stream.writeVInt(0);
            this.stream.writeVInt(0);
            this.stream.writeVInt(0);
            this.stream.writeVInt(0);
            this.stream.writeVInt(0);
            this.stream.writeVInt(0);

            this.stream.writeVInt(1);
            {
                this.stream.writeBoolean(true);
                {
                    LogicGemOffer.encode(this.stream, 57, 14888, 0, 0, 0);
                }
            }

            this.stream.writeVInt(1);
            {
                this.stream.writeBoolean(true);
                {
                    LogicGemOffer.encode(this.stream, 57, 14888, 0, 0, 0);
                }
            }
            
            this.stream.writeVInt(0);
            this.stream.writeVInt(0);
        }

        this.stream.writeBoolean(true);
        {
            this.stream.writeVInt(1);
            {
                this.stream.writeVInt(0);
                this.stream.writeVInt(0);
                this.stream.writeVInt(0);
                this.stream.writeVInt(0);
                this.stream.writeVInt(0);
                this.stream.writeVInt(0);
                this.stream.writeVInt(0);
                this.stream.writeVInt(0);
            }
        }

        this.stream.writeVInt(1); // Array
        {
            this.stream.writeBoolean(true);
            {
                this.stream.writeVInt(0);

                this.stream.writeVInt(0);
                this.stream.writeVInt(0);
                this.stream.writeVInt(0);

                this.stream.writeVInt(0);
                this.stream.writeVInt(0);
                this.stream.writeVInt(0);
            }
        }
    }
}

export default LogicClientHome