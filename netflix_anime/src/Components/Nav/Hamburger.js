import React from 'react';
import { Drawer, ButtonToolbar, IconButton, Icon } from 'rsuite';

// import { withBaseIcon } from 'react-icons-kit';
// import {  GiHamburgerMenu } from "react-icons/gi"

// const HamContainer  = withBaseIcon({ size: 40, style: {color: '#ffffff'}})
// const HamburgerIcon = () =>  <HamContainer icon={ GiHamburgerMenu }/>

class Demo extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        size: 'xs',
        show: false
      };
      this.close = this.close.bind(this);
      this.toggleDrawer = this.toggleDrawer.bind(this);
    }

  close() { this.setState({ show: false }); }
  toggleDrawer(placement) {
    this.setState({
      placement,
      show: true
    });
  }
  render() {
    return (
      <div>   {/* <div  style={{backgroundColor: 'rgba(48, 48, 48, 1)'}} > */}

        <ButtonToolbar>

          <IconButton size="lg"
            onClick={() => this.toggleDrawer('left')}
            icon={
              <Icon 
                icon="bars"
                // style={{ backgroundColor: 'rgb(70,70,70)', color: 'white',}}
            />}
          >
          </IconButton>

        </ButtonToolbar>

        <Drawer
          style={{ backgroundColor: 'tomato', color: 'tomato' }}
          backdrop
          keyboard
          size={this.state.size}
          placement={this.state.placement}
          show={this.state.show}
          onHide={this.close}
        >

          <Drawer.Header>
            <Drawer.Title>
                Menu    
            </Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
          {/* style={{backgroundColor: 'rgba(48, 48, 48, 1)', color: 'white'}}  */}
            {/* <Paragraph /> */}
          </Drawer.Body>

          {/* <Drawer.Footer style={{backgroundColor: 'rgba(48, 48, 48, 1)', color: 'white'}}>
            <Button onClick={this.close} appearance="primary"> Confirm </Button>
            <Button onClick={this.close} appearance="subtle">  Cancel  </Button>
          </Drawer.Footer> */}

        </Drawer>
      </div>
    );
  }
}


export default Demo