import React from 'react'
import { Container,  Row, Col} from "react-bootstrap";
import NavbarMusic from "../../components/NavbarMusic";
import Footer from "../../components/Footer";





import group from "../../assets/img/group.svg";
import Group6 from "../../assets/img/Group 6.svg";
import Group5 from "../../assets/img/Group 5.svg";
import Group4 from "../../assets/img/Group 4.svg";


import "./style.css"


function DiscoverMusic(){

   return(
      <>
        <NavbarMusic />
     
    <Container className='home-content' fluid >
        <Row className="grupo-play" >

             <Row  className='play'> 
                    <Col><h4 className="titulo-paly">Discover new music</h4></Col>

                  <Row className='img-play'>
                       <Col > <img src={Group6} alt="imagens"/> </Col>
                       <Col > <img src={Group5} alt="imagens"/></Col>
                       <Col > <img src={Group4} alt="imagens"/></Col>
                  </Row>

                <Col className='sub-titulo-play'><h1 >Best Music you will ever want to <br></br>listen to,is here</h1></Col>
            </Row>

                 <Col className='img-principal'> <img src={group} alt="imagens" width="100%" /></Col>
        
        </Row>
         </Container>
         <Footer />
       
         
         </>
          
     );


};

export default DiscoverMusic;