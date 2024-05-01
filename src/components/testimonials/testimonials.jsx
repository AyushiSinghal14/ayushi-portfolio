import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.jpeg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
 


function testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review From Team Members</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
         <div className="client_avatar">
          <img src={AVTR1} alt="Avatar One" />
         </div>
         <h5 className="client_name">Khushi Deewania - Web Developer</h5>
          <small className="client_review">
          I had the pleasure of working with Ayushi Singhal on a web development project, and the experience was nothing short of exceptional. Ayushi's expertise in AI and ML shone through, transforming a complex problem into a user-friendly solution.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
         <div className="client_avatar">
          <img src={AVTR2} alt="Avatar One" />
         </div>
         <h5 className="client_name">Harshita Khurana - Health Tech Enthusiast</h5>
          <small className="client_review">
          Ayushi's project is a game-changer in the health tech industry. It addresses the discomfort associated with invasive health metrics using AI and ML, and the results are astounding.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
         <div className="client_avatar">
          <img src={AVTR3} alt="Avatar One" />
         </div>
         <h5 className="client_name">Vardhan Singhal - User Experience Designer</h5>
          <small className="client_review">
          Working on a project with Ayushi was a delightful experience. Their commitment to improving user comfort and convenience in health monitoring is evident in their work. 
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
         <div className="client_avatar">
          <img src={AVTR4} alt="Avatar One" />
         </div>
         <h5 className="client_name">Vinay Garg - Software Engineer</h5>
          <small className="client_review">
          I had the privilege of collaborating with Ayushi on a project, and I was thoroughly impressed by their technical skills and problem-solving abilities. 
          </small>
        </SwiperSlide>
        

     
      </Swiper>
    </section>
  )
}

export default testimonials