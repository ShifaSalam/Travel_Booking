import React, {  useEffect, useState } from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
// import Booking from '../Components/Booking'
import { getReview } from '../Services/allApis'
import { Link, useParams } from 'react-router-dom'
import { SingleTour, addReviews } from '../Services/allApis'
import base_url from '../Services/base_url'
import Header from '../Components/Header'
import AddPhoto from '../Components/AddPhoto'
import { toast } from 'react-toastify'
// import { addReviewResponseContext } from '../Context Api/Contextapi'
function TourDetails() {

    // const{addReviewResponse, setAddReviewResponse}=useContext(addReviewResponseContext)
    const [addStatus,setAddStatus]=useState({})

    const [tours, setTours] = useState([])
    const { tid } = useParams()
    const user = sessionStorage.getItem("username")
    const [reviews, setReviews] = useState({
        username: user, reviewText: "", rating: ""
    })
    const [allReviews, setAllReviews] = useState({
        username: user, reviewText: "", rating: ""
    })
    const [averageRating, setAverageRating] = useState(0);

    const [photos, setPhotos] = useState("")


    useEffect(() => {
        getData()

    }, [addStatus])

    // console.log(tid)
    const getData = async () => {
        const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
        const result = await SingleTour(tid, header)
        // console.log(result.data)
        const review = await getReview(tid, header)
        // console.log(result.data.reviews)
        if (result.status == 200) {
            setTours(result.data)
            setPhotos(result.data.photo)
        }
        else {
            console.log(result.response.data)
        }
        if (review.status == 200) {
            setAllReviews(review.data.rev)
            setAverageRating(review.data.averageRating)
            // setAddStatus(review)
        } else {
            console.log(review.response.data)
        }
    }

    const hndleAddReview = async () => {
        const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }

        const { username: user, reviewText, rating } = reviews
        const result = await addReviews(tid, reviews, header)
        if (!reviewText || !rating) {
            toast.warning("Give Rating & Message")
        } else {
            if (result.status == 200) {
                toast.success("Review added successfully!")
                setReviews({
                    reviewText: "", rating: ""
                })
            }
            else {
                toast.error(result.response.data)
            }
            console.log(result)
        }
    }
    // console.log(allReviews)
    // console.log(averageRating)
    // console.log(reviews)
    console.log('Tours:', tours)
    console.log(photos)


    return (
        <>
            <Header />
            <div>
                <div className='d-flex justify-content-center'>
                    <div className="mt-5" style={{ width: "1000px" }}>
                        <h2 className='text-center mb-3'>{tours.packageName}</h2>
                        <img src={tours.image && `${base_url}/uploads/${tours.image}`} className='w-100 rounded' alt="" height={"600px"} />

                        <div className="border mt-4 p-3">
                            <div className='d-flex justify-content-around'>
                                <span className='tour__rating d-flex  align-items-center gap-1'>
                                    <i class="fa-solid fa-star fa-2xs" style={{ color: '#ffc800' }}></i>{averageRating}
                                </span>

                                <span>
                                    <i class="fa-solid fa-users-line fa-lg"></i> Maximum of {tours.maxGroupSize} People
                                </span>
                            </div>
                            <div className=" my-2 d-flex justify-content-center">
                                <h4 className='me-5'><i class="fa-solid fa-location-dot"></i> {tours.state}</h4>
                            </div>
                            <h5>{tours.description}</h5>
                            <p></p>
                        </div>
                        <Link to={`/bookingdet/${tid}`} className='btn btn-info btn-lg w-50 mt-3' style={{ marginLeft: "250px" }}>Book Now !</Link>
                    </div>
                    <div md='6'>

                    </div>

                </div>
                <div className='m-5'>
                    <h2>Here is a glimpse of our Happy Travelers' Gallery...</h2>
                    <Row className='m-5'>
                        {
                            photos.length > 0 ?
                                photos.map(item => (
                                    <Col md='3' className='my-2'>
                                        <img src={item && `${base_url}/${item}`} width={'100%'} alt="tour-img" height={'300px'} />
                                    </Col>
                                )) :
                                <h3 className='text-center'>No Uploaded Photos</h3>
                        }
                    </Row>
                </div>
                <div className="border p-3 mt-4 m-auto w-50">
                    <h4>Reviews ({allReviews.length}) </h4>
                    <AddPhoto />

                    <div >
                        <div className='d-flex align-items-center gap-3 my-3 rating__group'>
                            <span style={{ color: '#ffc800' }} onClick={e => setReviews({ ...reviews, rating: 1 })}>
                                1 <i class="fa-solid fa-star fa-2xs" ></i>
                            </span>
                            <span style={{ color: '#ffc800' }} onClick={e => setReviews({ ...reviews, rating: 2 })}>
                                2 <i class="fa-solid fa-star fa-2xs" ></i>
                            </span>
                            <span style={{ color: '#ffc800' }} onClick={e => setReviews({ ...reviews, rating: 3 })}>
                                3 <i class="fa-solid fa-star fa-2xs" ></i>
                            </span>
                            <span style={{ color: '#ffc800' }} onClick={e => setReviews({ ...reviews, rating: 4 })}>
                                4 <i class="fa-solid fa-star fa-2xs"></i>
                            </span>
                            <span style={{ color: '#ffc800' }} onClick={e => setReviews({ ...reviews, rating: 5 })}>
                                5 <i class="fa-solid fa-star fa-2xs"></i>
                            </span>
                        </div>

                        <div className="border rounded w-50  d-flex justify-content-between mb-4">
                            <input className='border-0 w-100 p-2' type="text" placeholder='share your thoughts' onChange={e => setReviews({ ...reviews, reviewText: e.target.value })} />
                            <button className="btn btn-info" type='submit' onClick={hndleAddReview}>
                                Submit
                            </button>
                        </div>
                    </div>

                    <ListGroup className=''>
                        {
                            allReviews.length > 0 ?
                                allReviews.map(item => (
                                    <div className="my-4 border rounded-4">
                                        <div className='w-100'>
                                            <div className='d-flex align-items-center justify-content-between pe-3'>
                                                <div className='d-flex justify-content-around w-25'>
                                                    <div>
                                                        <i class="fa-regular fa-user"></i>
                                                    </div>
                                                    <div>
                                                        <h5 style={{ marginBottom: '-3px' }}>{item.username}</h5>
                                                        <p>{new Date(item.createdAt).toLocaleDateString('en-IN', {
                                                            month: 'long',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })}</p>
                                                    </div>
                                                </div>
                                                <span style={{ marginTop: '-13px' }}>
                                                    {item.rating} <i className="fa-solid fa-star fa-2xs" style={{ color: '#ffc800' }}></i>
                                                </span>
                                            </div>
                                            <h6 style={{ marginLeft: '80px' }}>{item.reviewText}</h6>
                                        </div>
                                    </div>
                                )) :
                                <h1>No Reviews</h1>
                        }
                    </ListGroup>
                </div>


            </div>
        </>
    )
}

export default TourDetails