import { Router } from "express";
import { alluser, login, logout, signup } from "../controllers/user.controller.js";
import { verifyuser } from "../middleweres/verifyuser.js";

export const userrouter=new Router()

userrouter.route('/signup').post(signup)
userrouter.route('/login').post(login)
userrouter.route('/logout').post(logout)
userrouter.route('/getuserprofile').get(verifyuser,alluser)