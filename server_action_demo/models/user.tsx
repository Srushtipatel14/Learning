import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:String,
    email:String
});

export default mongoose.models.users || mongoose.model("user",UserSchema)