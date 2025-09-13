// //removing all zeros from the array without using any iterator method

const { resolve } = require("path");

// const a=[1,2,0,3,0,4,0,5,0,6,7,8,0,0,9];
// let result=[];

// function val(arr){
//     const temp=arr;
//     if(arr.length===0){
//         return result;
//     }
//     else{
//         const val1=temp.slice(0,1)
//         const v=temp.slice(1)
//         if(val1[0]!==0){
//             result.push(val1[0]);
//         }
//         return val(v)
//     }
// }

// console.log(val(a));


// const a=[1,2,3]
// const b=a;
// b.push(4)
// console.log(a)

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p1 resolve")
    },1000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p2 resolve")
    },3000)
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p3 resolve")
    },5000)
})

const p=[p1,p2,p3];

Promise.any(p)
.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))