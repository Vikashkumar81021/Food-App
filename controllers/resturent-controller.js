import { resturentModel } from "../model/resturentModel";

export const restrurentController = async (req, res) => {
  try {
    const {
      tittle,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;
    //validation
    if(!tittle || coords){
    return res.status(500).send({
        success:false,
        message:"Please Provide tittle and coords"
    })
    }
    const newResturent=new  resturentModel({ tittle,
        imageUrl,
        foods,
        time,
        pickup,
        delivery,
        isOpen,
        logoUrl,
        rating,
        ratingCount,
        code,
        coords})
      await  newResturent.save()
      res.status(201).send({
        success:true,
        message:"New Resturent created successfully"
      })
  } catch (error) {
    console.log(error);
    res.statrus(500).send({
      success: false,
      message: "Error in create  resturent API",
      error,
    });
  }
};
