//promises example


/*
1.user login
2.fetch user details
3.fetch user orders
4. do payment
5. payment success
*/


function userlogin(username) {
    return new Promise((resolve, reject)=>{
        console.log(`user logged in with username ${username}`);
        setTimeout(() => {
            resolve(username)
        }, 1000)
    })
}

function fetchUserDetails(username) {
    return new Promise((resolve, reject)=>{
        console.log(`fetching user details for username ${username}`);
        setTimeout(() => {
            resolve({ user: username, email: `${username}@gmail.com` })
        }, 1000)
    })
}

function fetchuserorders(username) {
    return new Promise((resolve, reject)=>{
        console.log(`fetching orders for user ${username.user}`);
        setTimeout(() => {
            resolve(["order1", "order2", "order3"])
        }, 1000)
    })
}

function paymentSuccess(orders) {
    return new Promise((resolve, reject)=>{
        console.log(`user orders ${orders}`)
        setTimeout(() => {
            resolve("payment successfully done !!")
        }, 1000)
    })
}

userlogin("srushti")
.then((username)=>fetchUserDetails(username))
.then((user)=>fetchuserorders(user))
.then((orders)=>paymentSuccess(orders))
.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))