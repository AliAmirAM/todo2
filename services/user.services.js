const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

class UserServices {
  static async registerUser(email, password) {
    try {
      const createUser = new UserModel({ email, password });
      return await createUser.save();
    } catch (err) {
      throw err;
    }
  }
  static async checkUser(email) {
    try {
      return await UserModel.findOne({ email });
    } catch (err) {
      throw err;
    }
  }

  static async generateToken(tokenData, secreteKey, jwt_expire) {
    return jwt.sign(tokenData, secreteKey, { expiresIn: jwt_expire });
  }
}

module.exports = UserServices;
