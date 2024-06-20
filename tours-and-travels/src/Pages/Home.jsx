import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap'

import SearchBar from '../Components/SearchBar'
import TourImages from '../Components/TourImages'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { allUserTours, homeTours } from '../Services/allApis'
import TourCard from '../Components/TourCard'

function Home() {
  const [tours, setTours] = useState([])
  const [toursHome, setToursHome] = useState([])
  const [logStatus, setLogStatus] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      getData()
      getHomeTours()
      setLogStatus(true)
    }
    else {
      console.log("Login first!")
      setLogStatus(false)
    }
  }, [])
  console.log(tours)

  const getData = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
    // console.log(header)
    const result = await allUserTours(header)
    // console.log(result)
    if (result.status == 200) {
      setTours(result.data)
    }
    else {
      console.log(result.response.data)
    }
  }
  const getHomeTours = async () => {
    const result = await homeTours()
    // console.log(result)
    if (result.status == 200) {
      setToursHome(result.data)
    }
    else {
      console.log(result.response.data)
    }
  }
  console.log(toursHome)
  return (
    <>
      <Header status={true} />
      {/* FIRST SECTION */}
      <section style={{ marginTop: "70px" }}>
        <Container className='m-4'>
          <Row>
            <Col md={3}><h5 className='btn btn-info rounded-pill ms-5'>Remember This!</h5></Col>
          </Row>
          <Row>
            <Col sm={12} md={7} className='d-flex row align-items-center '>
              <div className='d-flex justify-content-center'>
                <img src="https://www.pngall.com/wp-content/uploads/8/Travel-PNG-Image-HD.png" width={"680px"} alt="" />
              </div>
              <div style={{ marginTop: "-100px" }}>
                <h3 style={{ textAlign: 'justify' }}><b>"Embrace the adventure, meet new people,
                  and immerse yourself in the beauty of every moment. <span className='text-info'> Bon voyage!</span>"</b></h3>
              </div>
            </Col>
            <Col sm={12} md={5}>
              <img src="https://www.visittnt.com/blog/wp-content/uploads/2018/11/North-India.jpg" className='rounded-3' style={{ width: "740px", height: "500px" }} alt="" />
            </Col>
          </Row>

        </Container>
      </section>

      {/* SECOND SECTION */}

      <section className='' style={{ marginTop: "150px" }}>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="d-flex row ">
                <h3 className='btn btn-info rounded-pill w-50 ms-5 mb-4'>Explore India with Us</h3>

                <h2>With all our experience, <br /> we will serve you</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Quas aliquam, hic tempora inventore suscipit unde.
                </p>
              </div>

              <div className=" d-flex align-items-center gap-5">
                <div className="">
                  <span className='bg-info rounded-3 p-2'>5k+</span>
                  <h6 className='mt-1'><small>Successfull Trips</small></h6>
                </div>
                <div className="">
                  <span className='bg-info rounded-3 p-2'>500+</span>
                  <h6 className='mt-1'><small>Regular clients</small></h6>
                </div>
                <div className="">
                  <span className='bg-info rounded-3 px-3 py-2'>3</span>
                  <h6 className='mt-1'><small>Years experience</small></h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src="https://webstockreview.net/images/traveling-clipart-global-travel-4.png" height={"500px"} alt="" />
              </div>
            </Col>
          </Row>
          <Row style={{ marginLeft: "165px", marginBottom: "100px", marginTop: "-130px" }}>

          </Row>
        </Container>
      </section>

      {/* THIRD SECTION */}

      {/* <section>
        <Container>
          <Row>
            <Col lg='12'>
              <h5 className='btn btn-info rounded-pill ms-5'>Gallery</h5>
              <h2 className=''>Visit our customers tour gallery</h2>
            </Col>
          </Row>
          <Row>
            <div className=" d-flex">
              <TourImages />
              <TourImages />
              <TourImages />

            </div>
          </Row>
        </Container>
      </section> */}

      {/* LAST SECTION */}

      <section className="w-100 p-5">
        <Row>
            {
              !logStatus ?
                <div className='d-flex justify-content-between pt-2 ps-5 rounded-3' style={{ backgroundColor: "rgb(178 223 252)",margin:"" }}>
                  <Col md='5'>
                    <div>
                      <h2>Register now to get useful Tour Package informations.</h2>

                      <div style={{ backgroundColor: "#ffffff" }} className='d-flex justify-content-between rounded-5 w-75 mt-3'>
                        <input type="email" required placeholder="Enter your email" className='border-0 px-3' />
                        <button className='btn btn-info '>
                          <Link to={'/reg'} className='text-decoration-none text-light'>Register</Link>
                        </button>
                      </div>

                      <p className='mt-3'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae in, asperiores esse maxime officia omnis enim. Obcaecati exercitationem perspiciatis veritatis voluptates eos vitae reiciendis, architecto totam qui placeat ipsa. Vel.
                      </p>
                    </div>
                  </Col>
                  <Col lg='5'>
                    <div className="ms-5" style={{marginLeft:"300px"}}>
                      <img src="https://cdni.iconscout.com/illustration/premium/thumb/free-registration-desk-1886554-1598085.png" height={"350px"} alt="" />
                    </div>
                  </Col>
                </div>
                :
                <div className='m-5'>
                  <img src="" alt="" />
                  <h2 className='text-center mb-5'>You can access our Tour packages Now!</h2>
                  <marquee behavior="" direction=''>
                  <div className='d-flex'>
                    {
                      toursHome.length > 0 &&
                      toursHome.map(item => (
                        <div>
                          <div className='mx-4'>
                            <TourCard tours={item} />
                          </div>
                        </div>
                      ))

                    }
                    
                  </div>
                 
                </marquee>
                <div className='text-center mt-4'>
                  <Link to={'/tours'} className='text-decoration-none text-info'>Go for More Packages</Link>
                </div>
                </div>
            }
          </Row>
          
      </section>
    </>
  )
}

export default Home