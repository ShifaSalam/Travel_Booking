const mongoose=require('mongoose')

const tourSchema = new mongoose.Schema(
    {
      packageName: {
        type: String,
        required: true,
        unique: true,
      },
      state: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      rate: {
        type: Number,
        required: true,
      },
      maxGroupSize: {
        type: Number,
        required: true,
      },
      photo:{
        type:[String]
      },
      reviews: [
        {
          type: mongoose.Types.ObjectId,
          ref: "reviews",
        },
      ]
    })

const tours=mongoose.model('tours',tourSchema)

module.exports=tours