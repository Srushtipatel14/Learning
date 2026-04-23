const { kafka } = require("./client");

async function init() {

    const producer = kafka.producer();
    console.log("producer connecting...")
    await producer.connect();
    console.log("producer connected successfully...")

    await producer.send({
        topic: 'rider-updates',
        messages: [
            {
                partition:0,
                key: "location-update", 
                value: JSON.stringify({
                    name: "srushti", location: "SOUTH"
                })
            }
        ]
    })

    await producer.disconnect()

}

init().catch(console.error);