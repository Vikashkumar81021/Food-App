import { User } from "../model/user-model.js";
import bcrypt from "bcryptjs";
export const getUser = async (req, res) => {
  try {
    const user = await User.findByid({ _id: req.body.id });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found ",
        user,
      });
    }
    res.status(200).send({
      success: true,
      message: "User crerated successfully",
    });
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "Error in Get userApi",
      error,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByid({ _id: req.body.id });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }
    const { userName, phone, address } = req.body;
    if (userName) user.userName = userName;
    if (phone) user.phone = phone;
    if (address) user.address = address;
    await user.save();
    res.status(200).send({
      success: true,
      message: "user update successfully ",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in Api update",
      error,
    });
  }
};

export const updatePassword = async (req, res) => {
  try {
    //find user
    const user = await User.findById({ _id: req.body.id });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    //get password
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || newPassword) {
      return res.status(500).send({
        success: false,
        message: "Please provide oldPassword and newPassword",
      });
    }
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "invalid old Password",
      });
    }
    var salt = bcrypt.genSalt(10);
    var hashPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashPassword;
    await user.save();
    res.status(200).send({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Password update",
    });
  }
};

export const deleteProfile = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Your account has been deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in delete account",
    });
  }
};
