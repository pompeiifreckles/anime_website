import React from 'react'
import { Container, Carousel } from 'rsuite';

import image1 from '../../Assets/CarouselImages/image1.jpg'
import image2 from '../../Assets/CarouselImages/image2.png'
import image3 from '../../Assets/CarouselImages/image3.jpg'
import image4 from '../../Assets/CarouselImages/image4.JPG'
import image5 from '../../Assets/CarouselImages/image5.jpg'

function Carousel_Component() {
    return (
        <React.Fragment>

            <Container style={styles.container}>
                
                {/* Autoplay Carousel */}
                <Carousel autoplay className="custom-slider" style={styles.carousel} shape="bar">
                    <img src={image1} height="250" alt="1" />
                    <img src={image2} height="250" alt="2" />
                    <img src={image3} height="250" alt="3" />
                    <img src={image4} height="250" alt="4" />
                    <img src={image5} height="250" alt="5" />
                </Carousel>

            </Container>

        </React.Fragment>
    )
}

const styles = {
    container: {
        padding: '0%', position: "relative", backgroundColor: '#303030', height: '100%', alignItems: 'center'
    },
    carousel: {
        margin:20, height: '50vh', width: '55vw'
    },
}


export default Carousel_Component