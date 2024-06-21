const reviews = require('../Models/reviewModel')
const tours = require('../Models/tourModel')


// to add reviews
exports.createReview = async (req, res) => {
    const { tid } = req.params
    const { username, reviewText, rating } = req.body

    try {
        const newReview = new reviews({ ...req.body, date: new Date() })
        await newReview.save()
        await tours.findByIdAndUpdate(tid, {
            $push: { reviews: newReview._id }
        }, { new: true })
        res.status(200).json(newReview)
        console.log(req.body)
    }
    catch (err) {
        res.status(400).json(err)
        console.log(err)
    }
}


// to get specific tour reviews
exports.specificTourReviews = async (req, res) => {
    const { tid } = req.params

    try {
        const result = await tours.findById({ _id: tid }).populate('reviews')
        if (result) {
            const rev = result.reviews;
            const totalReviews = rev.length;
            const sumRatings = rev.reduce((sum, review) => sum + review.rating, 0);
            const averageRating = totalReviews === 0 ? 0 : (sumRatings / totalReviews).toFixed(1);
            // console.log(averageRating)
            res.status(200).json({ rev, averageRating })
        }
        else {
            res.status(401).json("No Reviews Available !")
        }
    }
    catch (err) {
        console.log(err)
        res.status(406).json(err)
    }
}