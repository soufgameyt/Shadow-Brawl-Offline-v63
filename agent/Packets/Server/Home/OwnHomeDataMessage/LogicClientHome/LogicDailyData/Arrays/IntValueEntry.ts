class IntValueEntry {
    static encode(stream: any): void {
        stream.WriteVInt(17);
        stream.WriteDataReference(2, 1); // Unknown
        stream.WriteDataReference(6, 0); // Demo Account
        stream.WriteDataReference(7, 0); // Is Invite Block On
        stream.WriteDataReference(1, 9); // Show Star Points
        stream.WriteDataReference(10, 0); // Power Play Trophies Gained
        stream.WriteDataReference(1, 12); // Unknown
        // stream.WriteDataReference(0, 15); // Should Show Age Popup
        stream.WriteDataReference(16, 60); // Player Age
        stream.WriteDataReference(17, 0); // Team Chat Muted
        stream.WriteDataReference(1, 18); // Esport Button
        stream.WriteDataReference(19, 0); // Champion Ship Lives Buy Popup
        stream.WriteDataReference(21, 1); // Looking For Team State
        stream.WriteDataReference(22, 1);
        stream.WriteDataReference(23, 0); // Club Trophies Gained
        stream.WriteDataReference(24, 1); // Have already watched club league stupid animation
        stream.WriteDataReference(100, 41); // Ranked Reputation
        stream.WriteDataReference(100, 45); // Visible Max Ranked Reputation
        stream.WriteDataReference(100, 46); // Max Ranked Reputation
        // stream.WriteDataReference(1, 52); // Trophy Box Feature Unlocked
    }
}

export default IntValueEntry