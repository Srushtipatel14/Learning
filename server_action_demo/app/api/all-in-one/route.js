import User from "@/models/user";
import connectDB from "@/lib/db";

export const actions = {
    async createUser(formdata) {
        "use server";
        await connectDB();
        const name=formdata.get("name")
        const email=formdata.get("email")
        await User.create({name,email})
    },
     async updateUser(formdata) {
        "use server";
        await connectDB();
        const name=formdata.get("name")
        const id=formdata.get("id")
        await User.findByIdAndUpdate(id,{name})
    }
}