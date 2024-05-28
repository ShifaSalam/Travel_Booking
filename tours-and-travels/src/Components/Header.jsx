import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header({ status }) {
    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
        navigate('/')
        console.log("logout")
    }
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home" className='me-5 border-0'>
                        {/* <img src="https://tse1.mm.bing.net/th?id=OIP.n7udW0q378js0Mk4nXbj-gHaGm&pid=Api&P=0&h=180" style={{height:"50px"}} className='m-3' alt="" /> */}
                        <i className="fa-solid fa-plane-departure fa-beat-fade me-3" style={{ color: "#74C0FC" }}></i>
                        Travel India
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" className='' style={{ marginLeft: "400px" }}>
                        <Nav className="">
                            <Nav.Link href="#link" className='text-info'>About</Nav.Link>
                            <Nav.Link href="#link" className='text-info'>Tours</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div className=''>
                        {!status ?
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