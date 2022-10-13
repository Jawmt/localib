import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Localib</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Gestion Vehicule</Nav.Link>
            <Nav.Link href="#pricing">Gestion locataire</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header