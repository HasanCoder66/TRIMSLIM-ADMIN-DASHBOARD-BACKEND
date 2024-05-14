import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import authRoute from './Routes/authRoute.js';
import bodyParser from 'body-parser';



dotenv.config()
const app = express()
const PORT = process.env.PORT || 8500

app.use(bodyParser.json());

// middlewares =====>
app.use('/api/auth', authRoute)

// SERVER LISTENING ON THE PORT
app.listen(PORT, () => {
    connectDB();
    console.log(`Server listening on this ${PORT}`);
});


// Connect to DB 
const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Backend Connected")
        })
        .catch((error) => {
            throw error
        })
}

