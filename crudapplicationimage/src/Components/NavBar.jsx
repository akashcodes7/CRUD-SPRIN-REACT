import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Navbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">
                  React Bootstrap
                  </Navbar.Brand>
                </Container>
                </Navbar>
            </div>
        );
        }
        }

export default Navbar;
