// import {Conatiner, Grid, Typography } from '@mui/material'
import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faHouse, faImage, faLocationDot } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <>

            <div className="footer" style={{ height: 90 }}>
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
                </Container> */}
                <h6 className='me-5' >@ 2023 Copyright by Nisha Mehta</h6>

                <h5>Follow us on</h5>
                <div className='icon' >
                    <table>
                        <tr>
                            <td className="icon-item"><a href="mailto:nr4515378@gmail.com"> <FontAwesomeIcon icon={faEnvelope} /></a></td>
                            <td className="icon-item"><a href="Home"> <FontAwesomeIcon icon={faHouse} /></a></td>
                            <td className="icon-item"><a href="tel:123243454"> <FontAwesomeIcon icon={faPhone} /></a></td>
                            <td className="icon-item"><a href="https://images.google.com/"> <FontAwesomeIcon icon={faImage} /></a></td>
                            <td className="icon-item"><a href="https://www.google.com/maps"> <FontAwesomeIcon icon={faLocationDot} /></a></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Footer
