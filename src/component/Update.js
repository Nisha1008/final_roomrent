import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './read.css'
const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");
    const [avail, setAvail] = useState("");
    const nevigate = useNavigate();
    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setContact(localStorage.getItem("contact"));
        setCity(localStorage.getItem("city"));
        setPrice(localStorage.getItem("price"));
        setAvail(localStorage.getItem("avail"));
    }, [])
    const handleUpdate = (e) => {
        e.preventDefault();
        alert("updated sucessfully  🥳🥳🥳🥳")
        axios.put(`https://64510e3ca3221969115976a1.mockapi.io/registerRoonInfo/${id}`
            , {
                name: name,
                contact: contact,
                city: city,
                price: price,
                avail: avail,
            }).then(() => {
                nevigate("/read");
            })
    }


    return (
        <>
            <div className="update">
                <h1>Update Information</h1>
                <div className="mb-3">
                    <label className="form-label">User Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" className="form-control" placeholder="Enter username" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact</label>
                    <input type="text" value={contact} id="contact" onChange={(e) => setContact(e.target.value)} className="form-control" placeholder="Contact number" />
                </div>
                <div className="mb-3">
                    <label className="form-label">City</label>
                    <input type="text" value={city} id="city" onChange={(e) => setCity(e.target.value)} className="form-control" placeholder="adress" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="text" value={price} id="price" onChange={(e) => setPrice(e.target.value)} className="form-control" placeholder="room price" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Availbale room</label>
                    <input type="number" value={avail} id="avail" onChange={(e) => setAvail(e.target.value)} className="form-control" placeholder="Avail" />
                </div>
                <Button type='submit' variant="primary" className='btn btn-primary mx-2' onClick={handleUpdate}>Update</Button>

                <Link to="/read"><Button variant="secondary" >Back</Button></Link>
            </div>
        </>
    )
}

export default Update
