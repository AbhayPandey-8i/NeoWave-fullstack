import express from "express"
import dotenv from "dotenv"
import databaseConnection from "./src/utils/database.js"
import cookieParser from "cookie-parser"
import userRoute from "./src/routes/userRoute.js"

databaseConnection()

dotenv.config({
    path:".env"
})

const app = express()

//Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

//Api
app.use("/api/v1/user", userRoute)




app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`)
})