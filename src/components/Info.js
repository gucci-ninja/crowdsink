import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import db from '../config';

class Info extends React.Component {
   render() {
      return (
        <div>
          <Jumbotron>
            <h1>Built Using</h1>
            <Container>
              <Row>
                <Col xs={6} md={3}>
                  <Image src="react.ico" rounded />
                </Col>
                <Col xs={6} md={3}>
                  <Image src="node.png" rounded />
                </Col>
                <Col xs={6} md={3}>
                  <Image src="firebase.png" rounded />
                </Col>
                <Col xs={6} md={3}>
                  <Image src="docker.png" rounded />
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>
      );
   }
}

export default Info;