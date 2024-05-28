import React from 'react'
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap'
import Booking from '../Components/Booking'
function BookingDetails() {
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
                    <Row>
                        <Col md='7'>
                            <div className="">
                                <img src='http://www.weather-forecast.com/system/images/2222/original/Munnar.jpg?1312999628' className='w-100 rounded' alt="" />

                                <div className="border my-4 p-3">
                                    <h4>Munnar</h4>
                                    <div className='d-flex align-items-center gap-5'>
                                        <span className='tour__rating d-flex  align-items-center gap-1'>
                                            <i class="fa-solid fa-star fa-2xs" style={{ color: '#ffc800' }}></i>4.2
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
                                    <div className=" my-2 d-flex">
                                        <span className='me-5'><i class="fa-solid fa-location-dot"></i> Kerala</span>
                                        <span className='me-5'><i class="fa-solid fa-indian-rupee-sign fa-xs"></i> 500/per person</span>
                                        {/* <span><i class="ri-map-pin-time-line" style={{ color: "var(--secondary-color)" }}></i> k/m</span> */}
                                        <span><i class="fa-solid fa-people-group fa-xs"></i> 12 people</span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>Munnar is a town and hill station located in the Idukki district of the southwestern Indian state
                                        of Kerala. Munnar is situated at around 1,600 metres (5,200 ft) above mean sea level,[4] in the
                                        Western Ghats mountain range. Munnar is also called the "Kashmir of South India" and is a popular
                                        honeymoon destination.</p>
                                </div>

                                {/*WWWWWWWWWWWWWWWWWWWWW TOUR REVIEW START WWWWWWWWWWWWWWWWWWWWWWWWW*/}
                                <div className="border p-3">
                                    <h4>Reviews </h4>

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
                                                            <h5 style={{marginBottom:'-3px'}}>Shifa</h5>
                                                            <p> {new Date('01-18-2023').toLocaleDateString("india")}</p>
                                                        </div>
                                                    </div>
                                                    <span style={{marginTop:'-13px'}}>
                                                        5 <i class="fa-solid fa-star fa-2xs" style={{ color: '#ffc800' }}></i>
                                                    </span>
                                                </div>
                                                <h6 style={{marginLeft:'80px'}}>Amazing tour</h6>
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
                                                            <h5 style={{marginBottom:'-3px'}}>Shifa</h5>
                                                            <p> {new Date('01-18-2023').toLocaleDateString("india")}</p>
                                                        </div>
                                                    </div>
                                                    <span style={{marginTop:'-13px'}}>
                                                        5 <i class="fa-solid fa-star fa-2xs" style={{ color: '#ffc800' }}></i>
                                                    </span>
                                                </div>
                                                <h6 style={{marginLeft:'80px'}}>Amazing tour</h6>
                                            </div>
                                        </div>
                                    </ListGroup>
                                </div>
                            </div>
                        </Col>

                        <Col md='5'>
                            <Booking/>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default BookingDetails