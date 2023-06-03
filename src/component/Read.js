import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './read.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Read = () => {

    const [data, setData] = useState([]);

    const [query, setQuery] = useState("");
    function getData() {
        axios.get("https://64510e3ca3221969115976a1.mockapi.io/registerRoonInfo")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
    }
    function HandleDelete(id) {
        axios.delete(`https://64510e3ca3221969115976a1.mockapi.io/registerRoonInfo/${id}`)
            .then(() => {
                getData()
            })
    }
    const setToLocalStorage = (id, name, contact, city, price, avail) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("contact", contact);
        localStorage.setItem("city", city);
        localStorage.setItem("price", price);
        localStorage.setItem("avail", avail);
    }
    useEffect(() => {
        getData();
    })
    return (
        <>
            <Form className="d-flex mt-4">
                <Form.Control
                    type="search"
                    placeholder="Search by city name...."
                    className="me-2"
                    aria-label="Search"
                    onChange={e => setQuery(e.target.value)}
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">City</th>
                        <th scope="col">Price</th>
                        <th scope="col">Available Room</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {
                    data.filter(eachData => eachData.city.toLowerCase().includes(query)).map((eachData) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th>{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.contact}</td>
                                        <td key={eachData.id}>{eachData.city}</td>
                                        <td>{eachData.price}</td>
                                        <td>{eachData.avail}</td>
                                        <Link to="/update">
                                            <td><Button className='btn-success' variant="success" onClick={() => setToLocalStorage(eachData.id, eachData.name, eachData.contact, eachData.city, eachData.price, eachData.avail)}>Edit</Button> </td>
                                        </Link>

                                        <td><Button className='btn-danger' variant="danger" onClick={() => HandleDelete(eachData.id)}>Delete</Button> </td>

                                        <Link to="/showroom">
                                            <td>
                                                <Button className='btn-secondary'>View</Button>
                                            </td></Link>
                                    </tr>
                                </tbody>

                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Read
