import { User } from "../models/userModel.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"


export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(401).json({
                message: "Invalid Data",
                success: "false"
            })
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
                success: "false"
            })
        }

        const isMatch = await bcryptjs.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
                success: "false"
            })
        }

        const tokenData = {
            id:user._id
        }

        const token = await jwt.sign(tokenData, "dkdiocvhwochwifnv", { expiresIn: "1d" })
        return res.status(200).cookie("token", token, { httpOnly: true }).json({
            message: `Welcome Back ${user.fullName}`,
            success: true
        })

    } catch (error) {
        console.log(error)
    }
}


export const Logout = async (req, res) => {
  return res.status(200).cookie("token", "" , {expires: new Date(Date.now()), httpOnly:true}).json({
    message:"User Logged Out Successfully",
    success: true
  })
}



export const register = async (req, res) => {

    try {
        const { fullName, email, password } = req.body

        if (!fullName || !email || !password) {
            return res.status(401).json({
                message: "Invalid Data",
                success: "False"
            })
        }

        const user = await User.findOne({ email })
        if (user) {
            return res.status(401).json({
                message: "This Email already exists",
                success: "false"
            })
        }

        const hashedPassword = await bcryptjs.hash(password, 16)

        await User.create({
            fullName,
            email,
            password: hashedPassword
        })
        return res.status(201).json({
            message: "Account created successfully",

        })

    } catch (error) {
        console.log(error)
    }

}
