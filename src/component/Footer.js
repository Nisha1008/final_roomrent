// import {Conatiner, Grid, Typography } from '@mui/material'
import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faHouse, faImage, faLocationDot } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <>

            <div className="footer">
                {/* <Container>
                    <Grid conatiner spacing={3}>
                        <Grid item xs={12} sm={6} ms={4} lg={3}>
                            <Typography variant='h4' sx={{ margin: "15px" }}>Product</Typography>
                            <Typography variant='h6' sx={{ margin: "15px" }}>Computer</Typography>
                            <Typography variant='h6' sx={{ margin: "15px" }}>CPU</Typography>
                            <Typography variant='h6' sx={{ margin: "15px" }}>Programmin</Typography>
                            <Typography variant='h6' sx={{ margin: "15px" }}>Java Script</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} ms={4} lg={3}>
                        <Typography variant='h4' sx={{ margin: "15px" }}>Service</Typography>
                        <Typography variant='h6' sx={{ margin: "15px" }}>Computer</Typography>
                        <Typography variant='h6' sx={{ margin: "15px" }}>CPU</Typography>
                        <Typography variant='h6' sx={{ margin: "15px" }}>Programmin</Typography>
                        <Typography variant='h6' sx={{ margin: "15px" }}>Java Script</Typography>
                    </Grid>

                </Container> */}

                <p>@ 2025 Copyright by RoomRent</p>
                <div className='icon'>
                    <table>
                        <tr>

                            <td className="icon-item"><FontAwesomeIcon icon={faEnvelope} /></td>
                            <td className="icon-item"><FontAwesomeIcon icon={faHouse} /></td>
                            <td className="icon-item"><FontAwesomeIcon icon={faPhone} /></td>
                            <td className="icon-item"><FontAwesomeIcon icon={faImage} /></td>
                            <td className="icon-item"><FontAwesomeIcon icon={faLocationDot} /></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Footer
