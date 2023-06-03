import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Signimg from './Sign_img';
import { NavLink, useNavigate } from 'react-router-dom';
const Signup = () => {

    const history = useNavigate();
    const [inpval, setInpval] = useState({
        name: "",
        lname: "",
        email: "",
        password: ""

    })
    const [data, setData] = useState([])
    console.log(inpval);
    const getData = (e) => {
        // console.log(e.target.value)
        const { value, name } = e.target;
        console.log(value, name)
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();
        const { name, lname, email, password } = inpval;
        // console.log(inpval)
        if (name === "") {
            alert("name field is required")
        } else if (lname === "") {
            alert("last name field is required")
        } else if (email === "") {
            alert("email is required")
        } else if (!email.includes("@")) {
            alert("please enter valid email adress")
        } else if (password === "") {
            alert("password filed is required")
        } else if (password.length < 5) {
            alert("password length must be grater than 5")
        } else {
            alert("data added succesfully");
            history("/login");
            localStorage.setItem("userInput", JSON.stringify([...data, inpval]))
        }
    }
    return (
        <>
            <div className="conatiner mt-3 ms-5">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-5 mx-10" style={{ width: "100%" }}>
                        <h3 className="text-center col-lg-8 fs-1">SignUp</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">

                                <Form.Control type="text" className="fs-5 py-3" onChange={getData} name="name" placeholder="Enter Your First Name" />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">

                                <Form.Control type="text" className="fs-5 py-3" onChange={getData} name="lname" placeholder='Enter Your Last Name' />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">

                                <Form.Control type="email" className="fs-5 py-3" onChange={getData} name="email" placeholder="Enter Email" />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">

                                <Form.Control type="password" onChange={getData} className="fs-5 py-3" placeholder="Password" name="password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-8 fs-5 py-3' style={{ background: "black" }} type="submit" onClick={addData}>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3 fs-5'>Already Have an Account ? <span><NavLink to="/login">login</NavLink></span ></p>
                    </div>
                    <Signimg />
                </section>
            </div >
        </>
    )
}

export default Signup
