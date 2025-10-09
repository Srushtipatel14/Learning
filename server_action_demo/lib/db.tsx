import mongoose from "mongoose";
let isConnect=false;
const url=process.env.MONGO_URL;

export default async function connectDB(){
    if(isConnect){
        return
    }
    if( !url) return;
    try {
        await mongoose.connect(url);
        isConnect=true;
    } catch (error) {
        console.log(error)
    }
}