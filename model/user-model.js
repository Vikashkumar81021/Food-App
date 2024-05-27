import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "userName is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  userType: {
    type: String,
    required: [true, "user type is required"],
    default: "client",
    enum: ["admin", "client", "vendor", "driver"],
  },
  profile:{
    type:String,
    default:"https://google.com"
  },
  
},{timestamps:true});
 


export const User = mongoose.model("User", userSchema);
