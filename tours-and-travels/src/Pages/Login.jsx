import React, { useState } from 'react'
import {Container, Row, Col, Form, FormGroup,Button} from'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../Services/allApis';

import {Link} from'react-router-dom'

function Login() {
     const navigate=useNavigate()

    const [data,setData]=useState({
        password:"",email:""
    })

    const handleLogin=async()=>{
        const {email,password}=data
        if(!email || !password){
            toast.warning("invalid details.. enter details properly")
        }
        else{
            const result=await userLogin({email,password})
            // console.log(result)
            if(result.status==200){
                sessionStorage.setItem("token",result.data.token)
                sessionStorage.setItem("username",result.data.user)
                sessionStorage.setItem("userDetails",JSON.stringify(result.data.userDetails))
                toast.success("login successfull")
                navigate('/')
            }
            else{
                toast.error(result.response.data)
            }
           

        }
    }
    return (
        <>
            <Container>
                <Row>
                    <Col lg='8' className='m-auto'>
                        <div className='d-flex justify-content-between shadow m-5'>
                            <div className='pe-5 mx-5'>
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" height={"300px"} alt="" />
                            </div>

                            <div className='px-5' style={{ backgroundColor: "rgb(178 223 252)" }}>
                                <div className="text-center">
                                    <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png" height={"50px"} alt="" />
                                    <h2>Login</h2>
                                </div>
                                

                                {/* <Form >
                                    <FormGroup>
                                        <input className='border-0 my-2 rounded-1 w-100 p-1' type="email" placeholder='Email' required id='email'  />
                                    </FormGroup>
                                    <FormGroup>
                                        <input className='border-0 rounded-1 mb-2 w-100 p-1' type="password" placeholder='Password' required id='password' />
                                    </FormGroup>
                                    <Button type='submit' className='btn w-100 mb-2' >Login</Button>
                                </Form> */}

                                <div>
                                <FloatingLabel  controlId="floatingInput" label="Email Address" className="mb-2">
                                    <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>{setData({...data,email:e.target.value})}} />
                                </FloatingLabel>
                                <FloatingLabel  controlId="floatingPassword" label="Password " className="mb-2">
                                    <Form.Control  type="password" placeholder="Password" onChange={(e)=>{setData({...data,password:e.target.value})}} />
                                </FloatingLabel>
                                {/* <FloatingLabel className='border-0 rounded-1 mb-2 w-100 p-1' controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password" onChange={(e)=>{setData({...data,password:e.target.value})}} />
                                </FloatingLabel> */}
                                <Button type='submit' className='btn w-100 mb-2' onClick={handleLogin}>Login</Button>
                                </div>
                                <p>Don't have an account?<Link to='/reg' className='text-decoration-none ms-1'>Sign Up</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login