import React from 'react'
import { Container } from 'rsuite';
import { Row, Col } from 'rsuite';


function ContentGrid() {
    return (
        <React.Fragment>

                <Container style={styles.container}>
                    <h2 style={{marginLeft: 10}}> Popular </h2>
                    <Row style={styles.row}>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'mediumpurple'}}>   </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'darkorange'}}>     </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'lightpink'}}>      </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'darkcyan'}}>       </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'lawngreen'}}>      </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'lavender'}}>       </Col>
                    </Row>

                    <h2 style={{marginLeft: 10}}> Recent Uploads </h2>
                    <Row style={styles.row}>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'mediumpurple'}}>    </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'darkorange'}}>      </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'lightpink'}}>       </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'darkcyan'}}>        </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'lawngreen'}}>       </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'lavender'}}>        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'mediumpurple'}}>    </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'darkorange'}}>      </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'lightpink'}}>       </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'darkcyan'}}>        </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'lawngreen'}}>       </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'lavender'}}>        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'mediumpurple'}}>   </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'darkorange'}}>     </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'lightpink'}}>      </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'darkcyan'}}>       </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'lawngreen'}}>      </Col>
                        <Col lg={8} md={2} sm={2} xs={2} style={{...styles.col, backgroundColor: 'lavender'}}>       </Col>
                    </Row>
                </Container>

        </React.Fragment>
    )
}

const styles = {
    container: { 
        //display: 'flex', flexDirection: 'column',
        margin: 20, marginLeft: 0, position: "relative", backgroundColor: '#303030', height: '10%', alignItems: 'flex-start',
    },
    row: {
        backgroundColor: '#404040', display: 'flex', alignItems: 'center', marginTop: '0.3%', height: '50%', padding: 10, margin: 10, marginBottom: 30,
    },
    col: {
        color: 'white',  height: '15vh',  fontSize: '1rem', margin: 10, width: '25vh',
    },
}


export default ContentGrid