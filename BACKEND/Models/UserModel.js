import { Schema } from "mongoose";
import mongoose from "mongoose";
const userSchema = Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true,
        unique: true,
    },
    password : {
        type : String,
        required: true,
        min: 6
    }
   
    
},
{ timestamps: true }
)

export default mongoose.model('User', userSchema);