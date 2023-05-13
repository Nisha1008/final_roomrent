import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <div className="caraousel" style={{ height: "100%", marginLeft: 450, marginTop: 20, marginRight: 450 }}>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image/nisha.webp"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image/study.jpeg"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image/hpuse3.jpeg"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image/sitting.jpeg"
                            alt="Forth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image/building.webp"
                            alt="Fifth slide"
                        />
                    </Carousel.Item>

                </Carousel>

            </div>
        </>
    );
}
export default Home;