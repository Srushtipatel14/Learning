const crypto=require("node:crypto");

for(let i=0;i<10;i++){
    console.time(`time ${i}`)
    crypto.pbkdf2("pass","salt",5000000,64,"sha512",()=>{
        console.timeEnd(`time ${i}`)
    })
}