import React from "react";

import { Navbar, Container, Button, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import "./style.css";

function NavbarMusic() {
  return (

<header>
    <nav className="navigation">
    <div className="logo-titulo-nav">
        <img  className="logo" src={logo} alt="logo navbar"  />
        <p className="titulo-logo"><a href="#">Sound ware</a></p>
    </div>
    

<ul className="nav-menu"> 

     <button className="nav-item"><a href="contact">Discover</a></button>
     <button className="nav-item"><a href="about">JOIN</a>
     </button>

</ul>

    </nav>
</header>


  );
}

export default NavbarMusic;