import React from 'react'
import { Button } from 'react-bootstrap';
import styled from 'styled-components'
import CalcSectionStyle from '../Styles/CalcSectionStyle.css';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

const Section = styled.div`
margin-top:5% ;
`
const Image = styled.img``;

const CalcSection = () => {
  return (
    <Section>
<div className=" row d-flex flex-lg-row ">
<div className="col-lg-6 col-sm-12">   
<img  src="./img/calculator.png "/>
</div>
    <div className="ms-5 d-flex justify-content-center align-content-center flex-column col-sm-12 col-lg-5">
     <h1 className="fw-bold mt-sm-2">Calculate the cost of your property</h1>
     <p style={{width:"70%", color:"gray"}}>Real estate appraisal is a procedure that allows you to determine the average market value of real estate (apartment, house, land, etc.). Сalculate the cost of your property with our new Calculation Service.</p>
     <Button className='SectionButton py-3 me-md-2  py-lg-2'><CalendarTodayOutlinedIcon className='me-2'/>Calculate</Button>
    </div>
</div>


    </Section>
  )
}

export default CalcSection