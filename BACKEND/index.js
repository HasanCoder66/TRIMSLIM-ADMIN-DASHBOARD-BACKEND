import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = 8500

// SERVER LISTENING ON THE PORT
app.listen(PORT, () => {
    // connectDB();
    console.log(`Server listening on this ${PORT}`);
});


// Connect to DB 
// const connectDB = () => {
//     mongoose.connect(Mongo)
//         .then(() => {
//             console.log('Backend Connected')
//                 .catch((error) => {
//                     throw error
//                 })
//         })
// }

