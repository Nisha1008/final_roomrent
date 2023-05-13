import React from 'react'
import './showroom.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
// import { Link } from 'react-router-dom'
const ShowRoom = () => {
    const [data, setData] = useState([]);

    function getData() {
        axios.get(
            'https://64510e3ca3221969115976a1.mockapi.io/registerRoonInfo')
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <form>
                <div className='container row '>                {
                    data.map((eachData) => {
                        return (
                            <>

                                <div className="showroom mx-4" >

                                    <div> <h3>Show Rooms</h3></div>
                                    <div className="row mb-2" key={eachData.id}>

                                        <label className="col-sm-4">User Name</label>
                                        <div className="col-sm-4">
                                            {eachData.name}
                                        </div>
                                    </div>


                                    <div className="row mb-3">

                                        <label className="col-sm-4">Email</label>
                                        <div className="col-sm-4">
                                            {eachData.email}
                                        </div>
                                    </div>

                                    <div className="row mb-3">

                                        <label className="col-sm-4 ">Contact</label>
                                        <div className="col-sm-4">
                                            {eachData.contact}
                                        </div>
                                    </div>


                                    <div className="row mb-3">

                                        <label className="col-sm-4">City</label>
                                        <div className="col-sm-4">
                                            {eachData.city}
                                        </div>
                                    </div>


                                    <div className="row mb-3">

                                        <label className="col-sm-4">Image</label>
                                        <div className="col-sm-4">
                                            {eachData.img}
                                        </div>
                                    </div>


                                    <div className="row mb-3">

                                        <label className="col-sm-4">Availbale Room</label>
                                        <div className="col-sm-4">
                                            {eachData.avail}
                                        </div>
                                    </div>
                                    <div className="row mb-3">

                                        <label className="col-sm-4">Price of Room</label>
                                        <div className="col-sm-4">
                                            {eachData.price}
                                        </div>
                                    </div>

                                    <div className="row mb-3">

                                        <label className="col-sm-4">Other Facility</label>
                                        <div className="col-sm-4">
                                            {eachData.facility}
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }
                </div>
            </form >
        </>
    )
}

export default ShowRoom
