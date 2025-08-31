//call back example


/*
1.user login
2.fetch user details
3.fetch user orders
4. do payment
5. payment success
*/


function userlogin(username, callback) {
    console.log(`user logged in with username ${username}`);
    setTimeout(() => {
        callback(username)
    }, 1000)
}

function fetchUserDetails(username, callback) {
    console.log(`fetching user details for username ${username}`);
    setTimeout(() => {
        callback({ user: username, email: `${username}@gmail.com` })
    }, 1000)
}

function fetchuserorders(username, callback) {
    console.log(`fetching orders for user ${username.user}`);
    setTimeout(() => {
        callback(["order1", "order2", "order3"])
    }, 1000)
}

function paymentSuccess(orders, callback) {
    console.log(`user orders ${orders}`)
    setTimeout(() => {
        callback("payment successfully done !!")
    }, 1000)
}

// function handlepayment(msg){
//     console.log(msg)
// }

// function handleorders(orders){
//     paymentSuccess(orders,handlepayment)
// }

// function handleuser(username){
//     fetchuserorders(username,handleorders)
// }

// function handlelogin(username){
//     fetchUserDetails(username,handleuser)
// }

userlogin("srushti", function (username) {
    fetchUserDetails(username, function (user) {
        fetchuserorders(user, function (orders) {
            paymentSuccess(orders, function (msg) {
                console.log(msg)
            })
        })
    })
})