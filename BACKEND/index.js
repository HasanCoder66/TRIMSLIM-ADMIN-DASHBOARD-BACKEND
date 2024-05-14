import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import authRoute from './Routes/authRoute.js';
import bodyParser from 'body-parser';



dotenv.config()
const app = express()

//Port defined in env if in no one in .env then 8500 is executed.. ====>
const PORT = process.env.PORT || 8500

// Connect to MongoDB =====> 
const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Backend Connected")
        })
        .catch((error) => {
            throw error
        })
}

//Reading in json file for this body parser =====>
app.use(bodyParser.json());

// middlewares =====>
app.use('/api/auth', authRoute)


//Error Middleware ====> 

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!";
    const errorStack = err.stack || "No stack trace available";


    console.error('error stack', errorStack)
    console.error('error Message', errorMessage)

    return res.status(errorStatus).json({
        status: errorStatus,
        message: errorMessage,
        stack: errorStack
    })
})
// SERVER LISTENING ON THE PORT
app.listen(PORT, () => {
    connectDB();
    console.log(`Server listening on this ${PORT}`);
});




