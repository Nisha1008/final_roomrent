import React, { useState } from 'react'
import Signimg from './Sign_img';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
const Login = () => {
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""

    })
    // const [data, setData] = useState([])


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
        const getUser = localStorage.getItem("userInput")
        console.log(getUser)
        const { email, password } = inpval;
        // console.log(inpval)
        if (email === "") {
            alert("email is required")
        } else if (!email.includes("@")) {
            alert("please enter valid email adress")
        } else if (password === "") {
            alert("password filed is required")
        } else if (password.length < 5) {
            alert("password length must be grater than 5")
        } else {
            if (getUser && getUser.length) {
                const userdata = JSON.parse(getUser)
                // console.log(userdata);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });
                if (userlogin.length === 0) {
                    alert("invalid details");
                } else {
                    console.log("user login sucessfully")
                    history("/showroom")
                }
            }
        }
    }

    return (
        <>
            <div className="conatiner mt-3 ms-5">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-5 mx-10" style={{ width: "100%" }}>
                        <h3 className="text-center col-lg-7 fs-1">Sign In</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicEmail">

                                <Form.Control type="email" onChange={getData} className="py-3 fs-5 " name="email" placeholder="Enter Email" />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-7" controlId="formBasicPassword">

                                <Form.Control type="password" onChange={getData} className="py-3 fs-5 " placeholder="Password" name="password" />
                            </Form.Group>
                            <Button variant="primary" className='mb-1 col-lg-7 py-3 fs-5' style={{ background: "black" }} type="submit" onClick={addData}>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3 fs-5'>Don't Have an Account ? <span><NavLink to="/signup">SignUp</NavLink></span ></p>
                    </div>
                    <Signimg />
                </section>
            </div >
        </>
    )
}

export default Login
