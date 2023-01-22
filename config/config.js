const { networkInterfaces } = require("os");
const PORT = process.env.PORT;
const ipAddress = ["127.0.0.1", "127.0.0.2"];
if (networkInterfaces().Ethernet) {
  for (let index = 0; index < networkInterfaces().Ethernet.length; index++) {
    if (networkInterfaces().Ethernet[index].family === "IPv4") {
      ipAddress.push(networkInterfaces().Ethernet[index].address);
    }
  }
}
module.exports = { PORT, ipAddress };
