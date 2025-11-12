const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve p1")
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve p2")
  }, 3000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve p3")
  }, 5000)
})

const p = [p1, p2, p3];
Promise.race(p).then((msg) => {
  console.log(msg)
}).catch((err) => console.log(err))