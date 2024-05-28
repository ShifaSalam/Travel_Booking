import React, { useState, useEffect } from 'react'
import { Col, Form, FormGroup } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import TourCard from '../Components/TourCard'
import { allUserTours } from '../Services/allApis'
import { Row } from 'react-bootstrap'
import Header from '../Components/Header'

function Tours() {

  const [tours, setTours] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      getData()
      // setLogStatus(true)
    }
    else {
      console.log("Login first!")
      // setLogStatus(false)
    }
  }, [search])
  console.log(tours)

  const getData = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
    // console.log(header)
    const result = await allUserTours(header, search)
    // console.log(result)
    if (result.status == 200) {
      setTours(result.data)
    }
    else {
      console.log(result.response.data)
    }
  }


  return (
    <>
      <Header />

      <div className='shadow bg-white rounded-4 p-2 m-5 w-25'>
        <div className='d-flex'>
          <span className='px-2'>
            <i class="fa-solid fa-location-dot " style={{ color: "#74C0FC" }}></i>
          </span> <h5><b> Location</b></h5>
        </div>
        <Form className='d-flex align-items-center'>
          <FormGroup className='d-flex gap-3 '>

            <div className='w-100'>
              <FloatingLabel controlId="floatingInput" label="Where do You wanna Go? " className="mb-2">
                <Form.Control type="text" placeholder="Where do You wanna Go?" onChange={(e) => { setSearch(e.target.value) }} className='px-3' />
              </FloatingLabel>
            </div>
          </FormGroup>
          <span className='bg-info rounded-1 d-flex justify-content-center align-items-center ms-auto' type='submit' style={{ height: "90px", width: "90px", marginRight: "35px", marginTop: "-30px" }} >
            <i class="fa-solid fa-magnifying-glass fa-2xl" style={{ color: "#ffffff" }}></i>
          </span>
        </Form>
      </div>
      {/* <SearchBar /> */}
      <div className=''>
        <Row className='' style={{ margin: "0px" }}>
          {
            tours.length > 0 ?
              tours.map(item => (
                <Col md='3' className='py-2'>
                  <TourCard tours={item} />
                </Col>
              )) :
              <h1>Loading...</h1>
          }

        </Row>
      </div>

    </>
  )
}

export default Tours