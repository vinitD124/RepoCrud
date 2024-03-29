const express = require("express")
const dbConnect = require("../Backend/confg/database")
const routes = require("../Backend/routes/routes")
const cors = require("cors");
const app = express()
app.use(cors({ origin: "*" }));
app.use(express.json())
require("dotenv").config()
app.use("/api/v1", routes)



app.listen(process.env.PORT,()=>{
    console.log(`app started at ${process.env.PORT}`)
})





dbConnect()