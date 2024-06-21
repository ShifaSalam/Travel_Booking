const bookings = require('../Models/bookingModel')


// Tour Booking
exports.createBooking = async (req, res) => {
    const { packageName, email, fullName, phone, guestSize, bookAt } = req.body
    try {
        const newBooking = new bookings({ packageName, email, fullName, phone, guestSize, bookAt: new Date(bookAt) })
        await newBooking.save()
        res.status(200).json(newBooking)
        console.log(newBooking)
    }
    catch (err) {
        res.status(400).json(err)
        console.log(err)
    }
}


// Get Clients
exports.allBooking = async (req, res) => {

    try {
        const result = await bookings.find()
        if (result) {
            res.status(200).json(result)
        }
    } catch (err) {
        res.status(400).json(err)
    }
}


// Cancel booked tours
exports.cancelBooking = async (req, res) => {
    const { bid } = req.params
    try {
        const result = await bookings.findByIdAndDelete({ _id: bid })
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
}