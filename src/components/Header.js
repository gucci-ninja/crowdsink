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
         .collection('reviews')
         .onSnapshot((snap) => {
            // console.log(snap.docs); //querysnapshot of array
            snap.forEach((s) => {
               // console.log(s.get('sentiment'), ":", s.get('text'))
            })
            // this.setState({
            //    name: snap.data().text
            // })
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
                     <Nav.Link href="#hypothesis">Our Hypothesis</Nav.Link>
                     <Nav.Link href="#demo">Demo</Nav.Link>
                     <Nav.Link href="#info">More Information</Nav.Link>


                  </Nav>
               </Navbar.Collapse>
            </Navbar>
         </div>
      );
   }
}

export default Header;