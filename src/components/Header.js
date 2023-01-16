import React from "react";
import Image from 'next/image'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SigninButton from "./SigninButton";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-main" >
      <Container>
        <Navbar.Brand href="#home"><Image src="/assets/Logo.svg" height={40} width={40} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-darker bg-lighter" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="rounded text-light w-max hover:px-4 hover:bg-lighter" href="#home">Home</Nav.Link>
          <Nav.Link className="rounded text-light w-max hover:px-4 hover:bg-lighter" href="#aboutUs">About Us</Nav.Link>
          <Nav.Link className="rounded text-light w-max hover:px-4 hover:bg-lighter" href="#services">Services</Nav.Link>
          <Nav.Link className="rounded text-light w-max hover:px-4 hover:bg-lighter" href="#Curriculum">Curriculum</Nav.Link>
          <Nav.Link className="rounded text-light w-max hover:px-4 hover:bg-lighter" href="#Tuition">Tuition</Nav.Link>
          <Nav.Link className="rounded text-light w-max hover:px-4 hover:bg-lighter" href="#contactUs">Contact Us</Nav.Link>
        </Nav>
        <SigninButton />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
