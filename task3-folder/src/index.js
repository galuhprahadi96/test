const route = require("express").Router();

// import route disini
const user = require("./routes/user");

// buat middle disini
route.use("/user", user);

module.exports = route;
