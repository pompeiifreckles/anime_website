import React from 'react'
import { Container } from 'rsuite';
import { Divider } from 'rsuite';

import Layout from '../Components/Layout'
import CarouselComponent from '../Components/Home/CarouselComponent'
import ContentGrid from '../Components/Home/ContentGrid'

function Home() {
    return (
        <React.Fragment>
            <div style={styles.div}>

                <Layout />

                <Divider style={styles.divider}/>

                <Container style={styles.container1}>
                    
                    {/* Autoplay Carousel */}
                    <CarouselComponent />

                    {/* Grid of Cards */}
                    <ContentGrid />

                </Container>

            </div>
        </React.Fragment>
    )
}

const styles = {
    div: {
        backgroundColor: '#303030', display: 'flex', flexDirection: 'column', height: 'auto', width: 'auto', overflowY: 'hidden' //position: 'relative', 
        // margin: 0, paddingTop: 0,
        // top: '0', left: '0', backgroundColor: '#303030', width: '100%', zIndex: '-1',            // sid sent this
    },
    divider: {
        backgroundColor: '#777777', padding: 0, marginLeft: 30, marginRight: 30, marginTop:9, marginBottom: 10,
    },
    container1: {
        padding: 0, position: "relative", backgroundColor: '#303030', height: '100%', alignItems: 'center', margin: 0
    },
}


export default Home