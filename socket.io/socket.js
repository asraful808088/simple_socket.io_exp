const { Server } = require("socket.io");
function initSocket({ httpServer }) {
  const io = new Server(httpServer);
  const user = {};
  io.on("connection", (socket) => {
    socket.on("userid", (data) => {
      user[socket.id] = data.userid;
      console.log(`user connect id:${data.userid}`);
    });
    socket.on("disconnect", () => {
      console.log(`user disconnect id :${user[socket.id]}`);
    });
  });
}

module.exports = { initSocket };
