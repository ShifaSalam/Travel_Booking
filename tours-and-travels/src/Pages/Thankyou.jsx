import React from 'react'
import {Container, Row, Col, Button} from'react-bootstrap'
import {Link} from'react-router-dom'
import Header from '../Components/Header'

function Thankyou() {
  return (
    <>
    <Header/>
    <section>
        <Container>
            <Row>
                <Col className='pt-5 text-center' style={{margin:"100px"}}>
                    <div className="thank__you">
                        <span>
                        <i class="fa-solid fa-circle-check fa-2xl" style={{color:"#74C0FC"}}></i>
                        </span>
                        <h1 className="my-3 fw-semibold">
                            Thank You 
                        </h1>
                        <h3 className="mb-4">
                            Your Tour is Booked!
                        </h3>
                        <h3>
                            Happy Journey <span><i class="fa-regular fa-face-smile-beam" style={{color:"#74C0FC"}}></i></span>
                        </h3>

                        <Button className='btn btn-warning w-25'>
                            <Link to='/' className='text-decoration-none text-light'>
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Thankyou