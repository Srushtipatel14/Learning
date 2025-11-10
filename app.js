// 1. user login
// 2. fetch user details
// 3. fetch user orders
// 4. make payement
// 5. payment successfully done

function userLogin(username) {
    return new Promise((resolve) => {
        console.log(`user try to login with name : ${username}`);
        setTimeout(() => {
            resolve({ uname: username, email: `${username}@gmail.come` });
        }, 1000);
    });
}

function fetchuserdetails(details) {
    return new Promise((resolve) => {
        console.log(
            `user login successfully with name : ${details.uname} and email : ${details.email}`
        );
        setTimeout(() => {
            resolve(["order 1", "order 2", "oeder 3"]);
        }, 1000);
    });
}

function fetchuserOrders(orders, resolve) {
    return new Promise((resolve) => {
        console.log(`fetch user Orders : ${orders}`);
        setTimeout(() => {
            resolve(`payment successfully done`);
        }, 1000);
    });
}

function paymentSuccess(msg) {
    console.log(msg);
}

userLogin("Srushti")
    .then((details) => fetchuserdetails(details))
    .then((orders) => fetchuserOrders(orders))
    .then((msg) => paymentSuccess(msg))
    .catch((err) => console.log(err));
