import React from 'react';
import { 
    Container, 
    Header, 
    Content, 
    Footer, 
    Sidebar, 
    Nav, 
    Navbar, 
    FlexboxGrid, 
    Panel,Form, 
    FormControl, 
    FormGroup, 
    ControlLabel, 
    ButtonToolbar, 
    Button 
} from 'rsuite';



function LogInPage() {
    
    return (
        <div className="Sign Up" style={styles.div}>
            <Container >
                <Header>
                    <Navbar appearance="inverse">
                    {/* <Navbar.Header>
                        <a className="navbar-brand logo">Brand</a>
                    </Navbar.Header> */}
                    </Navbar>
                </Header>
                {/* <Content> */}
                <Content style={styles.box}>
                    <FlexboxGrid justify="center">
                    <FlexboxGrid.Item colspan={12}>
                        <Panel header={<h3 style={{color:'white', fontFamily: 'Roboto'}}>SIGN UP</h3>} bordered>
                        <Form fluid>
                            <FormGroup>
                            <ControlLabel>Username or email address</ControlLabel>
                            <FormControl name="name" />
                            </FormGroup>
                            <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl name="password" type="password" />
                            </FormGroup>
                            <FormGroup>
                            <ButtonToolbar>
                                <Button appearance="primary">Login</Button>
                            </ButtonToolbar>
                            </FormGroup>
                        </Form>
                        </Panel>
                    </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
                <Footer></Footer>
            </Container>
        </div>
    );
}

const styles = {
    div: {
        display: 'flex',
        backgroundColor: '#303030',
        color: 'white',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        position: 'relative',
        width: '40%',
        margin: 'auto',
        // backgroundColor: 'blue'
    }
};

export default LogInPage