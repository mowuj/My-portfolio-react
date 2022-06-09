import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" className='fixed-top'>
  <Container >
    <Navbar.Brand className='nav-band' href="#">Ahsan Habib</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto nav-li my-2 my-lg-0"
        // style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className='nav-li-link' href="#home">Home</Nav.Link>
      <Nav.Link className='nav-li-link' href="#about">About</Nav.Link>
      <Nav.Link className='nav-li-link' href="#services">Services</Nav.Link>
      <Nav.Link className='nav-li-link' href="#projects">Projects</Nav.Link>
        
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>

  
        </div>
    );
};

export default Header;