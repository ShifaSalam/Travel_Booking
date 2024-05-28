import React from 'react'
import { Form, FormGroup, ListGroupItem, Button, ListGroup, FloatingLabel } from 'react-bootstrap'

function Booking() {
    return (
        <>
            <div className='border p-5'>
                <div className="booking__top d-flex align-items-center justify-content-between">
                    <h4><i class="fa-solid fa-indian-rupee-sign fa-xs"></i> 500 <span><small>/per person</small></span></h4>
                    <span className='tour__rating d-flex  align-items-center gap-1'>
                        <i class="fa-solid fa-star fa-2xs" style={{ color: '#ffc800' }}></i><small> 4.2(3) </small>
                    </span>
                </div>

                <div className="py-4">
                    <h5><b>Informations</b></h5>
                    <Form className='' >
                        <FloatingLabel controlId="floatingInput" label="Full Name" className="mb-2">
                            <Form.Control type="text" required placeholder="Full Name" onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-2">
                            <Form.Control type="text" required placeholder="Phone Number" onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                        </FloatingLabel>
                        <div className='d-flex w-100'>
                            <FloatingLabel controlId="floatingInput" label="Date" className="mb-2 w-50">
                                <Form.Control type="date" required placeholder="" onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Guest" className="mb-2 w-50">
                                <Form.Control type="number" required placeholder="Guest" onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                            </FloatingLabel>
                        </div>
                    </Form>
                </div>
                <div className="booking__bottom">
                    <ListGroup>
                        <ListGroupItem className='border-0 d-flex justify-content-between'>
                            <h6 className='d-flex align-items-center gap-1'>
                                <i class="fa-solid fa-indian-rupee-sign fa-xs"></i>500 X 1 person
                            </h6>
                            <h6> <i class="fa-solid fa-indian-rupee-sign fa-xs"></i>500</h6>
                        </ListGroupItem>
                        <ListGroupItem className='border-0 d-flex justify-content-between'>
                            <h6>
                                Service charge
                            </h6>
                            <h6><i class="fa-solid fa-indian-rupee-sign fa-xs"></i>100</h6>
                        </ListGroupItem>
                        <ListGroupItem className='border-0 total d-flex justify-content-between'>
                            <h6><b>Total</b></h6>
                            <h6><b><i class="fa-solid fa-indian-rupee-sign fa-xs"></i>600</b></h6>
                        </ListGroupItem>
                    </ListGroup>

                    <Button className='btn btn-warning w-100 mt-4' >
                        Book Now
                    </Button>
                </div>

            </div>
        </>
    )
}

export default Booking