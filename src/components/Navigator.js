import React from "react";
import { Navbar ,Nav, Button } from "react-bootstrap";
import logo from '../images/pigicon.046c4398.svg'

const Navigator = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"><img src={logo}  style ={{width:"32px"}} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
            <Button variant="btn btn-danger">Start saving</Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigator;
