import { Schema } from "mongoose";
import mongoose from "mongoose";
const userSchema = Schema({
    username : {
        type : String
    },
    email : {
        type : String,required: true,
        unique: true,
    },
    password : {
        type : String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default : false
    },
    
},
{ timestamps: true }
)

export default mongoose.model('User', userSchema);