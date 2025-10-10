import mongoose from "mongoose";
let isConnect=false;
const url=process.env.MONGO_URL
export  async function connectionDB(){
    if(isConnect){
        return
    }
    if(!url) return;
    try {
        await mongoose.connect(url);
    } catch (error) {
        console.log(error)
    }
}