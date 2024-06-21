
const mongoose=require('mongoose')

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    packageName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    phone:{
        type : String,
        required: true,
    },
    guestSize: {
        type: Number,
        required: true,
    },
    bookAt:{
        type: Date,
        required: true,
    }
  },
  { timestamps: true }
)

const bookings=mongoose.model('bookings',bookingSchema)

module.exports=bookings