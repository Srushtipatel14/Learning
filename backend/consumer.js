const { kafka } = require("./client");


async function  init() {

    const consumer=kafka.consumer({groupId:"user-1"});
    await consumer.connect();

    await consumer.subscribe({
        topics:['rider-updates'],
        fromBeginning:true
    })
    

    await consumer.run({
        eachMessage:async({topic,parttion,message})=>{
            console.log(`${topic} ${parttion} and message is`,message.value.toString())
        }
    })
    
}

init()