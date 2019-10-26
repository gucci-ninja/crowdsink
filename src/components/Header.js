import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import db from '../config';


class Header extends React.Component {
   constructor() {
      super()
      this.state = {
         name: "CROWDSINK"
      }
   }

   componentDidMount() {
      db.collection('companies')
        .doc('JetBlue')
        .onSnapshot((snap) => {
          this.setState({
            name: snap.data().name
          })
        });
   }

   render() {
      return (
         <div>
            <Navbar bg="dark" variant="dark">
               <Navbar.Brand href="#home">{this.state.name}</Navbar.Brand>
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