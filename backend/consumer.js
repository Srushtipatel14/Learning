const { kafka } = require("./client");

async function init() {
    const consumer = kafka.consumer({ groupId: "user-1" });

    await consumer.connect();
    await consumer.subscribe({
        topics: ["rider-updates", "user-updates"],
        fromBeginning: true,
    });

    console.log("Consumer running...");

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(
                "RECEIVED:",
                topic,
                partition,
                message.value.toString()
            );
        },
    });
}

init();