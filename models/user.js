import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email:{
        type: String,
        unique: [true, 'Email already Exists !!'],
        required: [true, 'Email is required!!']
    },
    username: {
        type: String,
        required: [true, 'User Name is required !!']
    },
    image: {
        type: String
    }
})

const User =models.User || model("User", userSchema);

export default User;