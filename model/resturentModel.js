import { type } from "express/lib/response";
import mongoose from "mongoose";

const resturentSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      required: [true, "Restrurent tittle is required"],
    },
    imageUrl: {
      type: String,
    },
    foods: {
      type: Array,
    },
    time: {
      type: String,
    },
    pickup: {
      type: Boolean,
      default: true,
    },
    delivery: {
      type: String,
      default: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    logoUrl: {
      type: String,
    },
    rating:{
        type:Number,
        default:1,
        min:1,
        max:5,
    },
    ratingCount:{type:String},
    code:{
        type:String
    },
    coords:{
        id:{type:String},
        latitude:{type:Number},
        latitudedelta:{type:Number},
        longtitude:{type:Number},
        longtitudedelta:{type:Number},
        address:{type:String},
        tittle:{type:string},
    }
  },
  { timestamps: true }
);

export const resturentModel = mongoose.model("Resturent", resturentSchema);
