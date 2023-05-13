import React from 'react'
import './help.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
const Contact = () => {
    return (
        <>
            <form action="">
                <div className="contact">
                    <h3>Contact us</h3>
                    <hr />
                    <label>Tell us what we can help with:</label><br />
                    <input type="text" placeholder='Example:how can i register' />
                    <h6>5 charater required</h6>
                    <Button variant="outline-primary">Next</Button>{' '}

                    <hr />
                    Resources
                    <hr />
                    Question from your support Speciaslist
                    <hr />
                    Contact options
                    <hr />
                    <DropdownButton id="dropdown-basic-button" title="English">
                        <Dropdown.Item href="#/action-1">Hindi</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Urdu</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Punjabi</Dropdown.Item>
                    </DropdownButton>
                </div>
            </form>
        </>
    )
}

export default Contact
