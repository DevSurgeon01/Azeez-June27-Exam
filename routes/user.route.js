import express from "express"
import { authentication } from "../middlewares/auth.middleware.js"

const route =express.Router()
import {getUser, createUser, updateUser, deleteUser, loginUser} from "../controllers/user.controller.js"



//creating endpoints for the user database manipulation
route.get("/blog", authentication, getUser )

route.post("/blog", createUser)

route.put("/blog", updateUser)

route.delete("/blog", deleteUser)

route.post("/user-login", loginUser)


// module.exports = route
export default route

