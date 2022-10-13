import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <>
 
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Localib</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/vehicule">
               <Nav.Link >Gestion Vehicule</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/locataire">
               <Nav.Link >Gestion Locataire</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      
    
    </>
  )
}

export default Header