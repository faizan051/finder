import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card, Button } from 'react-bootstrap';
import SwiperStyle from '../Styles/SwiperStyle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from "swiper";
import ProgressBar from 'react-bootstrap/ProgressBar';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const Section = styled.div`
margin-top:5% ;
`
const now = 60;


const SwiperSlider = () => {
  return (
    <Section>
      <div>
      <h1 className="fs-4 ms-4 fw-bold">Search Property By City</h1>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper"
         
          spaceBetween={1}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}

          breakpoints={{
        820: {
          width: 820,
          slidesPerView: 2,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
        370: {
  slidesPerView: 1,
  spaceBetween: 10
 }
      }}


        >
          <SwiperSlide className=' mb-3 mx-2 SwiperMain'>
            <Card className='MainCard' style={{ width: '18rem' }}>
              <Card.Img className='MainImg' variant="top" src="./img/newyork.png" />
              <Card.Body>
                <Card.Title className="text-center fw-bold">New York</Card.Title>
              </Card.Body>
            </Card>
            <div className="MainClassHover">
            <div className="ProgrssClass py-5 px-4  ">
          <p className='mb-1' style={{color:"white"}}> <AccountBalanceWalletOutlinedIcon style={{fill:"white"}} className='me-1'/>Property on Sale</p>
          <div style={{width: '100%'}}><ProgressBar  variant="danger" now={now} label={`${now}%`} /></div>
          <p className='mt-2 mb-1' style={{color:"white"}}><HomeOutlinedIcon className='me-1'/>Property on Rents</p>
          <div style={{width: '100%'}}><ProgressBar  variant="success" now={now} label={`${now}%`} /></div>
          </div>
            </div>
         
          </SwiperSlide>
         
          
          <SwiperSlide className='mx-2'>
            <Card  className='MainCard' style={{ width: '18rem'}}>
              <Card.Img variant="top" src="./img/chicago.png" />
              <Card.Body>
                <Card.Title className="text-center fw-bold">Chicago</Card.Title>
              </Card.Body>
            </Card>
            <div className="MainClassHover">
            <div className="ProgrssClass py-5 px-4  ">
          <p className='mb-1' style={{color:"white"}}> <AccountBalanceWalletOutlinedIcon style={{fill:"white"}} className='me-1'/>Property on Sale</p>
          <div style={{width: '100%'}}><ProgressBar  variant="danger" now={now} label={`${now}%`} /></div>
          <p className='mt-2 mb-1' style={{color:"white"}}><HomeOutlinedIcon className='me-1'/>Property on Rents</p>
          <div style={{width: '100%'}}><ProgressBar  variant="success" now={now} label={`${now}%`} /></div>
          </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='mx-2'>
            <Card  className='MainCard' style={{ width: '18rem'}}>
              <Card.Img variant="top" src="./img/losangles.png" />
              <Card.Body>
                <Card.Title className="text-center fw-bold">Los Angles</Card.Title>
              </Card.Body>
            </Card>
            <div className="MainClassHover">
            <div className="ProgrssClass py-5 px-4  ">
          <p className='mb-1' style={{color:"white"}}> <AccountBalanceWalletOutlinedIcon style={{fill:"white"}} className='me-1'/>Property on Sale</p>
          <div style={{width: '100%'}}><ProgressBar  variant="danger" now={now} label={`${now}%`} /></div>
          <p className='mt-2 mb-1' style={{color:"white"}}><HomeOutlinedIcon className='me-1'/>Property on Rents</p>
          <div style={{width: '100%'}}><ProgressBar  variant="success" now={now} label={`${now}%`} /></div>
          </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='mx-2'>
            <Card  className='MainCard' style={{ width: '18rem'}}>
              <Card.Img variant="top" src="./img/sandiago.png" />
              <Card.Body>
                <Card.Title className="text-center fw-bold">San Diego</Card.Title>
              </Card.Body>
            </Card>
            <div className="MainClassHover">
            <div className="ProgrssClass py-5 px-4  ">
          <p className='mb-1' style={{color:"white"}}> <AccountBalanceWalletOutlinedIcon style={{fill:"white"}} className='me-1'/>Property on Sale</p>
          <div style={{width: '100%'}}><ProgressBar  variant="danger" now={now} label={`${now}%`} /></div>
          <p className='mt-2 mb-1' style={{color:"white"}}><HomeOutlinedIcon className='me-1'/>Property on Rents</p>
          <div style={{width: '100%'}}><ProgressBar  variant="success" now={now} label={`${now}%`} /></div>
          </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='mx-2'>
            <Card  className='MainCard' style={{ width: '18rem'}}>
              <Card.Img variant="top" src="./img/dallas.png" />
              <Card.Body>
                <Card.Title className="text-center fw-bold">Dallas</Card.Title>
              </Card.Body>
            </Card>
            <div className="MainClassHover">
            <div className="ProgrssClass py-5 px-4  ">
          <p className='mb-1' style={{color:"white"}}> <AccountBalanceWalletOutlinedIcon style={{fill:"white"}} className='me-1'/>Property on Sale</p>
          <div style={{width: '100%'}}><ProgressBar  variant="danger" now={now} label={`${now}%`} /></div>
          <p className='mt-2 mb-1' style={{color:"white"}}><HomeOutlinedIcon className='me-1'/>Property on Rents</p>
          <div style={{width: '100%'}}><ProgressBar  variant="success" now={now} label={`${now}%`} /></div>
          </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='mx-2'>
            <Card  className='MainCard' style={{ width: '18rem'}}>
              <Card.Img variant="top" src="./img/newyork.png" />
              <Card.Body>
                <Card.Title className="text-center fw-bold">New York</Card.Title>
              </Card.Body>
            </Card>
            <div className="MainClassHover">
            <div className="ProgrssClass py-5 px-4  ">
          <p className='mb-1' style={{color:"white"}}> <AccountBalanceWalletOutlinedIcon style={{fill:"white"}} className='me-1'/>Property on Sale</p>
          <div style={{width: '100%'}}><ProgressBar  variant="danger" now={now} label={`${now}%`} /></div>
          <p className='mt-2 mb-1' style={{color:"white"}}><HomeOutlinedIcon className='me-1'/>Property on Rents</p>
          <div style={{width: '100%'}}><ProgressBar  variant="success" now={now} label={`${now}%`} /></div>
          </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='mx-2'>
            <Card  className='MainCard' style={{ width: '18rem'}}>
              <Card.Img variant="top" src="./img/chicago.png" />
              <Card.Body>
                <Card.Title className="text-center fw-bold">Chicago</Card.Title>
              </Card.Body>
            </Card>
            <div className="MainClassHover">
            <div className="ProgrssClass py-5 px-4  ">
          <p className='mb-1' style={{color:"white"}}> <AccountBalanceWalletOutlinedIcon style={{fill:"white"}} className='me-1'/>Property on Sale</p>
          <div style={{width: '100%'}}><ProgressBar  variant="danger" now={now} label={`${now}%`} /></div>
          <p className='mt-2 mb-1' style={{color:"white"}}><HomeOutlinedIcon className='me-1'/>Property on Rents</p>
          <div style={{width: '100%'}}><ProgressBar  variant="success" now={now} label={`${now}%`} /></div>
          </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='mx-2'>
            <Card  className='MainCard' style={{ width: '18rem'}}>
              <Card.Img variant="top" src="./img/losangles.png" />
              <Card.Body>
                <Card.Title className="text-center fw-bold">Los Angles</Card.Title>
              </Card.Body>
            </Card>
            <div className="MainClassHover">
            <div className="ProgrssClass py-5 px-4  ">
          <p className='mb-1' style={{color:"white"}}> <AccountBalanceWalletOutlinedIcon style={{fill:"white"}} className='me-1'/>Property on Sale</p>
          <div style={{width: '100%'}}><ProgressBar  variant="danger" now={now} label={`${now}%`} /></div>
          <p className='mt-2 mb-1' style={{color:"white"}}><HomeOutlinedIcon className='me-1'/>Property on Rents</p>
          <div style={{width: '100%'}}><ProgressBar  variant="success" now={now} label={`${now}%`} /></div>
          </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </Section>
  )
}

export default SwiperSlider