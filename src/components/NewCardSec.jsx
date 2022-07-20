import React from 'react'
import { Container,Card } from 'react-bootstrap'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ApartmentOutlinedIcon from '@material-ui/icons/ApartmentOutlined';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import DomainOutlinedIcon from '@material-ui/icons/DomainOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import CardSectionStyle from '../Styles/CardSectionStyle.css'
import AccountBalanceOutlined from '@material-ui/icons/AccountBalanceOutlined';
import NewCardSecStyle from '../Styles/NewCardSecStyle.css'



const NewCardSec = () => {
  return (


    <Container className="mb-5">
        <div className='row row-cols-lg-6 row-cols-sm-3 row-cols-2 g-3 g-xl-4 gx-5 g-lg-5'>
            <div className='col'>
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
        
        <div>
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

        <div className='col'>
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

        <div className="col">
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

        <div className="col">
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

       <div className="col">
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
    </Container>

  )
}

export default NewCardSec