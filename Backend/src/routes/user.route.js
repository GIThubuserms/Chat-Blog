import { Router } from "express";
import { signup } from "../controllers/user.controller.js";

export const userrouter=new Router()

userrouter.route('/signup').post(signup)