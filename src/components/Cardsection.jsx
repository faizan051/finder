import React from 'react'
import styled from 'styled-components'
import { Card } from 'react-bootstrap'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ApartmentOutlinedIcon from '@material-ui/icons/ApartmentOutlined';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import DomainOutlinedIcon from '@material-ui/icons/DomainOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import CardSectionStyle from '../Styles/CardSectionStyle.css'
import AccountBalanceOutlined from '@material-ui/icons/AccountBalanceOutlined';
const Section = styled.div`
margin-top:12% ;
`



const CardSection = () => {
  return (
    <Section className=' row d-flex align-content-center justify-content-center MarginClass'>
    <div  className="d-flex col-md-12 ms-md-3 col-lg-5 me-lg-5 col-sm-12 MarginClass">
  <div className="col-md-4 col-lg-3 me-3 ms-0 col-sm-3">
   <Card style={{  width: '174px', height: '138px ' }} className="card-section mx-1">
   <div className='Card-main d-flex align-content-center justify-content-center'>
<div className='rounded-circle mt-4 p-2 CardHover' >

<HomeOutlinedIcon className='Card-icon' style={{fontSize: '3rem'}} />
</div>
   </div>
     <Card.Body className="text-center">
       <Card.Title>Houses</Card.Title>
       
     </Card.Body>
   </Card>
   </div>
   <div className='col-md-4 col-lg-3 ms-5 me-3 me-md-0 ms-md-1 mx-lg-5 col-sm-3'>
   <Card style={{  width: '174px', height: '138px ' }} className="card-section mx-1">
   <div className='Card-main d-flex align-content-center justify-content-center'>
<div className='rounded-circle mt-4 p-2 CardHover' >

<ApartmentOutlinedIcon className='Card-icon' style={{fontSize: '3rem'}} />
</div>
   </div>
     <Card.Body className="text-center">
       <Card.Title>Apartments</Card.Title>
       
     </Card.Body>
   </Card>
</div>
   
   <div className='col-md-4 col-lg-3 ms-5 ms-lg-3 col-sm-3'>
   <Card style={{  width: '174px', height: '138px ' }} className="card-section mx-1">
   <div className='Card-main d-flex align-content-center justify-content-center'>
<div className='rounded-circle mt-4 p-2 CardHover' >

<StoreOutlinedIcon className='Card-icon' style={{fontSize: '3rem'}} />
</div>
   </div>
     <Card.Body className="text-center">
       <Card.Title>Commercials</Card.Title>
       
     </Card.Body>
   </Card>
   </div>
   </div>

   <div className="d-flex col-md-12 mt-md-2 ms-md-3 col-lg-5 mt-lg-0 me-lg-5 me-md-5 ms-md-4 col-sm-6">
   <div className='col-md-4 col-lg-3 me-3 ms-3 '>
   <Card style={{  width: '174px', height: '138px ' }} className="card-section mx-1">
   <div className='Card-main d-flex align-content-center justify-content-center'>
<div className='rounded-circle mt-4 p-2 CardHover' >

<AccountBalanceOutlinedIcon className='Card-icon' style={{fontSize: '3rem'}} />
</div>
   </div>
     <Card.Body className="text-center">
       <Card.Title>Daily Rental</Card.Title>
       
     </Card.Body>
   </Card>
   </div>
   <div className='col-md-4 col-lg-3  ms-5 me-3 me-md-0 ms-md-1 mx-lg-5'>
   <Card style={{  width: '174px', height: '138px ' }} className="card-section mx-1">
   <div className='Card-main d-flex align-content-center justify-content-center'>
<div className='rounded-circle mt-4 p-2 CardHover' >

<DomainOutlinedIcon className='Card-icon' style={{fontSize: '3rem'}} />
</div>
   </div>
     <Card.Body className="text-center">
       <Card.Title>New Building</Card.Title>
       
     </Card.Body>
   </Card>
   </div>
   <div className='col-md-4 col-lg-4 ms-5 ms-lg-3'>
   <Card style={{  width: '174px', height: '138px ' }} className="card-section mx-1">
   <div className='Card-main d-flex align-content-center justify-content-center'>
<div className='rounded-circle mt-4 p-2 CardHover' >

<MoreHorizOutlinedIcon className='Card-icon' style={{fontSize: '3rem'}} />
</div>
   </div>
     <Card.Body className="text-center">
       <Card.Title>More</Card.Title>
       
     </Card.Body>
   </Card>
   </div>
   </div>
   </Section>
  )
}

export default CardSection