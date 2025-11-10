class LogicPlayer {
    static HasUlti = true;
    static HasBonusSkill = false;
    static IsSpectator: number = 0
    static ControlMode: number = 2

    static encode(Stream: any) {
        Stream.WriteLong(0, 256617006);

        Stream.WriteBoolean(true);
        {
            {
                Stream.WriteString("@soufgamev2");
                Stream.WriteVInt(100); // Experience
                Stream.WriteVInt(28000058); // Profile Icon
                Stream.WriteVInt(43000006); // Name Color
                Stream.WriteVInt(43000006); // Brawl Pass Name Color
            }
            
            Stream.WriteVInt(0);
    
            Stream.WriteDataReference(100, 1);
            Stream.WriteDataReference(28, -1);
            Stream.WriteDataReference(28, -1);
            Stream.WriteDataReference(52, -1);
            Stream.WriteDataReference(76, -1);
            Stream.WriteDataReference(0, 0);
        }

        Stream.WriteVInt(0); // Player Index
        Stream.WriteVInt(0); // Team Index
        Stream.WriteVInt(0);

        Stream.WriteInt(1000000); // Global ID

        Stream.WriteByte(1); // Selected Brawlers Count
        {
            Stream.WriteDataReference(16, 1); // Selected Brawler
            Stream.WriteBoolean(true); // LogicHeroUpgrades::encode
            {
                Stream.WriteVInt(11);
                {
                    Stream.WriteDataReference(0, 0);
                    Stream.WriteDataReference(0, 0);
                    Stream.WriteDataReference(0, 0);
                    Stream.WriteDataReference(0, 0);
                    Stream.WriteDataReference(0, 0);
                    Stream.WriteDataReference(0, 0);
                    Stream.WriteDataReference(0, 0);
                }
                
                Stream.WriteVInt(0);
                Stream.WriteVInt(0);

                Stream.WriteDataReference(0, 0);
                
            }
            
            Stream.WriteBoolean(true); // LogicBattleEmotes::encode
            {
                Stream.WriteVInt(5);
                {
                    Stream.WriteDataReference(52, 210)
                    Stream.WriteDataReference(52, 154);
                    Stream.WriteDataReference(52, 152);
                    Stream.WriteDataReference(52, 175);
                    Stream.WriteDataReference(52, 687);                    
                }
                Stream.WriteVInt(0);
            }

            Stream.WriteBoolean(true); // LogicBattleSprays::encode
            {
                Stream.WriteVInt(5);
                {
                    Stream.WriteDataReference(68, 53);
                    Stream.WriteDataReference(68, 15);
                    Stream.WriteDataReference(68, 50);
                    Stream.WriteDataReference(68, 163);
                    Stream.WriteDataReference(68, 51);
                }
            }

            Stream.WriteDataReference(29, 0); // Selected Skin
            Stream.WriteDataReference(0, 0); // Unknown
            Stream.WriteDataReference(0, 0); // Unknown
        }

        Stream.WriteBoolean(false);
        Stream.WriteBoolean(false);
        
        Stream.WriteByte(0);
        Stream.WriteVInt(0);
        Stream.WriteVInt(0);
        Stream.WriteVInt(0);
        Stream.WriteVInt(0);
        Stream.WriteVInt(0);
        Stream.WriteVInt(0);

        Stream.WriteBoolean(false);
        Stream.WriteVInt(0);
        Stream.WriteVInt(0);
        Stream.WriteVInt(0);
    }

    static GetBonusSkillCooldown() {
        return 1000;
    }
}

export default LogicPlayer