import React from 'react'
import { Card, CardBody } from "react-bootstrap";
import { Link } from "react-router-dom";
import base_url from '../Services/base_url';

function TourCard({ tours }) {
    // console.log(id)
    return (
        <>
            <div className='d-flex justify-content-between '>
                <Card className='w-100'>
                    <Link to={`/tourdet/${tours._id}`}>
                        <img src={tours.image && `${base_url}/uploads/${tours.image}`} width={'100%'} height={"350px"} alt="tour-img" />
                    </Link>
                    <CardBody>
                        <div className=' d-flex align-items-center justify-content-between'>
                            <span className=' d-flex  align-items-center'>
                                <i class="fa-solid fa-location-dot"></i>
                                {tours.state}
                            </span>
                            <span className='tour__rating d-flex  align-items-center gap-1'>
                                <i class="fa-solid fa-star"></i>
                                4.5
                            </span>
                        </div>

                        <h5 className='text-center'>
                            <Link >
                                {tours.packageName}
                            </Link>
                        </h5>
                        <div className='text-center'>
                            <button className='btn'>
                                <Link to={'/bookingdet'}>Book Now</Link>
                            </button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default TourCard