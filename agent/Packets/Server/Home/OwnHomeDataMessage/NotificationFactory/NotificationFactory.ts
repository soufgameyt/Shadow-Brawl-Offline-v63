import BaseNotification from "../NotificationFactory/BaseNotification.js";
import NotificationFactoryConfig from "../NotificationFactory/NotificationFactoryConfig.js";

import ChallengeRewardNotification from "./Notifications/ChallengeRewardNotification.js";

class NotificationFactory {
    private stream: any;
    private NotificationConfig: any;

    constructor(stream: any) {
        this.stream = stream;
        this.NotificationConfig = new NotificationFactoryConfig(1, [28], [0], [false], [100000], ["hi"]);

        this.encode();
    }

    public encode(): void {
        this.stream.WriteVInt(this.NotificationConfig.NotificationCount);

        for (let i = 0; i < this.NotificationConfig.NotificationCount; i++) {
            switch (this.NotificationConfig.NotificationID[i]) {
                case 28:
                    new BaseNotification(this.stream, this.NotificationConfig.NotificationID[i], this.NotificationConfig.NotificationIndex[i], this.NotificationConfig.IsRead[i], this.NotificationConfig.NotificationTime[i], this.NotificationConfig.NotificationMessage[i]);
                    break;
                case 29:
                    break;
                case 30:
                    break;
                case 31:
                    break;
                case 32:
                    break;
                case 33:
                    break;
                case 34:
                    break;
                case 35:
                    break;
                case 36:
                    break;
                case 37:
                    break;
                case 38:
                    break;
                case 39:
                    break;
                case 40:
                    break;
                case 41:
                    break;
                case 42:
                    break;
                case 43:
                    break;
                case 44:
                    break;
                case 45:
                    break;
                case 46:
                    break;
                case 47:
                    break;
                case 48:
                    break;
                case 50:
                    break;
                case 51:
                    break;
                case 52:
                    break;
                case 53:
                    break;
                case 54:
                    break;
                case 55:
                    break;
                case 56:
                    break;
                case 57:
                    break;
                case 58:
                    break;
                case 59:
                    break;
                case 60:
                    break;
                case 61:
                    break;
                case 62:
                    break;
                case 63:
                    new BaseNotification(this.stream, this.NotificationConfig.NotificationID[i], this.NotificationConfig.NotificationIndex[i], this.NotificationConfig.IsRead[i], this.NotificationConfig.NotificationTime[i], this.NotificationConfig.NotificationMessage[i]);
                    break;
                case 64:
                    break;
                case 65:
                    break;
                case 66:
                    break;
                case 67:
                    break;
                case 68:
                    break;
                case 69:
                    break;
                case 70:
                    new BaseNotification(this.stream, this.NotificationConfig.NotificationID[i], this.NotificationConfig.NotificationIndex[i], this.NotificationConfig.IsRead[i], this.NotificationConfig.NotificationTime[i], this.NotificationConfig.NotificationMessage[i]);
                    ChallengeRewardNotification.encode(this.stream);
                    break;
                case 71:
                    break;
                case 72:
                    break;
                case 73:
                    break;
                case 74:
                    break;
                case 75:
                    break;
                case 76:
                    break;
                case 79:
                    break;
                case 80:
                    break;
                case 81:
                    break;
                case 82:
                    break;
                case 83:
                    break;
                case 84:
                    break;
                case 85:
                    break;
                case 86:
                    break;
                case 87:
                    break;
                case 88:
                    break;
                case 89:
                    break;
                case 90:
                    break;
                case 91:
                    break;
                case 92:
                    break;
                case 93:
                    break;
                case 94:
                    break;
                case 95:
                    break;
                case 96:
                    break;
                default:
                    new BaseNotification(this.stream, this.NotificationConfig.NotificationID[i], this.NotificationConfig.NotificationIndex[i], this.NotificationConfig.IsRead[i], this.NotificationConfig.NotificationTime[i], this.NotificationConfig.NotificationMessage[i]);
                    break;
            }
        }
    }
}

export default NotificationFactory;
