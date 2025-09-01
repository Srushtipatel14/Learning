// promise any example

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 resolve")
    })
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 resolve")
    })
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p3 resolve")
    })
})

const result = Promise.any([p1, p2, p3])
result
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err))