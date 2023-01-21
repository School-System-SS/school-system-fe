import React from "react";
import Image from 'next/image'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoutButton from "./LogoutButton";
import "bootstrap/dist/css/bootstrap.min.css";

export default function StudentHeader() {
  return (

    <Navbar collapseOnSelect expand="lg" className=" bg-main" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><Image src="/assets/Logo.svg" height={40} width={40} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-darker bg-lighter" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="pr-4 me-auto">

          </Nav>
          <span class="text-light py-2 pr-9">Welcome , StudentName</span>
          <LogoutButton />
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}