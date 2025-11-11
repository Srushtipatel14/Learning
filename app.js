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

function fetchuserOrders(orders) {
    return new Promise((resolve) => {
        console.log(`fetch user Orders : ${orders}`);
        setTimeout(() => {
            resolve(`payment successfully done`);
        }, 1000);
    });
}

function paymentSuccess(msg) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(msg)
        })
    },1000)
}

async function fetchdetails(){
    try {
        const details=await userLogin("srushti")
        const orders=await fetchuserdetails(details);
        const msg=await fetchuserOrders(orders)
        const res=await paymentSuccess(msg)
        console.log(res)
        
    } catch (error) {
        console.log(error)
    }
}

fetchdetails()