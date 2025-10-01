const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 success")
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 success")
    }, 2000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3 success")
    }, 3000)
})

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p4 success")
    }, 4000)
})

const p = Promise.any([p1, p2, p3, p4])
p.then((ans) => console.log(ans))
.catch((err) => console.log("error is", err))