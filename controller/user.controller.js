const UserServices = require("../services/user.services");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const successRes = await UserServices.registerUser(email, password);
    res.json({ status: true, success: "User registered successfully" });
  } catch (err) {
    throw err;
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserServices.checkUser(email);

    if (!user) {
      throw new Error("User not registered");
    }

    const isMatch = await user.comparePassword(password);
    if (isMatch === false) {
      throw new Error("password invalid");
    }

    let tokenData = { _id: user._id, email: user.email };
    const token = await UserServices.generateToken(
      tokenData,
      "secreteKey",
      "1h"
    );
    res.status(200).json({ status: true, token: token });
  } catch (err) {
    throw err;
    next(err);
  }
};
