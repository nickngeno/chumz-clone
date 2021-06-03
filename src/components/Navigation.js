import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../images/pigicon.046c4398.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} style={{ width: "32px" }} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-3">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/team" className="nav-link">
              Team
            </Link>
          </Nav>
          <Button variant="btn btn-danger">Start saving</Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
