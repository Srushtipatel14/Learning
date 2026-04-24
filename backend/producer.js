const { kafka } = require("./client");

async function init() {
    const producer = kafka.producer();
    await producer.connect();

    // 👉 simulate user input
    const location = process.argv[2]; // pass from terminal

    let partition;

    if (location === "south") {
        partition = 0;
    } else if (location === "north") {
        partition = 1;
    } else {
        console.log("Invalid location. Use 'north' or 'south'");
        return;
    }

    await producer.send({
        topic: "rider-updates",
        messages: [
            {
                partition,
                key: "location-update",
                value: JSON.stringify({ name: "srushti", location }),
            },
        ],
    });

    await producer.send({
        topic: "user-updates",
        messages: [
            {
                key: "user-event",
                value: JSON.stringify({ name: "srushti", location }),
            },
        ],
    });

    await producer.disconnect();
}

init().catch(console.error);