import React from "react";

import { Navbar, Container, Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Footer from "../../components/Footer";

import NavbarMusic from "../../components/NavbarMusic";
import "./style.css";

function JoinMusic() {
  return (
    <>
         <NavbarMusic />

  <div className="event-principal">

<div className="form-titulo">
       <h2>Join the <span>fun</span>.</h2>
</div>

   <div  className="right-login">
           <div className="card-login">
  
          <div className="form-group">
              <label For="name">Nome:</label>
              <input type="text " name="name" />
          </div>          
              

          <div className="form-group">
              <label For="email">E-mail:</label>
              <input type="email" name="emmail" />
          </div>

          <div className="form-group">
              <label For="Password">Password:</label>
              <input type="password=" name="Passaword" />
          </div>
              
              <input type="submit " className="btn" value="Join now"></input>




    </div>
   </div>
   </div>



    


        <Footer />
    </>
  );
}

export default JoinMusic;