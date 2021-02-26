import React from 'react'
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import { Grid, Row, Col } from 'rsuite';
import { Drawer, ButtonToolbar, IconButton, Icon, Button, Paragraph } from 'rsuite';


import Hamburger from './Nav/Hamburger'
import SearchBar from './Nav/SearchBar'
import icon from './icon.jpg'
// import icon from '../../Assets/icon'

function Layout() {
    return (
        <React.Fragment>
            <div style={styles.divStyle}>

                <Container>

                    {/* <Row style={styles.row}>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'dodgerblue',  }}>    1     </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'gold',        }}>    2     </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'greenyellow', }}>    3     </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'orange',      }}>    4     </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'dodgerblue',  }}>    5     </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'gold',        }}>    6     </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'greenyellow', }}>    7     </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'orange',      }}>    8     </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'dodgerblue',  }}>    9     </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'gold',        }}>    10    </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'greenyellow', }}>    11    </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'orange',      }}>    12    </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'dodgerblue',  }}>    13    </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'gold',        }}>    14    </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'greenyellow', }}>    15    </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'orange',      }}>    16    </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'dodgerblue',  }}>    17    </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'gold',        }}>    18    </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'greenyellow', }}>    19    </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'orange',      }}>    20    </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'dodgerblue',  }}>    21    </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'gold',        }}>    22    </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'greenyellow', }}>    23    </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'orange',      }}>    24    </Col>
                    </Row> */}

                    <Row style={styles.row}>
                        <Col lg={2} style={{ ...styles.col, }}>    <Hamburger />    </Col>
                        <Col lg={4} style={{ ...styles.col, backgroundColor: 'mediumpurple', }}>    
                            <img src={icon} style={{width: '50%',}}></img>
                            {/* <img src="./icon"></img> */}
                        </Col>
                        {/* <Col lg={4} style={{ ...styles.col, backgroundColor: 'mediumpurple', }}>    Name+Logo      </Col> */}
                        <Col lg={2} style={{ ...styles.col, backgroundColor: 'greenyellow',  }}>    CurrentPage    </Col>
                        <Col lg={1} style={{ ...styles.col, backgroundColor: 'blue',         }}>    Blank          </Col>
                        <Col lg={6} style={{ ...styles.col, }}>    <SearchBar />      </Col>
                        {/* <Col lg={6} style={{ ...styles.col, backgroundColor: 'mistyrose',    }}>    SearchBar      </Col> */}
                        <Col lg={5} style={{ ...styles.col, backgroundColor: 'blue',         }}>    Blank          </Col>
                        <Col lg={2} style={{ ...styles.col, backgroundColor: 'mediumpurple', }}>    SignIn         </Col>
                        <Col lg={2} style={{ ...styles.col, backgroundColor: 'mediumpurple', }}>    LogIn          </Col>
                    </Row>

                </Container>

            </div>
        </React.Fragment>
    )
}

const styles = {
    divStyle: {
        height: '100vh', width: '100vw', position: 'absolute', backgroundColor: '#303030',
    },
    row: {
        margin: 0, padding: 0,
    }
}


export default Layout