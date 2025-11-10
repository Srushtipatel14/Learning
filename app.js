// 1. user login
// 2. fetch user details
// 3. fetch user orders
// 4. make payement 
// 5. payment successfully done


function userLogin(username,callback){
    console.log(`user try to login with name : ${username}`);
    setTimeout(()=>{
        callback({uname:username,email:`${username}@gmail.come`})
    },1000)
}

function fetchuserdetails(details,callback){
    console.log(`user login successfully with name : ${details.uname} and email : ${details.email}`);
    setTimeout(()=>{
        callback(["order 1","order 2","oeder 3"])
    },1000)
}


function fetchuserOrders(orders,callback){
    console.log(`fetch user Orders : ${orders}`);
    setTimeout(()=>{
        callback(`payment successfully done`)
    },1000)
}


function paymentSuccess(msg){
    console.log(msg);
}

function handlePayment(msg){
    paymentSuccess(msg)
}

function handleUserDetails(orders){
    fetchuserOrders(orders,handlePayment)
}

function handleLogin(details){
    fetchuserdetails(details,handleUserDetails)
}

userLogin("Srushti",handleLogin)

