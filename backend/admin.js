const { kafka } = require("./client");

async function init() {

    const admin = kafka.admin();
    console.log("admin connected...")
    await admin.connect();
    console.log("admin connection successfully...");

    console.log("creating topics")

    await admin.createTopics({
        topics: [{
            topic: "rider-updates",
            numPartitions: 2,
            replicationFactor: 1
        },
        {
            topic: "user-updates",
            numPartitions: 1,
            replicationFactor: 1
        }]
    })

    console.log("topic created successfully");

    console.log("admin disconnected successfully...")
    await admin.disconnect();
}

init().catch(console.error)