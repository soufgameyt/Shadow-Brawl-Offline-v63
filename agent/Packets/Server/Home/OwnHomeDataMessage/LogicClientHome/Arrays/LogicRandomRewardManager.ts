class LogicRandomRewardManager {
    static encode(stream: any): void {
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.WriteInt(-1435281534)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(86400*24)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeVInt(0)
        stream.writeBoolean(false)
    }
}

export default LogicRandomRewardManager
/*
__int64 __fastcall LogicRandomRewardManager::encode(int *a1, __int64 a2)
{
  __int64 v4; // x21
  __int64 v5; // x22
  __int64 v6; // x21
  _QWORD *v7; // x8
  __int64 v8; // x21
  __int64 v9; // x22
  __int64 v10; // x21
  __int64 v11; // x21
  __int64 v12; // x21
  __int64 v13; // x21

  v4 = *(unsigned int *)(*((_QWORD *)a1 + 1) + 12LL);
  (*(void (__fastcall **)(__int64, __int64))(*(_QWORD *)a2 + 136LL))(a2, v4);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, *(unsigned int *)(*(_QWORD *)a1 + 12LL));
  sub_1009F5BD0(*((_QWORD *)a1 + 3), a2);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, (unsigned int)a1[4]);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, (unsigned int)a1[5]);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, (unsigned int)a1[8]);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, (unsigned int)a1[13]);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, (unsigned int)a1[14]);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, (unsigned int)a1[19]);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, (unsigned int)a1[23]);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, (unsigned int)a1[27]);
  (*(void (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 136LL))(a2, (unsigned int)a1[36]);
  return (*(__int64 (__fastcall **)(__int64, _QWORD))(*(_QWORD *)a2 + 64LL))(a2, *((unsigned __int8 *)a1 + 148));
}*/