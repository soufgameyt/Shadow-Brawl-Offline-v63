class BaseNotification {
    public stream: any;

    public NotificationID: number;
    public NotificationIndex: number;
    public IsNotificationRead: boolean;
    public NotificationTime: number;
    public NotificationText: any;

    constructor(stream: any, NotificationID: number, NotificationIndex: number, IsNotificationRead: boolean, NotificationTime: number, NotificationText: any) {
        this.stream = stream;

        this.NotificationID = NotificationID;
        this.NotificationIndex = NotificationIndex;
        this.IsNotificationRead = IsNotificationRead;
        this.NotificationTime = NotificationTime;
        this.NotificationText = NotificationText;

        this.encode();
    }

    public encode(): void {
        this.stream.WriteVInt(this.NotificationID);
        this.stream.WriteInt(this.NotificationIndex);
        this.stream.WriteBoolean(this.IsNotificationRead);
        this.stream.WriteInt(this.NotificationTime);
        this.stream.WriteString(this.NotificationText);
        this.stream.WriteVInt(0);
    }
}

export default BaseNotification;
