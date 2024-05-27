import {User} from '../model/user-model.js'
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const registerController = async () => {
  try {
    const { userName, email, password, phone, address } = req.body;
    //validation
    if (!userName || !email || !password || !phone || address) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All fields",
      });
    }
    //chech user
    const userExisting = await User.findOne({ email });
    if (userExisting) {
      return res.status(500).send({
        sucess: false,
        message: "Email is already existing Please login",
      });
    }
    //hash password
    var salt = bcrypt.genSalt(10);
    var hashPassword = await bcrypt.hash(password, salt);
    //create user
    const user = await User.create({
      userName,
      password: hashPassword,
      email,
      phone,
      address,
    });
    res.status(201).send({
      sucess: true,
      message: "Successfully Registered",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In register API",
    });
  }
};

//auth login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please provide Email or Password",
      });
    }

    //chech user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: "false",
        message: "User  not found",
      });
    }

    //check user password || compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "invalid credentails",
      });
    }
    //token
    //enc
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETKEY, {
      expiresIn: "7d",
    });
    res.status(200).send({
      sucess: true,
      token,
      message: "Login successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in login API",
    });
  }
};
