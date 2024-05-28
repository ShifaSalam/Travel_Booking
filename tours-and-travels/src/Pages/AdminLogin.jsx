import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AdminLogin() {
    const [mail, setEmail] = useState('')
    const [pswd, setPswd] = useState('')
    const navigate = useNavigate()
    const handleMail = (e) => {
        setEmail(e.target.value)
    }
    const handlepswd = (e) => {
        setPswd(e.target.value)
    }
    const adminLogin = () => {
        if (mail === "admin@gmail.com" && pswd === "321") {
            console.log(mail,pswd)
            navigate('/admindash')
        }
        else {
            toast.error("Enter Valid Information!")
            alert("Are you sure you wan to go to admin panel?")
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <Col lg='8' className='m-auto'>
                        <div className='w-75 d-flex justify-content-between shadow m-5'>
                            <div className=' ms-5'>
                                <img src="https://icon-library.com/images/admin-user-icon/admin-user-icon-7.jpg" height={"200px"} alt="" />
                            </div>

                            <div className='px-5' style={{ backgroundColor: "rgb(178 223 252)" }}>
                                <div className="text-center">
                                    <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png" height={"50px"} alt="" />
                                    <h2>Login</h2>
                                </div>
                                <Form >
                                    {/* <FormGroup>
                                        <input className='border-0 my-2 rounded-1 w-100 p-1' type="email" placeholder='Email' required id='email' onChange={handleMail} name='mail' />
                                    </FormGroup>
                                    <FormGroup>
                                        <input className='border-0 rounded-1 mb-2 w-100 p-1' type="password" placeholder='Password' required id='password' onChange={handlepswd} name='pswd' />
                                    </FormGroup> */}
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name='mail' onChange={handleMail} placeholder="Enter your Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name='pswd' onChange={handlepswd} placeholder="Enter password" />
                                    </Form.Group>
                                    {/* <Link type='' className='btn w-100 mb-2' onClick={adminLogin}>Login</Link> */}
                                    <Button variant="info" className='btn w-100 mb-2' onClick={adminLogin} >Log in</Button>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AdminLogin