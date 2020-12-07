const express = require("express");
const Route = express.Router();

const {
  getUser,
  postUser,
  patchUser,
  deleteUser,
} = require("../controller/user");
const { validation } = require("../middleware/validation");

Route.get("/", getUser);
Route.post("/add", validation, postUser);
Route.patch("/:id", patchUser);
Route.delete("/:id", deleteUser);

module.exports = Route;
