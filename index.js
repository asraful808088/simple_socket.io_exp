//server  environment
require("dotenv").config();
// import state
const { PORT, ipAddress } = require("./config/config");
const express = require("express");
const path = require("path");
const http = require("http");
const { initSocket } = require("./socket.io/socket");
// create state
const app = express();
const server = http.createServer(app);
//create socket.io
initSocket({ httpServer: server });
//file init
app.use(express.static(path.join(__dirname, "static")));
// routing
app.get("/", (req, res) => {
  res.sendFile("index.html");
});
server.listen(PORT, ipAddress, (err) => {
  if (!err) {
    console.log(`server start on ${PORT} || http://localhost:${PORT}`);
  } else {
    console.log("server start failed");
  }
});
