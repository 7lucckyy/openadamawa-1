import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap';
import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Open Adamawa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey="" className="ms-auto">
            <Nav.Link onClick={()=>navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate("/about")}>About</Nav.Link>
            <Nav.Link onClick={()=>navigate("/projects")}>Projects</Nav.Link>
            <Nav.Link onClick={()=>navigate("/visualization")}>Visualization</Nav.Link>
            <Nav.Link onClick={()=>navigate("/community-dev-plan")}>Community Dev. Plan</Nav.Link>
            <Nav.Link onClick={()=>navigate("/contact")}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header