import { Router } from "express";
import { login, logout, signup } from "../controllers/user.controller.js";

export const userrouter=new Router()

userrouter.route('/signup').post(signup)
userrouter.route('/login').post(login)
userrouter.route('/logout').post(logout)