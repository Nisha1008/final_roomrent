import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './RoomInfo.css'

const RoomInfo = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [city, setCity] = useState("");
    const [img, setImg] = useState("");
    const [avail, setAvail] = useState("");
    const [price, setPrice] = useState("");
    const [facility, setFacility] = useState("");
    const history = useNavigate();

    const header = { "Access-Control-Allow-Origin": "*" };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("data added succesfully 😇");
        axios.post(
            'https://64510e3ca3221969115976a1.mockapi.io/registerRoonInfo', {
            name: name, email: email, contact: contact, city: city, img: img, avail: avail, price: price, facility: facility,
            header,
        })
            .then(() => {
                history("/showroom");
            })
    }

    return (
        <>
            {/* <div>{name},{email},{contact},{adress},{img},{avail},{facility}</div> */}
            <form>
                <div className='roominfo mt-2'>
                    <h1>Fill LandLord Info.</h1>
                    <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter your Name' />
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' />
                    <input type="text" onChange={(e) => setContact(e.target.value)} placeholder='Enter your Contact Number' />
                    <input type="text" onChange={(e) => setCity(e.target.value)} placeholder='Enter your city' />
                    <input type="file" accept='image/*' onChange={(e) => setImg(e.target.value)} placeholder='Enter your Room image' />
                    <input type="number" onChange={(e) => setAvail(e.target.value)} placeholder='Enter Number of Romms are available' />
                    <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder='Enter Price of your room ' />
                    <input type="text area" onChange={(e) => setFacility(e.target.value)} placeholder='Enter facilities you provide' />
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

                </div>


            </form>
        </>
    )
}

export default RoomInfo
