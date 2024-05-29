import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    UserName: {
        type: string,
        required: true,
        unique: true
    },
    email: {
        type: string,
        required: true,
        unique: true
    },
    password: {
        type: string,
        required: true,
        unique: true
    },
    role: {
        type: [string],
        required: true,
        enum: ["user", "admin", "superadmin"],
        default: ["user"]
    }
})

const UserSchemaType = mongoose.model("UserSchemaType", UserSchema);
export default UserSchemaType;