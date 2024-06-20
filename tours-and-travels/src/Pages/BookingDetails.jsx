import React,{useState,useEffect} from 'react'
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap'
import Booking from '../Components/Booking'
import { useParams } from 'react-router-dom'
import { SingleTour,getReview } from '../Services/allApis'
import base_url from '../Services/base_url'
function BookingDetails() {
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

    useEffect(() => {
        getData()

    }, [])

    console.log(tid)
    const getData = async () => {
        const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
        // console.log(header)
        const result = await SingleTour(tid, header)
        // console.log(result.data)
        const review = await getReview(tid, header)
        // console.log(result.data.reviews)
        if (result.status == 200) {
            setTours(result.data)
            // setAllReviews(result.data.reviews)
            setAverageRating()

        }
        else {
            console.log(result.response.data)
        }
        if (review.status == 200) {
            setAllReviews(review.data.rev)
            setAverageRating(review.data.averageRating)
        } else {
            console.log(review.response.data)
        }
    }

    console.log(allReviews)
    console.log(reviews)
    console.log(tours)
    console.log(averageRating)

    return (
        <>
            <section>
                <Container className='my-5'>
                    {/* {
                        loading && <h4 className='text-center pt-5'>Loading...............</h4>
                    }
                    {
                        error && <h4 className='text-center pt-5'>{error}</h4>
                    }
                    {
                        !loading && !error && */}
                    <div className='d-flex '>
                        <div className='w-75 h-100'>
                            <div className="h-100">
                                <img src={tours.image && `${base_url}/uploads/${tours.image}`} className='w-100 rounded' alt="" height={"500px"} />

                                <div className="border mt-4 p-3 h-100">
                                    <h4>{tours.packageName}</h4>
                                    <div className='d-flex align-items-center gap-5'>
                                        <span className='tour__rating d-flex  align-items-center gap-1'>
                                            <i class="fa-solid fa-star fa-2xs" style={{ color: '#ffc800' }}></i>{averageRating}
                                            {/* {totalRating === 0 ? (
                                                    "Not rated"
                                                ) : (
                                                    <span>({reviews?.length}) </span>
                                                )} */}
                                        </span>

                                        <span>

                                            {/* {address} */}
                                        </span>
                                    </div>
                                    <div className=" d-flex">
                                        <span className='me-5'><i class="fa-solid fa-location-dot"></i> {tours.state}</span>
                                        <span className='me-5'><i class="fa-solid fa-indian-rupee-sign fa-xs"></i> {tours.rate}/per person</span>
                                        {/* <span><i class="ri-map-pin-time-line" style={{ color: "var(--secondary-color)" }}></i> k/m</span> */}
                                        <span><i class="fa-solid fa-people-group fa-xs"></i> Maximum of {tours.maxGroupSize} People</span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{tours.description}</p>
                                </div>

                                
                            </div>
                        </div>

                        <div className='w-50 ms-5' >
                            <Booking tour={tours} avgRating={averageRating} allReviews={allReviews}/>
                        </div>
                    </div>

                        {/*WWWWWWWWWWWWWWWWWWWWW TOUR REVIEW START WWWWWWWWWWWWWWWWWWWWWWWWW*/}
                        <div className="border mt-5 p-3 m-auto w-50">
                                    <h4>Reviews ({allReviews?.length}) </h4>

                                    <Form >
                                        <div className='d-flex align-items-center gap-3 mb-3 rating__group'>
                                            <span style={{ color: '#ffc800' }}>
                                                1 <i class="fa-solid fa-star fa-2xs" ></i>
                                            </span>
                                            <span style={{ color: '#ffc800' }}>
                                                2 <i class="fa-solid fa-star fa-2xs" ></i>
                                            </span>
                                            <span style={{ color: '#ffc800' }}>
                                                3 <i class="fa-solid fa-star fa-2xs" ></i>
                                            </span>
                                            <span style={{ color: '#ffc800' }}>
                                                4 <i class="fa-solid fa-star fa-2xs"></i>
                                            </span>
                                            <span style={{ color: '#ffc800' }}>
                                                5 <i class="fa-solid fa-star fa-2xs"></i>
                                            </span>
                                        </div>

                                    </Form>

                                    <ListGroup>
                                        {
                                            allReviews.length>0?
                                            allReviews.map(item=>(
                                                <div className="my-4 border rounded-4">
                                            <div className='w-100'>
                                                <div className='d-flex align-items-center justify-content-between pe-3'>
                                                    <div className='d-flex justify-content-around w-25'>
                                                        <div>
                                                            <i class="fa-regular fa-user"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className=''>{item.username}</h5>
                                                            <p> {new Date(item.createdAt).toLocaleDateString('en-IN', {
                                                                    month: 'long',
                                                                    day: 'numeric',
                                                                    year: 'numeric'
                                                                })}</p>
                                                        </div>
                                                    </div>
                                                    <span style={{marginTop:'-13px'}}>
                                                        {item.rating} <i class="fa-solid fa-star fa-2xs" style={{ color: '#ffc800' }}></i>
                                                    </span>
                                                </div>
                                                <h5 className='' style={{marginLeft:'80px'}}>{item.reviewText}</h5>
                                            </div>
                                        </div>
                                            )):
                                            <h3>Reviews has'nt been added yet</h3>
                                        }
                                    </ListGroup>
                                </div>

                </Container>
            </section>
        </>
    )
}

export default BookingDetails