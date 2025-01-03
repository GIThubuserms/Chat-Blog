import express from "express";
import {userrouter} from "./src/routes/user.route.js";
import mongoose from "mongoose";
import cors from 'cors'

const app = express();
app.use(cors({origin:"*"}))
app.use(express.json());
const dbname ="mongodb+srv://murtaza:murtaza123@cluster0.kll2d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const dbpass = "test";
(async () => {
  try {
    const connectionInstance = await mongoose.connect(`${dbname}${dbpass}`);
    if(!connectionInstance) throw new Error('Db connection error')
     console.log('Db connected');
  } catch (error) {
    console.log("Db connection error");
  }
})();

console.log("testing");


app.use("/api/v1/user", userrouter);

app.listen(4000, (req, res) => {
  console.log("App listening");
});
