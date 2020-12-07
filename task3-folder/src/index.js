const route = require("express").Router();

const user = require("./routes/user");

route.use("/user", user);

module.exports = route;
