import PlayerDisplayData from "../../../Utils/PlayerDisplayData";

class LogicPlayer {
    static HasUlti = true;
    static HasBonusSkill = false;
    static IsSpectator: number = 0
    static ControlMode: number = 2

    static encode(stream: any) {
        stream.WriteLong(0, 256617006);

        stream.writeBoolean(true);
        {
            PlayerDisplayData.encode(stream, "soufgamev2", 100, 58, 6, 6);
            
            stream.writeVInt(0);
    
            stream.WriteDataReference(100, 1);
            stream.WriteDataReference(28, -1);
            stream.WriteDataReference(28, -1);
            stream.WriteDataReference(52, -1);
            stream.WriteDataReference(76, -1);
            stream.WriteDataReference(0, 0);
        }

        stream.writeVInt(0); // Player Index
        stream.writeVInt(0); // Team Index
        stream.writeVInt(0);

        stream.writeInt(1000000); // Global ID

        stream.writeByte(1); // Selected Brawlers Count
        {
            stream.WriteDataReference(16, 1); // Selected Brawler
            stream.writeBoolean(true); // LogicHeroUpgrades::encode
            {
                stream.writeVInt(11);
                {
                    stream.WriteDataReference(0, 0);
                    stream.WriteDataReference(0, 0);
                    stream.WriteDataReference(0, 0);
                    stream.WriteDataReference(0, 0);
                    stream.WriteDataReference(0, 0);
                    stream.WriteDataReference(0, 0);
                    stream.WriteDataReference(0, 0);
                }
                
                stream.writeVInt(0);
                stream.writeVInt(0);

                stream.WriteDataReference(0, 0);
                
            }
            
            stream.writeBoolean(true); // LogicBattleEmotes::encode
            {
                stream.writeVInt(5);
                {
                    stream.WriteDataReference(52, 210)
                    stream.WriteDataReference(52, 154);
                    stream.WriteDataReference(52, 152);
                    stream.WriteDataReference(52, 175);
                    stream.WriteDataReference(52, 687);                    
                }
                stream.writeVInt(0);
            }

            stream.writeBoolean(true); // LogicBattleSprays::encode
            {
                stream.writeVInt(5);
                {
                    stream.WriteDataReference(68, 53);
                    stream.WriteDataReference(68, 15);
                    stream.WriteDataReference(68, 50);
                    stream.WriteDataReference(68, 163);
                    stream.WriteDataReference(68, 51);
                }
            }

            stream.WriteDataReference(29, 0); // Selected Skin
            stream.WriteDataReference(0, 0); // Unknown
            stream.WriteDataReference(0, 0); // Unknown
        }

        stream.writeBoolean(false);
        stream.writeBoolean(false);
        
        stream.writeByte(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);

        stream.writeBoolean(false);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
    }

    static GetBonusSkillCooldown() {
        return 1000;
    }
}

export default LogicPlayer