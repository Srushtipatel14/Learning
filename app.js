const { get } = require("http")

const processA = () => {
    return new Promise((resolve) => {
        console.log("Process A started")
        setTimeout(() => {
            console.log("Process A finished")
            resolve('Process A finished')
        }, 0)
    })
}

const processB = () => {
    return new Promise((resolve) => {
        console.log("Process B started")
        setTimeout(() => {
            console.log("Process B finished")
            resolve('Process B finished')
        }, 0)
    })
}

const processC = () => {
    return new Promise((resolve) => {
        console.log("Process C started")
        setTimeout(() => {
            console.log("Process C finished")
            resolve('Process C finished')
        }, 0)
    })
}

const processD = () => {
    return new Promise((resolve) => {
        console.log("Process D started")
        setTimeout(() => {
            console.log("Process D finished")
            resolve('Process D finished')
        })
    }, 0)
}


async function processFlow() {
    try {
        const proA = processA();
        const proD = processD();
        proA.then(() => processB());

        await Promise.all([proA, proD]);
        console.log("Process A and D completed successfully");

        processC();
    } catch (error) {
        console.log(error)
    }
}

//processFlow();

const val=[1,2,3]

const sum=(x,y,z)=>x+y+z;

console.log(sum(...val))