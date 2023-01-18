'use client';
import React from "react";
import Image from 'next/image'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoutButton from "src/app/teacher-gradebook/Dashboard/LogoutButton.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-main" >
      <Container>
        <Navbar.Brand href="#home"><Image src="/assets/Logo.svg" height={40} width={40} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-darker bg-lighter" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="rounded text-light w-max hover:px-4 hover:bg-lighter" href="/admin">Create</Nav.Link>
          <Nav.Link className="rounded text-light w-max hover:px-4 hover:bg-lighter" href="/">Classes</Nav.Link>
          <Nav.Link className="rounded text-light w-max hover:px-4 hover:bg-lighter" href="/">Students</Nav.Link>
          <Nav.Link className="rounded text-light w-max hover:px-4 hover:bg-lighter" href="/">Teachers</Nav.Link>

          
        </Nav>
        <span class="text-light py-2 pr-9">Welcome , AdminName</span>
        <LogoutButton />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
