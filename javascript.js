//write another method for callback function using example

/*
step:1 user login
step:2 fetch user details
step:3 ftech user order
step:4 placed order
step:5 payment successfully done for orders
*/

function userLogin(username, callback) {
    console.log(`Logged user is ${username}`)
    return setTimeout(() => {
        callback({ user: username, email: `${username}@gmail.com` })
    }, 1000)
}

function fetchuserdetails(username, callback) {
    console.log(`fetch user details : ${JSON.stringify(username)}`);
    return setTimeout(() => {
        callback(["o1", "o2", "o3"])
    }, 1000)
}

function fetchuserOrdes(orders, callback) {
    console.log(`fetch user orders ${orders}`);
    return setTimeout(() => {
        callback(`make payment for ${orders.length} orders`);
    }, 1000)
}

function doPayment(data, callback) {
    console.log(data)
    return setTimeout(() => {
        callback("Payment successfully done !!")
    }, 1000)
}

userLogin("srushti", function (userdata) {
    fetchuserdetails(userdata, function (orders) {
        fetchuserOrdes(orders, function (payment) {
            doPayment(payment, function (msg) {
                console.log(msg)
            })
        })
    })
})