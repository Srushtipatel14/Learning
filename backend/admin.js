const { kafka } = require("./client");

async function init() {

    const admin = kafka.admin();
    console.log("admin connectiong...")
    await admin.connect();
    console.log("admin connected successfully");

    console.log("creating Topic [rider updates]");

    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2,
            },
        ]
    });

    console.log("Topic created successfully")

    console.log("Admin disconnected");
    await admin.disconnect();

}

init();