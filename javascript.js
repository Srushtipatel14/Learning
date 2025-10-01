//write promises using example

/*
step:1 user login
step:2 fetch user details
step:3 ftech user order
step:4 placed order
step:5 payment successfully done for orders
*/

function userLogin(username) {
    console.log(`Logged user is ${username}`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ user: username, email: `${username}@gmail.com` })
        }, 1000)
    })
}

function fetchuserdetails(username) {
    console.log(`fetch user details : ${JSON.stringify(username)}`);
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["o1", "o2", "o3"])
        }, 1000)
    })
}

function fetchuserOrdes(orders) {
    console.log(`fetch user orders ${orders}`);
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`make payment for ${orders.length} orders`)
        }, 1000)
    })
}

function doPayment(data) {
    console.log(data)
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Payment successfully done !!")
        }, 1000)
    })
}

userLogin("srushti")
.then((userdata)=>fetchuserdetails(userdata))
.then((orders)=>fetchuserOrdes(orders))
.then((payment)=>doPayment(payment))
.then((msg)=>console.log(msg))
.catch((error)=>console.log(`Error is ${error}`))