import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import NavbarMusic from "../../components/NavbarMusic";

import person from "../../assets/img/person.svg";
import "./style.css";



function Home() {
  return (
    <>
      <NavbarMusic />
      <Container className="container-principal" fluid >
        <Row className="home">
          <Col>
            <img src={person} alt="Pessoa ouvindo musica" width="100%" />
          </Col>

          
            <Row className="home-text">
              <Col>
              <h4 className="text-h4">Fell the Music</h4> 
              </Col>
              <Col>
              <h1 className="text-h1">Stream over 20 thousand songs with ame play</h1> 
              </Col>
              <Col>
              <a href="#" className="home-btn">Join now</a>
              </Col>
             
            </Row>
         
        </Row>
      </Container>
    </>
  );
}

export default Home;



