import React from 'react'
import { Col, Container, Dropdown, DropdownButton, NavDropdown, Row } from 'react-bootstrap';
import styled from 'styled-components'
import SlideStyle from '../Styles/SlideStyle.css'
import Dropdownsec from './Dropdownsec';

const Section = styled.div`
overflow:hidden;

`;



const Slide = () => {
  return (

    <Section>
    <Container fluid>
<Row>
    <Col lg="7" md="5" className='py-5 px-5'>
<h2 className='mt-5 Heading'>
    Easy Way to Find Perfect Property
</h2>
<p className='mt-3 Para'>
We provide a complete service for the sale, purchase or rental of real estate. We have been operating more than 10 years. Search millions of apartments and houses on Finder.
</p>
    </Col>
    <Col lg="5" md="5" className='mt-5 mt-sm-0'> 
     <img className="ImageClass" src='./img/hero.png' />
    </Col>
</Row>
    <Dropdownsec className='Drop'/>
    </Container>


    </Section>

  
  
  )
}

export default Slide