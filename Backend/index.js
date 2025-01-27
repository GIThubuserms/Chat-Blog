import express, { urlencoded } from "express";
import { userrouter } from "./src/routes/user.route.js";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { messagerouter } from "./src/routes/message.route.js";
import { createServer } from "http";
import { Server } from "socket.io";
import { dir, log } from "console";
import path from "path";

const app = express();
const server = createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "https://chat-blog-1k90.onrender.com/",
    methods: ["GET", "POST"],
  },
});

export const getrecieversocketid=(reciverMongodbid)=>{
return users[reciverMongodbid]
}

let users = {};




io.on("connection", (socket) => {

  console.log('Client Conected '+socket.id);
  
  users[socket.handshake.query.userId] = socket.id;

  io.emit("onlineusers", Object.keys(users));
  
  socket.to().emit('sendMessage',)

  socket.on("disconnect", () => {
    console.log("Client Disconnected " + socket.id);
    delete users[socket.handshake.query.userId]
    io.emit('updatedonlineuser',Object.keys(users))
  });
});

app.use(cors({ origin: "*" }));
app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.json());

const dbname =
  "mongodb+srv://murtaza:murtaza123@cluster0.kll2d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbpass = "test";

(async () => {
  try {
    const connectionInstance = await mongoose.connect(`${dbname}${dbpass}`);
    if (!connectionInstance) throw new Error("Db connection error");
    console.log("Db connected");
  } catch (error) {
    console.log("Db connection error");
  }
})();

app.use("/api/v1/user", userrouter);
app.use("/api/v1/message", messagerouter);

let node_env="production"
// code for deployment
if (node_env === "production") {
  const dirPath = path.resolve();
  app.use(express.static(path.join(dirPath, 'Frontend', 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(dirPath, 'Frontend', 'dist', 'index.html'));
  });
}


server.listen(5002, "0.0.0.0", (req, res) => {
  console.log("App listening");
});
