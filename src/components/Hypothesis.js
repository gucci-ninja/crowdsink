import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import db from '../config';

class Hypothesis extends React.Component {
   render() {
      return (
        <div>
          <Jumbotron>
            <h1>Our Hypothesis</h1>
            <p>
              This is where we will explain our hypothesis.
              <br></br>
              This is where we will explain our hypothesis.
              <br></br>
              This is where we will explain our hypothesis.
              <br></br>
            </p>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src="happy.png" rounded />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="sad.png" rounded />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="stonks.png" rounded />
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>
      );
   }
}

export default Hypothesis;