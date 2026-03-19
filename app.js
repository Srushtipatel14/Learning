const crypto=require("crypto");

for(let i=0;i<10;i++){
    console.time(`task ${i}`)
    crypto.pbkdf2("pass",'salt',5000000,64,"sha512",()=>{
        console.timeEnd(`task ${i}`)
    })
}