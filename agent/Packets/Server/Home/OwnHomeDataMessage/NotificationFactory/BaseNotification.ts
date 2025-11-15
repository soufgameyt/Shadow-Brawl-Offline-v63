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
        this.stream.writeVInt(this.NotificationID);
        this.stream.writeInt(this.NotificationIndex);
        this.stream.writeBoolean(this.IsNotificationRead);
        this.stream.writeInt(this.NotificationTime);
        this.stream.writeString(this.NotificationText);
        this.stream.writeVInt(0);
    }
}

export default BaseNotification;
