import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Header extends React.Component {
   render() {
      return (
         <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">CrowdSink</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#hypothesis">Our Hypothesis</Nav.Link>
                <Nav.Link href="#demo">Demo</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
         </div>
      );
   }
}

export default Header;