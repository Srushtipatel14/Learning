
const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("First task completed")
    }, 1000)
})

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("Second task completed")
    }, 2000)
})

async function performTasks() {
    try {
        const result1 = await promise1;
        console.log(result1); // 'First task completed'

        const result2 = await promise2;
        console.log(result2); // 'Second task completed'
    } catch (error) {
        console.error(error); // Catches any rejection or error
    }
}

//performTasks();

promise1.then((msg)=>{
    console.log(msg)
    return promise2
})
.then((msg)=>{
    console.log(msg)
})
.catch((error)=>{
    console.log("Error",error)
}).finally(()=>{
    console.log("finally execute")
})

