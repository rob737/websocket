const path = require("path");
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const socketio = require("socket.io");
const io = socketio(server);

const port = process.env.port || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

let count = 0;
io.on("connection", (socket) => {
  console.log("New web socket connection detected ...");
  socket.emit("countUpdated", count);
  socket.on("increment", () => {
    count++;
    //socket.emit("countUpdated", count);
    io.emit("countUpdated", count);
  });
});

server.listen(port, () => console.log(`Server started on port ${port}`));
