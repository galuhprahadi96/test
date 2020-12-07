const helper = require("../helper");
require("dotenv").config();

module.exports = {
  validation: function (req, res, next) {
    const { name, email, age } = req.body;

    if (name !== "" && email !== "" && age !== "") {
      next();
    } else {
      helper.response(res, 422, { message: "data validation not passed" });
    }
  },
};
