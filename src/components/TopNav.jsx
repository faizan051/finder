import React from 'react'
import styled from 'styled-components';
import {Container, Nav, NavDropdown,Navbar, Button} from 'react-bootstrap';
import Navstyle from '../Styles/Navstyle.css'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const Logo = styled.img`

`;

const Icon = styled.div`

`


const TopNav = () => {
  return (
<div>
    <Navbar bg="light" expand="lg" className="fixed-top" >
    <Container fluid style={{overflow: 'hidden'}}>
      <Navbar.Brand href="#home"><Logo src='./img/Finder.png'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
       
          <NavDropdown title="Demos" id="basic-nav-dropdown" className='ms-lg-3 ms-2'>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Home" id="basic-nav-dropdown" className='ms-lg-5 ms-md-3 ms-2'>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Pages" id="basic-nav-dropdown" className='mx-2 ms-md-3'>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Vendors" id="basic-nav-dropdown" className='mx-2 ms-md-3'>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Catelog" id="basic-nav-dropdown" className='mx-2 ms-md-3'>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Accounts" id="basic-nav-dropdown" className='mx-2 ms-md-3'>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

          <Icon className='Main-btn ms-lg-5'>
           <PersonOutlineIcon className='me-auto ms-lg-5' style={{ fill: '#fd6545' }} />
           <Button variant="light" className='button' style={{ color: '#fd6545' }} >Sign In</Button>
          </Icon>
        </Nav>
      </Navbar.Collapse>

      <a className="me-lg-5" role="button" style={{ background: '#fd5631', color:"white", textDecoration: 'none' }} className="border-0 py-3 rounded-2 px-2 button-1" >+ Add property</a>
    </Container> 
  </Navbar>
  
</div>
    
  )
}

export default TopNav