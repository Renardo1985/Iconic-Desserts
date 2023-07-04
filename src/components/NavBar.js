import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar  data-bs-theme="dark">
      <Container fluid>
        <Nav>
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" exact to="/menu">
            Menu
          </NavLink>
          <NavLink className="nav-link" exact to="/corporate">
            Corporate
          </NavLink>
          <NavLink className="nav-link" exact to="/order">
           Order
          </NavLink>
          <NavLink className="nav-link" exact to="/gallery">
            Gallery
          </NavLink> 
        </Nav>
        <Navbar.Collapse className="justify-content-end">
        <Nav>
        <NavLink className="nav-link" to="/about">
            FAQ
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    
  );
}

export default NavBar;