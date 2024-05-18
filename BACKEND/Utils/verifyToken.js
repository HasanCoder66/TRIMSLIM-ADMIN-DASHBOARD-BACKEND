import jwt from 'jsonwebtoken'
import { createError } from './error.js'

export const verifyToken = (req, res, next) => {
    const token = req.cookie.access_token;
    console.log(token)

    if (!token) {
        return next(createError(401, 'You are not Authenticated'))
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) {
            return next(createError(403, 'Invalid Error'))
        }
        req.user = user
        console.log(user, "====>>>> req.user from token")

        next()
    })


}