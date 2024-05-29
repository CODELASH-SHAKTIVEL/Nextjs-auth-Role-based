import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserTokenSchema = new Schema({
    userID:{
        type: Schema.Types.objectId,
        required:true
    },
     token:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires : 30*86400 
    }
})

const UserTokenSchemaType = mongoose.model("UserTokenSchemaType", UserTokenSchema);
export default UserTokenSchemaType;