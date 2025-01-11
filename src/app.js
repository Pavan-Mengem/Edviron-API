import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// allow all cors requests
app.use(cors({origin: true, credentials: true}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import

import healthcheckRouter from "./routes/healthcheck.routes.js"
import transactionRouters from "./routes/transaction.routes.js"


//routes declaration
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/transactions", transactionRouters)


// http://localhost:8000/api/v1/users/register

export { app }