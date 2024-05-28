import React from 'react'
import {Col, Form, FormGroup} from "react-bootstrap"
import { useState } from 'react'

function SearchBar() {

    return (
        <>
            <Col>
                <div className='shadow bg-white rounded-4 p-2'>
                    <Form className='d-flex align-items-center gap-5'>
                        <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                            <span>
                            <i class="fa-solid fa-location-dot" style={{color:"#74C0FC"}}></i>
                            </span>
                            <div>
                                <h6><b>Location</b></h6>
                                <input type='text' className='border-0' placeholder='Where do you wanna go?'  onChange={(e)=>{setSearch(e.target.value)}}/>
                            </div>
                        </FormGroup>
                        <span className='bg-info rounded-1 d-flex justify-content-center align-items-center ms-auto' style={{height:"30px",width:"30px"}} type='submit'>
                        <i class="fa-solid fa-magnifying-glass" style={{color:"#ffffff"}}></i>
                        </span>
                    </Form>
                </div>
            </Col>
        </>
    )
}

export default SearchBar