import express from "express"
import {createKyc, getOneKyc} from "../controllers/kyc.controller.js"
import { authentication } from "../middlewares/auth.middleware.js";

const route = express.Router();

route.post("/kyc", authentication, createKyc);
route.get("/kyc", getOneKyc);


export default route;
