import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Section = styled.div`
margin-top:5%;
`;

const Partner = () => {
  return (
 <Section>
       <div>
       <h1 className="fs-3 ms-4 fw-bold">Our Partners</h1>
       <Swiper pagination={true} modules={[Pagination]} className="mt-4 mySwiper"
       spaceBetween={1}
          slidesPerView={5}

          breakpoints={{
        820: {
          width: 820,
          slidesPerView: 3,
        },
        768: {
          width: 768,
          slidesPerView: 3,
        },
        370: {
  slidesPerView: 2,
  spaceBetween: 10
 }
      }}
>
        <SwiperSlide className="mb-4">
            <div className='mx-2'>
              <img src="./img/part1.jpg" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mx-2'>
              <img src="./img/part6.jpg" />
            </div>
        </SwiperSlide>
        <SwiperSlide><div className='mx-2'>
              <img src="./img/part2.jpg" />
            </div></SwiperSlide>
        <SwiperSlide><div className='mx-2'>
              <img src="./img/part3.jpg" />
            </div></SwiperSlide>
        <SwiperSlide><div className='mx-2'>
              <img src="./img/part4.jpg" />
            </div></SwiperSlide>
        <SwiperSlide><div className='mx-2'>
              <img src="./img/part5.jpg" />
            </div></SwiperSlide>
        
      </Swiper>
       </div>
 </Section>
  )
}

export default Partner