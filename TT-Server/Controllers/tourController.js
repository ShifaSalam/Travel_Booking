const tours = require('../Models/tourModel')

// To Create New Tours

exports.createTour = async (req, res) => {
    const { packageName, state, description, rate, maxGroupSize,reviews } = req.body
    const image = req.file.filename
    // console.log( packageName, state, description, rate, maxGroupSize,reviews,image)
    try {
        const newTour=new tours({
            packageName, state, description, rate, maxGroupSize,reviews,image
        })
        await newTour.save()
        res.status(200).json(newTour)
    } catch (err) {
        console.log(err)
        res.status(401).json(err)
    }
}


// to get all tours

exports.allTours = async (req, res) => {
    const search=req.query.search
    console.log(search)
    try {
        const query={
            state:{$regex:search,$options:'i'}
        }
        const result = await tours.find(query).populate('reviews')
        if (result) {
            res.status(200).json(result)
        }
        else {
            res.status(401).json("No Projects Available !")
        }
    }
    catch (err) {
        console.log(err)
        res.status(406).json(err)
    }
}

// home tours
exports.homeTours = async (req, res) => {
    try {
        const result = await tours.find().limit(3).populate('reviews')
        if (result) {
            res.status(200).json(result)
        }
        else {
            res.status(401).json("No Tours Available !")
        }
    }
    catch (err) {
        console.log(err)
        res.status(406).json(err)
    }
}

// edit tour packages

exports.editTours = async (req, res) => {
    const { packageName, state, description, rate, maxGroupSize,image } = req.body
    const userId = req.payload
    const tourImage = req.file ? req.file.filename : image
    const { tid } = req.params
    try {
        const updateTour = await tours.findByIdAndUpdate({ _id: tid },
            { packageName, state, description, rate, maxGroupSize,image, userId }, { new: true })
        await updateTour.save
        res.status(200).json(updateTour)
    }
    catch (err) {
        console.log(err)
        res.status(406).json(err)
    }

}

// delete tour packages

exports.removeTours = async (req, res) => {
    const { tid } = req.params
    try {
        const result = await tours.findByIdAndDelete({ _id: tid })
        res.status(200).json(result)
    }
    catch(err){
        console.log(err)
        res.status(404).json(err)
    }
}