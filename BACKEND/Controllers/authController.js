import bcryptjs from "bcryptjs";
import User from '../Models/UserModel.js'
import { createError } from "../Utils/error.js";
import jwt from 'jsonwebtoken'

const { genSalt, hash } = bcryptjs

//create register controller ===>
export const register = async (req, res, next) => {
    // console.log(req.body, 'req.body ====>')
    // console.log(req.body.username, 'req.body.username ====>')
    // console.log(req.body.email, 'req.body.email ====>')
    // console.log(req.body.password, 'req.body.password ====>')

    try {
        const salt = await genSalt(12)
        const hashedPassword = await hash(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        // console.log(newUser)


        //REMOVING CRITICAL INFO FROM THE DATA TO SEND THE RESPONSE
        const { password, ...others } = newUser._doc

        await newUser.save()
        let message = "User Create Successfully"
        res.status(200).json({
            status: "Success",
            message: message,
            data: others
        })
    } catch (error) {
        next(createError(error.status,error.message))
    }
}



//create login controller ===>
export async function login(req, res, next) {
    try {
        const user = await User.findOne({ email: req.body.email });
        console.log(user);
        if (!user) {
            // next(404, "User not found")
            next(createError(404, `User not found`));   //${message}
            return;
        }
        const isCorrect = await bcryptjs.compare(req.body.password, user.password);
        if (!isCorrect) {
            // next(400, "Incorrect email or password")
            next(createError(400, "Incorrect email or password"));
            return;
        }
        const token = jwt.sign({ user }, process.env.JWT, { expiresIn: "24h" });
        const { password, ...other } = user._doc;

        let message = "User sign in successfully";
        

        res.status(200).send({
            status: "Success",
            message: message,
            data: other,
            access_token: token,
        });
    } catch (error) {
        // next(error.status, error.message)
        next(createError(error.status, error.message));
    }
}



//create updateUser controller ===>
export const updateUser = async (req, res, next) => {

    try {
        const userId = req.params.userId
      const updateUser = await User.findByIdAndUpdate(userId, { $set: req.body }, { new: true })

      if (!updateUser) {
        return next(createError(404, 'User not found'));
    }

      res.status(200).json({
        status: 'success',
        message: "User Updated Successfully",
        data : updateUser
      })


    } catch (error) {
        next(createError(error.status || 500, error.message || "Server Error"));
    }
}


export const deleteUser = async (req, res, next) => {
try {
    const userId = req.params.userId
    const deleteUser = await User.findByIdAndDelete(userId)

    res.status(200).json({
        status : "success",
        message : "User Deleted Successfully",
    })
} catch (error) {
    next(createError(error.status, error.message))
}
}


export const getUser = async (req, res, next) => {
try {
    const userId = req.params.userId
    const getUser = await User.findById(userId )
    res.status(200).json({
        status:"Success",
        message: " Single User Found",
        data : getUser
    })
} catch (error) {
    next(createError(error.status, error.message))
}
}







// //=========================== USER FORGOT PASSWORD ====================//
// //localhost:8800/api/auth/login
// export async function forgotPassword(req, res, next) {
//     try {
//         const { email } = req.body;
//         if (email) {
//             const user = await User.findOne({ email: email });
//             // console.log(user)
//             if (user) {
//                 const secret = user._id + process.env.JWT;
//                 const token = jwt.sign({ secret }, process.env.JWT, {
//                     expiresIn: "30m",
//                 });
//                 const link = `http:localhost:8800/api/auth/resetpassword/usertoken/${token}`;
//                 const transport = nodemailer.createTransport({
//                     service: "gmail",
//                     auth: {
//                         user: process.env.NODEMAILER_USER,
//                         pass: process.env.NODEMAILER_PASS,
//                     },
//                 });

//                 const mailOptions = {
//                     from: process.env.EMAIL_FROM,
//                     to: process.env.EMAIL_TO,
//                     subject: "reset password link",
//                     text: `Please click on the following link ${link} to reset your password`,
//                 };

//                 transport.sendMail(mailOptions, (err, info) => {
//                     if (err) {
//                         console.log(err.message);
//                         return res.status(400).send({
//                             status: "Failed",
//                             message: err.message,
//                         });
//                     } else {
//                         console.log("email send" + info.response);
//                         return res.status(200).send({
//                             status: "Success",
//                             message: "Reset password link generated",
//                         });
//                     }
//                 });
//             }
//         } else {
//             console.log("no user found");
//         }
//     } catch (error) {
//         next(createError(error.status, error.message));
//     }
// }