const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/Routes");
const http = require("http");
const path = require("path");
const {Server} = require("socket.io");


// require("dotenv").config()

// app.use(cors());
// app.use(express.json());
// app.use("/api/auth", routes);

const app=express();
const server=http.createServer(app);
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
    // console.log("A new user has connected", socket.id);
    socket.on("user-message", (message) => {
        // console.log("A new user message  ", message);
        io.emit("message", message);
    })
});

app.use(express.static(path.resolve("./public")));
app.get("/", (req,res) => {
    return res.sendFile("/public/index.html");
})



// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// })
// .then(()=>{
//     console.log("DB Connc successfull");
// })
// .catch((err)=>{
//     console.log(err.message);
// })

server.listen(5000, () => console.log(`Server Started at PORT 5000`) );

// const server=app.listen(process.env.PORT, ()=>{
//     console.log(`Server is activated at PORT NUMBER = ${process.env.PORT}`);
// })