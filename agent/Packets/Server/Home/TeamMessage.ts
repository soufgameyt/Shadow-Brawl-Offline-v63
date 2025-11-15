import ByteStream from "../../../DataStream/ByteStream.js"
import PlayerDisplayData from "../../../Utils/PlayerDisplayData.js";

class TeamMessage {
    static encode(): number[] {
        let stream = new ByteStream([]);

        stream.writeVInt(0); // Room Type
        stream.writeBoolean(false);
        stream.writeVInt(3);
        stream.WriteLong(0, 0); // Team ID
        stream.writeVInt(0);
        stream.writeBoolean(false);
        stream.writeBoolean(false);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.writeVInt(0);
        stream.WriteDataReference(15, 7); // Map ID
        stream.writeBoolean(false); // Battle Player Map

        stream.writeVInt(1); // TeamMemberEntry::encode
        {
            stream.writeBoolean(true); // Is Owner
            stream.WriteLong(0, 1); // Player ID
            stream.WriteDataReference(16, 96); // Selected Brawler
            stream.WriteDataReference(0); // Selected Skin
            stream.writeVInt(0); // ?
            stream.writeVInt(1235); // Brawler Trophies
            stream.writeVInt(1235); // Brawler Highest Trophies
            stream.writeVInt(1235); // Brawler Highest League Trophies
            stream.writeVInt(11); // Brawler Power Level
            stream.writeVInt(0); // ?
            stream.writeBoolean(true); // Is Ready
            stream.writeVInt(0); // Team
            stream.writeVInt(0);
            stream.writeVInt(0);
            stream.writeVInt(0);
            stream.writeVInt(0);
            stream.writeVInt(0);
            stream.writeVInt(0);
            
            PlayerDisplayData.encode(stream, "@soufgamev3", 100, 58, 6, 6);

            stream.WriteDataReference(0); // Star Power
            stream.WriteDataReference(0); // Gadget
            stream.WriteDataReference(0); // Gear
            stream.WriteDataReference(0); // Gear
            stream.WriteDataReference(0);
            stream.WriteDataReference(0);
            stream.WriteDataReference(0);
            stream.WriteDataReference(0);

            stream.writeVInt(0);
            stream.writeVInt(0);
            stream.writeVInt(0);
            stream.writeVInt(0);
            stream.writeVInt(0);
        }

        stream.writeVInt(0); // Player Invite Entry
        stream.writeVInt(0); // Team Join Request
        stream.writeVInt(0); // Bot Slots
        stream.writeVInt(0);
        stream.writeBoolean(true); // Text Chat Enabled
        stream.writeBoolean(false);
        stream.writeBoolean(false);
        stream.writeVInt(0); // Modifiers

        return stream.Payload;
    }

    static getMessageType(): number {
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