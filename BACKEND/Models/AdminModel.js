import mongoose from "mongoose";
import { Schema } from "mongoose";

const adminSchema = Schema(
    {
        adminName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
            min: 6
        },
        email: {
            type: String,
            required: true,
            unique: true

        },
    },
    { timestamps: true }
)

export default mongoose.model('admin',adminSchema)