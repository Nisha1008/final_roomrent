import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <img src="./image/home.png" className='me-2  mx-3' alt="" style={{ height: 90, width: 100 }} />
                <Container>
                    <Navbar.Brand href="Home" style={{ fontSize: 40 }}>Room Rent</Navbar.Brand>
                    <Nav className="me-auto my-2 my-lg-0 fs-4">
                        <Nav.Link href="Home">Home</Nav.Link>
                        <Nav.Link href="Signup">SignUp</Nav.Link>
                        <Nav.Link href="Login">Login</Nav.Link>

                        <Nav.Link href="ShowRoom">ShowRoom</Nav.Link>
                        <Nav.Link href="RoomInfo">AddRoom</Nav.Link>
                        <Nav.Link href="HelpAndSuport">Help and Support</Nav.Link>
                        <Nav.Link href="Contact">Contact</Nav.Link>
                    </Nav>
                </Container>
                <Form.Group className="mb-6 me-3" controlId="formGroupEmail" >
                    <Form.Control type="search" placeholder="Search..." />
                </Form.Group>
            </Navbar>
        </>
    )
}

export default Header