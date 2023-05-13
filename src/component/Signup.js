import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Signimg from './Sign_img';
import { NavLink } from 'react-router-dom';
const Signup = () => {
    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
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
        const { name, email, date, password } = inpval;
        // console.log(inpval)
        if (name === "") {
            alert("name field is required")
        } else if (email === "") {
            alert("email is required")
        } else if (!email.includes("@")) {
            alert("please enter valid email adress")
        } else if (date === "") {
            alert("date field is required")
        } else if (password === "") {
            alert("password filed is required")
        } else if (password.length < 5) {
            alert("password length must be grater than 5")
        } else {
            alert("data added succesfully");
            localStorage.setItem("userInput", JSON.stringify([...data, inpval]))
        }
    }
    return (
        <>
            <div className="conatiner mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-5 mx-10" style={{ width: "100%" }}>
                        <h3 className="text-center col-lg-6">SignUp</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" onChange={getData} name="name" placeholder="Enter Your Name" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" onChange={getData} name="email" placeholder="Enter email" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="date" onChange={getData} name="date" />

                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" onChange={getData} placeholder="Password" name="password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' style={{ background: "black" }} type="submit" onClick={addData}>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">login</NavLink></span ></p>
                    </div>
                    <Signimg />
                </section>
            </div >
        </>
    )
}

export default Signup
