import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <div className="caraousel" style={{ marginLeft: 100, marginTop: 50, marginRight: 100, marginBottom: 200 }}>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            width={900} height={600} alt="900x600"
                            className="d-block w-100"
                            src="./image/nisha.webp"

                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width={900} height={600} alt="900x600"
                            className="d-block w-100"
                            src="./image/study.jpeg"

                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            width={900} height={600} alt="900x600"
                            className="d-block w-100"
                            src="./image/hpuse3.jpeg"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            width={900} height={600} alt="900x600"
                            className="d-block w-100"
                            src="./image/sitting.jpeg"

                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            width={900} height={600} alt="900x600"
                            className="d-block w-100"
                            src="./image/building.webp"

                        />
                    </Carousel.Item>

                </Carousel>

            </div>
        </>
    );
}
export default Home;