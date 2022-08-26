import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Open Adamawa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={pathname} className="ms-auto">
            <Nav.Link onClick={()=>navigate("/")}>Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link onClick={()=>navigate("/visualization")}>Visualization</Nav.Link>
            <Nav.Link href="/login"><i className="fa fa-user mr-1" aria-hidden="true"></i>Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header