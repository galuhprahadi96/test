const helper = require("../helper");
const {
  getUser,
  addUser,
  checkUserId,
  patchUser,
  deleteUser,
} = require("../model/m_user");

module.exports = {
  getUser: async (req, res) => {
    try {
      const dataUser = await getUser();
      if (dataUser.length < 1) {
        return helper.response(res, 200, "Data is empty");
      } else {
        return helper.response(res, 200, "Success get data user", dataUser);
      }
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },

  postUser: async (req, res) => {
    try {
      const { name, email, age } = req.body;
      const setData = {
        name,
        email,
        age,
      };

      const result = await addUser(setData);
      return helper.response(res, 200, "Success post data user", result);
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },

  patchUser: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, email, age } = req.body;
      const check = await checkUserId(id);
      if (check.length > 0) {
        const setData = {
          name,
          email,
          age,
        };
        const result = await patchUser(setData, id);
        return helper.response(res, 200, "Success update data user", result);
      } else {
        return helper.response(res, 400, `user id ${id} not found`);
      }
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const id = req.params.id;
      const check = await checkUserId(id);
      if (check.length > 0) {
        const result = await deleteUser(id);
        return helper.response(res, 200, "User Deleted", result);
      } else {
        return helper.response(res, 404, `User id : ${id} not found`);
      }
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
};
