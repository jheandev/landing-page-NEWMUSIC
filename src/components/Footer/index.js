import React from "react";
import "./style.css";


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return (
    <header >
      <footer className="footer">
        <Row className="footer-col">

          <Row className="footer-gri1">
          <Col>About us</Col>
          <Col>Contact</Col>
          </Row>
        
          <Row className="footer-gri1">
          <Col>Follow</Col>
          <Col>Feedback</Col>
          </Row>




        </Row>
      </footer>
      </header>
    );
  }

export default Footer;
