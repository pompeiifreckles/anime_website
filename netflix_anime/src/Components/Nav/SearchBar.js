import { Input, InputGroup } from 'rsuite';
import { Icon } from 'rsuite';

function SearchBar() {
return (
    <div>
        <InputGroup style={styles}>
            <Input style={{ color: 'whitesmoke', backgroundColor: 'rgba(48, 48, 48, 1)' }}/>
            <InputGroup.Button style={{ color: 'whitesmoke', backgroundColor: 'rgba(70, 70, 70, 1)' }}>
            <Icon icon="search" />
            </InputGroup.Button>
        </InputGroup>

    
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
        </div>
        
    )
}

const styles = {
    width: "100%",
    borderWidth: 2,
    borderColor: 'rgba(70, 70, 70, 1)',
    borderRadius: 10,
    margin: 0,
    padding:0,
};

export default SearchBar