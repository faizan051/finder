import React from 'react'
import styled from 'styled-components'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import { Button } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import Footerstyle from '../Styles/Footerstyle.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';

const Section = styled.div`
margin-top:6% ;
background-color:#f5f4f8 ;
padding:15px ;
`

const Footer = () => {
  return (
    <Section>
        <div className='d-flex row'>
        <div className='col-lg-8 d-flex flex-column-sm Minwidth'>

        <div className='footer-1 col-lg-3 me-5 col-md-3'>
             <div className='logo'>
               <img src='./img/Finder.png'/>
             </div>
             <div className='text d-flex flex-column text-left mt-2'>
             <p><MailOutlineIcon/> info@finder.com</p>
             <p><PhoneAndroidOutlinedIcon/> +06385444214</p>
             </div>
             <div className='social-icons d-flex'> 
                <Button className='social-btn mx-1'><FacebookIcon className='socialicon'/></Button>
                <Button className='social-btn mx-1'><Instagram className='socialicon'/></Button>
                <Button className='social-btn mx-1'><TwitterIcon className='socialicon'/></Button>
             </div>
             
        </div>
        <div className='footer-1 col-md-4 ms-lg-5 col-lg-2 mt-1'>
             <div className='logo'>
               <h2 className='fs-5 fw-bold' >Quick Links</h2>
             </div>
             <div className='text d-flex flex-column text-left'>
            <a className='links mt-1' href='http://www.google.com'>Buy a Property</a>
            <a className='links mt-1' href='http://www.google.com'>Rent a Property</a>
            <a className='links mt-1' href='http://www.google.com'>Sell a Property</a>
            <a className='links mt-1' href='http://www.google.com'>Calculate your Property</a>
            <a className='links mt-1' href='http://www.google.com'>Top offers</a>
            <a className='links mt-1' href='http://www.google.com'>Top Cities</a>
            
             </div>
             
             
        </div>
        <div className='footer-1 col-md-4 ms-lg-5 col-lg-2 mt-1'>
             <div className='logo'>
               <h2 className='fs-5 fw-bold' >About</h2>
             </div>
             <div className='text d-flex flex-column text-left'>
            <a className='links mt-1' href='http://www.google.com'>About us</a>
            <a className='links mt-1' href='http://www.google.com'>Out Agent</a>
            <a className='links mt-1' href='http://www.google.com'>Help And Support</a>
            <a className='links mt-1' href='http://www.google.com'>Contact</a>
            <a className='links mt-1' href='http://www.google.com'>News</a>

            
             </div>
             
             
        </div>
       
</div>
        
<div className='col-md-12 col-lg-4 mt-md-2 mb-md-3 col-sm-6' >
<div className='recent-post'>
       <div className='logo'>
               <h2 className='fs-5 fw-bold' >Recent Posts</h2>
             </div>

<div className='post-1 d-flex mt-3 '>
    <img src="./img/the.png" width="100px" className='Image'/>
   <div className='d-flex flex-column ms-2'>
   <a style={{color: '#fd5631'}} className='link' href='http://www.google.com'>Home Improvment</a>
   <h4 className='fs-5 fw-bold'>Your Guide to a Smart Apartment Searching</h4>
    <p>Mi justo, varius vit Ipsum enim sit nulla ridiculus semper nam...</p>
   </div>
</div>
<hr/>
<div className='post-1 d-flex mt-3'>
    <img src="./img/the1.png" width="100px" className='Image'/>
   <div className='d-flex flex-column ms-2'>
   <a style={{color: '#fd5631'}} className='link' href='http://www.google.com'>Tips And Advice</a>
   <h4 className='fs-5 fw-bold'>Top 10 Ways to Refresh Your Space</h4>
    <p>Mi justo, varius vit Ipsum enim sit nulla ridiculus semper nam...</p>
   </div>
</div>

       </div>
</div>
       </div>

        

<div className="footer-2 d-flex row">

<div className='MainImage col-md-4'>
    <img src="./img/mobile.png" alt="" />
</div>
<div className="text col-md-8 col-12">
<div className="col-md-4 texttitle">
    <h1 className="fs-2 title mt-5 ms-5">Download Our App</h1>
    <p  className="mt-1 ms-5 w-100" style={{color: "white", width:"60%"}} >Find everything you need for buying, selling & renting property in our new Finder App!</p>
</div>
<div className="Icons d-flex justify-content-around col-md-2 ">

   <a> <img className="w-100 me-2" src='./img/apple.png'/> </a>
   <a> <img className="w-100 ms-2" src='./img/google.png'/> </a>
</div>
</div>

</div>

<div className="container copyright mt-4 mb-1 text-center">
    <p style={{color:'gray'}}>© All rights reserved.Made by <span>Faizan</span></p>
</div>

    </Section>
  )
}

export default Footer