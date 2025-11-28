import Environment from "../../Environement/Environment";

class Socket {
    static LibSystem = Process.getModuleByName((Environment.platform == "Android" ? "libc.so" : "libSystem.B.dylib"));

    static SocketFn = new NativeFunction(Socket.LibSystem.findExportByName("socket")!, 'int', ['int', 'int', 'int']);
    static ConnectFn = new NativeFunction(Socket.LibSystem.findExportByName("connect")!, 'int', ['int', 'pointer', 'int']);
    static SendFn = new NativeFunction(Socket.LibSystem.findExportByName("send")!, 'int', ['int', 'pointer', 'int', 'int']);
    static RecvFn = new NativeFunction(Socket.LibSystem.findExportByName("recv")!, 'int', ['int', 'pointer', 'int', 'int']);
    static CloseFn = new NativeFunction(Socket.LibSystem.findExportByName("close")!, 'int', ['int']);
    static FcntlFn = new NativeFunction(Socket.LibSystem.findExportByName("fcntl")!, 'int', ['int', 'int', 'int']);
    static PollFn = new NativeFunction(Socket.LibSystem.findExportByName("poll")!, 'int', ['pointer', 'int', 'int']);
    static GetSockOptFn = new NativeFunction(Socket.LibSystem.findExportByName("getsockopt")!, 'int', ['int', 'int', 'int', 'pointer', 'pointer']);

    static AF_INET = 2;
    static SOCK_STREAM = 1;
    static F_GETFL = 3;
    static F_SETFL = 4;
    static O_NONBLOCK = 0x0800;
    static POLLIN = 0x0001;
    static POLLOUT = 0x0004;
    static SOL_SOCKET = 1;
    static SO_ERROR = 4;

    static CheckConnected(Fd: number): boolean {
        const ErrPtr = Memory.alloc(4); ErrPtr.writeS32(0);
        const LenPtr = Memory.alloc(4); LenPtr.writeS32(4);
        const R = Socket.GetSockOptFn(Fd, Socket.SOL_SOCKET, Socket.SO_ERROR, ErrPtr, LenPtr);
        if (R !== 0) return false;
        return ErrPtr.readS32() === 0;
    }

    static MakeSockaddrIn(Ip: string, Port: number): NativePointer {
        const SockAddr = Memory.alloc(16); SockAddr.writeU16(Socket.AF_INET);
        const PortBE = ((Port & 0xff) << 8) | ((Port >> 8) & 0xff);
        SockAddr.add(2).writeU16(PortBE >>> 0);
        const Parts = Ip.split('.').map(p => parseInt(p, 10));
        const IpBytes = (Parts[0] << 24) | (Parts[1] << 16) | (Parts[2] << 8) | Parts[3];
        const IpBE = ((IpBytes & 0xff) << 24) | ((IpBytes & 0xff00) << 8) | ((IpBytes & 0xff0000) >>> 8) | ((IpBytes >>> 24) & 0xff);
        SockAddr.add(4).writeU32(IpBE >>> 0);
        return SockAddr;
    }

    static ConnectWithTimeout(Ip: string, Port: number, Ms: number): number {
        const Fd = Socket.SocketFn(Socket.AF_INET, Socket.SOCK_STREAM, 0);
        if (Fd < 0) return -1;
        const Flags = Socket.FcntlFn(Fd, Socket.F_GETFL, 0);
        Socket.FcntlFn(Fd, Socket.F_SETFL, Flags | Socket.O_NONBLOCK);
        const Addr = Socket.MakeSockaddrIn(Ip, Port);
        const Rc = Socket.ConnectFn(Fd, Addr, 16);
        if (Rc === 0) return Fd;
        const PFd = Memory.alloc(8); PFd.writeS32(Fd); PFd.add(4).writeS16(Socket.POLLOUT); PFd.add(6).writeS16(0);
        const Pr = Socket.PollFn(PFd, 1, Ms);
        if (Pr > 0 && Socket.CheckConnected(Fd)) return Fd;
        Socket.CloseFn(Fd);
        return -1;
    }

    static ReadAll(Fd: number, Ms: number): string {
        const Buf = Memory.alloc(8192);
        const PFd = Memory.alloc(8); PFd.writeS32(Fd); PFd.add(4).writeS16(Socket.POLLIN); PFd.add(6).writeS16(0);
        const Deadline = Date.now() + Ms; let Out = '';
        while (Date.now() < Deadline) {
            const Pr = Socket.PollFn(PFd, 1, Math.max(0, Deadline - Date.now()));
            if (Pr <= 0) break;
            const N = Socket.RecvFn(Fd, Buf, 8192, 0);
            if (N <= 0) break;
            const S = Buf.readUtf8String(N);
            if (S) Out += S;
        }
        return Out;
    }

    static HttpBody(Resp: string): string {
        const Idx = Resp.indexOf("\r\n\r\n"); if (Idx < 0) return "";
        const Headers = Resp.slice(0, Idx); let Body = Resp.slice(Idx + 4);
        const Lower = Headers.toLowerCase();
        if (Lower.indexOf("transfer-encoding: chunked") !== -1) {
            let I = 0, Out = "";
            while (true) {
                const CrLf = Body.indexOf("\r\n", I); if (CrLf < 0) break;
                const SizeHex = Body.slice(I, CrLf).trim();
                const Size = parseInt(SizeHex, 16); if (!(Size >= 0)) break;
                I = CrLf + 2; if (Size === 0) break;
                Out += Body.substr(I, Size); I += Size + 2;
            }
            return Out;
        }
        return Body;
    }
}

export default Socket