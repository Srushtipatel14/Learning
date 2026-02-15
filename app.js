const processA = () => {
  return new Promise((resolve) => {
    console.log("Process A started")
    setTimeout(() => {
      console.log("Process A finished")
      resolve("Process A finished")
    }, 1000)
  })
};

const processB = () => {
  return new Promise((resolve) => {
    console.log("Process B started")
    setTimeout(() => {
      console.log("Process B finished")
      resolve("Process B finished")
    }, 1000)
  })
};

const processC = () => {
  return new Promise((resolve) => {
    console.log("Process C started")
    setTimeout(() => {
      console.log("Process C finished")
      resolve("Process C finished")
    }, 1000)
  })
};

const processD = () => {
  return new Promise((resolve) => {
    console.log("Process D started")
    setTimeout(() => {
      console.log("Process D finished")
      resolve("Process D finished")
    }, 1000)
  })
};

async function val() {
  try {
    const promiseA=processA();
    const promised=processD();
    promiseA.then(()=>processB());

    await Promise.all([promiseA,promised])
    console.log("A nd d done")

    await processC()

  } catch (error) {
    console.log(error)
  }
}

val()