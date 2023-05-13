import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="Home">Room Rent</Navbar.Brand>
                    <Nav className="me-auto my-2 my-lg-0">
                        {/* <Nav.Link href="Home">Home</Nav.Link> */}
                        <Nav.Link href="Login">Login</Nav.Link>
                        <Nav.Link href="Signup">SignUp</Nav.Link>
                        <Nav.Link href="ShowRoom">ShowRoom</Nav.Link>
                        <Nav.Link href="RoomInfo">AddRoom</Nav.Link>
                        <Nav.Link href="HelpAndSuport">Help and Support</Nav.Link>
                        <Nav.Link href="Contact">Contact</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                </Container>
            </Navbar>
        </>
    )
}

export default Header
