import mongoose from "mongoose";

export const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.MongoURL);
    console.log(`database connection successfully ${mongoose.connection.host}`);
  } catch (error) {
    console.log("database connection is error");
  }
};
