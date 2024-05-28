import React, { useEffect, useState } from 'react'
import { Row, Col, Form, ListGroup } from 'react-bootstrap'
// import Booking from '../Components/Booking'
import { allUserTours } from '../Services/allApis'
import { Link, useParams } from 'react-router-dom'
function TourDetails() {
    const [tours,setTours]=useState([])
    const {_id}=useParams()
    const tour=tours.find(item=>item._id==_id)
    console.log(tours)


    useEffect(() => {
          getData()        
        
      }, [])
      console.log(tours)

    
      const getData = async () => {
        const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
        // console.log(header)
        const result = await allUserTours(header)
        console.log(result)
        if (result.status == 200) {
          setTours(result.data)
        }
        else {
          console.log(result.response.data)
        }
      }

    return (
        <>
            <Row>
                <Col md='6'>
                    <div className="w-100 mt-5" style={{ marginLeft: "190px" }}>
                    {/* {tour.packageName} */}
                        <h2>Munnar</h2>
                        {/* {tour.image && `${base_url}/uploads/${tour.image}`} */}
                        <img src='http://www.weather-forecast.com/system/images/2222/original/Munnar.jpg?1312999628' className='w-100 rounded' alt="" />

                        <div className="border my-4 p-3">
                            <div className='d-flex align-items-center gap-5'>
                                <span className='tour__rating d-flex  align-items-center gap-1'>
                                    <i class="fa-solid fa-star fa-2xs" style={{ color: '#ffc800' }}></i>4.2
                                </span>

                                <span>

                                </span>
                            </div>
                            <div className=" my-2 d-flex">
                                <span className='me-5'><i class="fa-solid fa-location-dot"></i> Kerala</span>
                            </div>
                            <h5>Description</h5>
                            {/* {tour.description} */}
                            <p></p>
                        </div>

                        {/*WWWWWWWWWWWWWWWWWWWWW TOUR REVIEW START WWWWWWWWWWWWWWWWWWWWWWWWW*/}
                        <div className="border p-3">
                            <h4>Reviews </h4>
                            <div style={{ marginLeft: "700px" ,marginTop:"-40px"}}>
                                <i class="fa-solid fa-camera-retro fa-2xl"></i>
                            </div>

                            <Form >
                                <div className='d-flex align-items-center gap-3 my-3 rating__group'>
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

                                <div className="border rounded w-50  d-flex justify-content-between mb-4">
                                    <input className='border-0 w-100 p-2' type="text" placeholder='share your thoughts' />
                                    <button className="btn btn-warning" type='submit'>
                                        Submit
                                    </button>
                                </div>
                            </Form>

                            <ListGroup className=''>

                                <div className="my-4 border rounded-4">
                                    <div className='w-100'>
                                        <div className='d-flex align-items-center justify-content-between pe-3'>
                                            <div className='d-flex justify-content-around w-25'>
                                                <div>
                                                    <i class="fa-regular fa-user"></i>
                                                </div>
                                                <div>
                                                    <h5 style={{ marginBottom: '-3px' }}>Shifa</h5>
                                                    <p> {new Date('01-18-2023').toLocaleDateString("india")}</p>
                                                </div>
                                            </div>
                                            <span style={{ marginTop: '-13px' }}>
                                                5 <i class="fa-solid fa-star fa-2xs" style={{ color: '#ffc800' }}></i>
                                            </span>
                                        </div>
                                        <h6 style={{ marginLeft: '80px' }}>Amazing tour</h6>
                                    </div>
                                </div>
                                <div className="my-4 border rounded-4">
                                    <div className='w-100'>
                                        <div className='d-flex align-items-center justify-content-between pe-3'>
                                            <div className='d-flex justify-content-around w-25'>
                                                <div>
                                                    <i class="fa-regular fa-user"></i>
                                                </div>
                                                <div>
                                                    <h5 style={{ marginBottom: '-3px' }}>Shifa</h5>
                                                    <p> {new Date('01-18-2023').toLocaleDateString("india")}</p>
                                                </div>
                                            </div>
                                            <span style={{ marginTop: '-13px' }}>
                                                5 <i class="fa-solid fa-star fa-2xs" style={{ color: '#ffc800' }}></i>
                                            </span>
                                        </div>
                                        <h6 style={{ marginLeft: '80px' }}>Amazing tour</h6>
                                    </div>
                                </div>
                            </ListGroup>
                        </div>
                    </div>

                </Col>
                <Col md='6'>
                    <div>
                    <h2 style={{marginLeft: "350px",marginTop:"300px" }}>Book Now!</h2>
                    <div className=' d-flex justify-content-center align-items-center' style={{ marginLeft: "150px" }}>
                        <Link to={'/bookingdet'}><img src="https://rockonrr.com/wp-content/uploads/2021/02/Booking-Appointment.png" height={"300px"} alt="" /></Link>
                    </div>
                    </div>

                </Col>
            </Row>
        </>
    )
}

export default TourDetails