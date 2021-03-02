import React from 'react'
import { Button, Container } from 'rsuite';
import { Row, Col } from 'rsuite';


import Hamburger from './Nav/Hamburger'
import SearchBar from './Nav/SearchBar'
import logo from '../Assets/logo.svg'

function Layout() {
    return (
        <React.Fragment>
            <div style={styles.divStyle}>

                <Container>

                    <Row style={styles.row}>
                        <Col lg={1} md={2} sm={2} xs={2} style={{...styles.col, }}>
                            <Hamburger />    
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={2} style={{ ...styles.col, }}>
                            <img src={logo} alt="name+logo" style={{height: 'auto', maxWidth: '200px', minWidth: '150px', width: '100%'}} /> 
                        </Col>
                        <Col lg={3} md={2} sm={3} style={styles.col}></Col>
                        <Col lg={8} md={8} sm={8} style={{...styles.col,}}>
                            <SearchBar />
                        </Col>
                        <Col lg={4} md={2} sm={0} style={styles.col}></Col>
                        <Col lg={2} md={3} sm={3} style={styles.col}>
                            <Button style={styles.buttonStyle}> LOG IN </Button>
                        </Col>
                        <Col lg={2} md={3} sm={3} style={styles.col}>   
                            <Button style={styles.buttonStyle}> SIGN UP </Button>
                        </Col>
                    </Row>

                </Container>

            </div>
        </React.Fragment>
    )
}

const styles = {
    divStyle: {
        height: 'auto', width: 'auto', position: 'relative', backgroundColor: '#303030', margin: 0, paddingTop: 0,
    },
    row: {
        backgroundColor: '#303030',  margin: 0,  padding: 0, display: 'flex', alignItems: 'center', marginTop: '0.3%',
    },
    col: {
        color: 'white',  height: '100%',  fontSize: '1rem', 
    },
    buttonStyle: {
        backgroundColor: 'rgb(70,70,70)', color: 'white', fontFamily: 'Roboto, sans-serif', fontWeight: 500, fontSize: '1.2rem'
    }
}


export default Layout