const express=require('express')
const userController=require('../Controllers/userController')
const router=express.Router()
const multerconfig=require('../Middlewares/multerMiddleware')
const tourController=require('../Controllers/tourController')
const jwtMiddle=require('../Middlewares/jwtMiddleware')
const reviewController=require('../Controllers/reviewController')

router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.post('/create-tour',multerconfig.single('image'),tourController.createTour)
router.get('/all-tours',tourController.allTours)
router.put('/edit-tours/:tid',multerconfig.single('image'),tourController.editTours)
router.delete('/delete-tours/:tid',tourController.removeTours)
router.get('/all-usertours',jwtMiddle,tourController.allTours)
router.get('/home-tours',tourController.homeTours)
router.post('/create-review/:tid',jwtMiddle,reviewController.createReview)


module.exports=router

