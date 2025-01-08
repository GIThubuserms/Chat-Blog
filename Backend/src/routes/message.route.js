import { Router } from "express";
import { getmessages, sendmessage } from "../controllers/message.controller.js";
import { verifyuser } from "../middleweres/verifyuser.js";

export const messagerouter = new Router();

messagerouter.route("/sendmessage/:recieverId").post(verifyuser,sendmessage);
messagerouter.route("/getmessage/:recieverId").post(verifyuser,getmessages);
