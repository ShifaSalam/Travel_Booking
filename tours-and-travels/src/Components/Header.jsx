import React, { useEffect, useState, useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { TokenAuthContext } from '../Context Api/AuthContext';


function Header() {

    const { authStatus, setAuthStatus } = useContext(TokenAuthContext)

    const navigate = useNavigate()
    const [token, setToken] = useState("")

    useEffect(() => {
        setToken(sessionStorage.getItem('token'))
    })

    const handleLogout = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
        navigate('/')
        setAuthStatus(false)
    }

    return (
        <>
            <Navbar expand="lg" className=" bg-body-secondary">
                <Container>
                    <Navbar.Brand href="" className='me-5 border-0'>
                        <i className="fa-solid fa-plane-departure fa-beat-fade me-3" style={{ color: "#74C0FC" }}></i>
                        Travel India
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" className='' style={{ marginLeft: "400px" }}>
                        <Link className='text-decoration-none text-info me-4' to={'/'}>Home</Link>
                        <Link className='text-decoration-none text-info me-4' to={'/tours'}>Tours</Link>
                        <Link className='text-decoration-none text-info' to={'/gal'}>Gallery</Link>
                    </Navbar.Collapse>
                    <div className=''>

                        {
                            token ?
                                <button className='btn btn-outline-danger' onClick={handleLogout}>
                                    <i className="fa-solid fa-right-from-bracket" />
                                    Logout
                                </button>
                                :
                                <div>
                                    <Link className='btn btn-outline-info me-3' to={'/login'}>Log In</Link>
                                    <Link className='btn btn-outline-info' to={'/reg'}>Sign Up</Link>
                                </div>
                        }

                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header