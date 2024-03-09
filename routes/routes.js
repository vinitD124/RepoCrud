const express = require("express")
const router = express.Router()


const {addUser} = require("../controllers/addUser")
const {getUser} = require("../controllers/getUser")

router.post("/addUser",addUser)
router.get("/getUser",getUser)


module.exports = router