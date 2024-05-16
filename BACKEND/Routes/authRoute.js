import express from 'express'
import {verifyToken} from '../Utils/verifyToken.js'
import {
    register, 
    login,
    updateUser,
    deleteUser,
    getUser
} from '../Controllers/authController.js'
const authRoute = express.Router()

authRoute.post('/register', register)
authRoute.post('/login',verifyToken, login)         
authRoute.put('/update/:userId', updateUser)         
authRoute.get('/getUser/:userId', getUser)
authRoute.delete('/delete/:userId', deleteUser)

export default authRoute