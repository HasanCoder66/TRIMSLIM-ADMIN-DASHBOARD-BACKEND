import express from 'express'
import {verifyToken} from '../Utils/verifyToken.js'
import {
    register, 
    login,
    // deleteAuth,
    // getAuth
} from '../Controllers/authController.js'
const authRoute = express.Router()

authRoute.post('/register', register)
authRoute.post('/login', login)         //verifyToken,
// authRoute.post('/delete', deleteAuth)
// authRoute.post('/getAuth', getAuth)

export default authRoute