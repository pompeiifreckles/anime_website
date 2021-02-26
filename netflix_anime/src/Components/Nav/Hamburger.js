import React from 'react';
import { Drawer, ButtonToolbar, IconButton, Icon, Button, Paragraph } from 'rsuite';

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
        <div>

          <ButtonToolbar>

            <IconButton
              onClick={() => this.toggleDrawer('left')}
              icon={<Icon icon="bars" size="lg" style={{backgroundColor: 'rgba(48, 48, 48, 1)', color: 'white',}}  />}
            >
            </IconButton>

          </ButtonToolbar>
  
          <Drawer
            size={this.state.size}
            placement={this.state.placement}
            show={this.state.show}
            onHide={this.close}
          >

            <Drawer.Header style={{backgroundColor: 'rgba(48, 48, 48, 1)', color: 'white'}}>
              <Drawer.Title style={{backgroundColor: 'rgba(48, 48, 48, 1)', color: 'white'}}>Menu    </Drawer.Title>
            </Drawer.Header>

            <Drawer.Body style={{backgroundColor: 'rgba(48, 48, 48, 1)', color: 'white'}} >
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