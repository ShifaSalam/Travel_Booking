const express=require('express')
const userController=require('../Controllers/userController')
const router=express.Router()
const multerconfig=require('../Middlewares/multerMiddleware')
const tourController=require('../Controllers/tourController')
const jwtMiddle=require('../Middlewares/jwtMiddleware')
const reviewController=require('../Controllers/reviewController')
const bookingController=require('../Controllers/bookingController')


// __ADMIN SIDE__

router.post('/create-tour',multerconfig.single('image'),tourController.createTour)
router.get('/all-tours',tourController.allTours)
router.put('/edit-tours/:tid',multerconfig.single('image'),tourController.editTours)
router.delete('/delete-tours/:tid',tourController.removeTours)

router.get('/all-booking',bookingController.allBooking)
router.delete('/cancel-booking/:bid',bookingController.cancelBooking)

router.get('/allusers',userController.allUsers)


// __CLIENT SIDE__

router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)

router.get('/all-usertours',jwtMiddle,tourController.allTours)
router.get('/home-tours',tourController.homeTours)
router.get('/single-tour/:tid',jwtMiddle,tourController.specificTours)

router.post('/add-review/:tid',jwtMiddle,reviewController.createReview)
router.get('/single-tour/:tid/reviews',jwtMiddle,reviewController.specificTourReviews)

router.post('/addphoto/:tid',multerconfig.array('photo',15),tourController.addPhoto)
router.get('/allphotos',tourController.allPhotos)

router.post('/addbooking',bookingController.createBooking)
router.get('/userBooking',bookingController.userBookings)


module.exports=router

