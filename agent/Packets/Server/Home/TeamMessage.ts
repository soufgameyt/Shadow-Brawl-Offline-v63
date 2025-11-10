import ByteStream from "../../../DataStream/ByteStream.js"

class TeamMessage {
    static encode(): number[] {
        let Stream = new ByteStream([]);

        Stream.WriteVInt(0); // Room Type
        Stream.WriteBoolean(false);
        Stream.WriteVInt(3);
        Stream.WriteLong(0, 1); // Team ID
        Stream.WriteVInt(0);
        Stream.WriteBoolean(false);
        Stream.WriteBoolean(false);
        Stream.WriteVInt(0);
        Stream.WriteVInt(0);
        Stream.WriteVInt(0);
        Stream.WriteDataReference(15, 7); // Map ID
        Stream.WriteBoolean(false); // Battle Player Map

        Stream.WriteVInt(1); // TeamMemberEntry::encode
        {
            Stream.WriteBoolean(true); // Is Owner
            Stream.WriteLong(0, 1); // Player ID
            Stream.WriteDataReference(16, 0); // Selected Brawler
            Stream.WriteDataReference(29, 0); // Selected Skin
            Stream.WriteVInt(0); // ?
            Stream.WriteVInt(1250); // Brawler Trophies
            Stream.WriteVInt(1250); // Brawler Highest Trophies
            Stream.WriteVInt(11); // Brawler Power Level
            Stream.WriteVInt(3); // Player State
            Stream.WriteVInt(0); // ?
            Stream.WriteBoolean(true); // Is Ready
            Stream.WriteVInt(0); // Team
            Stream.WriteVInt(0);
            Stream.WriteVInt(0);
            Stream.WriteVInt(0);
            Stream.WriteVInt(0);
            Stream.WriteVInt(0);
            Stream.WriteVInt(0);
            
            Stream.WriteString("@soufgamev2"); // Player Name
            Stream.WriteVInt(100); // Player Experience
            Stream.WriteVInt(28000000); // Player Thumbnail
            Stream.WriteVInt(43000006); // Player Name Color
            Stream.WriteVInt(43000006); // Player BP Name Color

            Stream.WriteDataReference(0); // Star Power
            Stream.WriteDataReference(0); // Gadget
            Stream.WriteDataReference(0); // Gear
            Stream.WriteDataReference(0); // Gear
            Stream.WriteDataReference(0);
            Stream.WriteDataReference(0);
            Stream.WriteDataReference(0);
            Stream.WriteDataReference(0);

            Stream.WriteVInt(0);
            Stream.WriteVInt(0);
            Stream.WriteVInt(0);
            Stream.WriteVInt(0);
            Stream.WriteVInt(0);
        }

        Stream.WriteVInt(0); // Player Invite Entry
        Stream.WriteVInt(0); // Team Join Request
        Stream.WriteVInt(0); // Bot Slots
        Stream.WriteVInt(0);
        Stream.WriteBoolean(true); // Text Chat Enabled
        Stream.WriteBoolean(false);
        Stream.WriteBoolean(false);
        Stream.WriteVInt(0); // Modifiers

        return Stream.Payload;
    }

    static GetMessageType(): number {
        return 24124;
    }
}

export default TeamMessage


/*
__int64 __fastcall OwnTeamEntry::encode(unsigned int *a1, __int64 a2)
{
  __int64 v4; // x21
  __int64 v5; // x22
  __int64 v6; // x21
  __int64 v7; // x21
  __int64 v8; // x22
  __int64 v9; // x21
  __int64 v10; // x21
  __int64 v11; // x22
  __int64 v12; // x21
  __int64 v13; // x21
  __int64 v14; // x22
  __int64 v15; // x21
  __int64 v16; // x21
  __int64 v17; // x22
  __int64 v18; // x23
  __int64 v19; // x21
  __int64 v20; // x0
  __int64 v21; // x0
  __int64 v22; // x1
  int v24; // [xsp+Ch] [xbp-34h] BYREF

  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, *a1);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 64LL))(a2, *((unsigned __int8 *)a1 + 4));
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, a1[2]);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 168LL))(a2, *((_QWORD *)a1 + 2));
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, a1[6]);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 64LL))(a2, *((unsigned __int8 *)a1 + 5));
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 64LL))(a2, *((unsigned __int8 *)a1 + 6));
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, a1[7]);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, a1[8]);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, a1[24]);
  ByteStreamHelper::writeDataReference(a2, *((_QWORD *)a1 + 5));
  ByteStreamHelper::writeBattlePlayerMap(a2, *((_QWORD *)a1 + 15));
  (*(void (__fastcall **)(__int64, __int64))(*(_QWORD *)a2 + 136LL))(a2, v4);
  (*(void (__fastcall **)(__int64, __int64))(*(_QWORD *)a2 + 136LL))(a2, v7);
  (*(void (__fastcall **)(__int64, __int64))(*(_QWORD *)a2 + 136LL))(a2, v10);
  (*(void (__fastcall **)(__int64, __int64))(*(_QWORD *)a2 + 136LL))(a2, v13);
  (*(void (__fastcall **)(__int64, __int64))(*(_QWORD *)a2 + 136LL))(a2, v16);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 64LL))(a2, *((unsigned __int8 *)a1 + 72));
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 64LL))(a2, *((unsigned __int8 *)a1 + 73));
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 64LL))(a2, *((unsigned __int8 *)a1 + 74));
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 64LL))(a2, *((unsigned __int8 *)a1 + 75));
}*/