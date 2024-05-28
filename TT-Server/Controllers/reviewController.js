const reviews=require('../Models/reviewModel')
const tours=require('../Models/tourModel')

exports.createReview=async(req,res)=>{
    const {tid} = req.params
    // console.log(req.params)
    const{packageName, state, description, rate, maxGroupSize,image,username,reviewText,rating}=req.body

    try {
        const newReview = new reviews({...req.body})
        await newReview.save()

        // after creating a new review we now update the reviews array of the tour
        await tours.findByIdAndUpdate(tid, { 
            $push: { reviews: newReview._id }
        }, {new:true})

        res.status(200).json(newReview)
        console.log(req.body)
    } catch(err){
        res.status(400).json(err)
        console.log(err)
    }
}