import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.jpeg'
import AVTR4 from '../../assets/avatar4.jpg'

//import Swiper Core and required modules
import { Pagination} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
  avatar: AVTR1,
  name: 'Tina Snow',
  review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid repudiandae et explicabo facere debitis dolorem dolor, tempore, vel eum error aut fugiat cum sit molestias!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, odio?'
},
{
  avatar: AVTR2,
  name: 'Shatta Walia',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quia eveniet quod maiores soluta earum, nesciunt est commodi repellat voluptas dicta error ab nobis ipsa ea ipsam.'
},
{
  avatar: AVTR3,
  name: 'Kwame Despite',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla minus vero saepe eaque reiciendis perferendis officiis culpa minima est!'
},
{
  avatar: AVTR4,
  name: 'Nana Ama McBrown',
  review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti earum incidunt, quibusdam aliquid ad ipsum! Iste atque deserunt alias odio placeat a architecto. Non quae reiciendis quibusdam rem adipisci at pariatur culpa praesentium!'
}
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      //install Swiper modules
      modules = {[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client_avatar">
            <img src={avatar}/>
          </div>
          <h5 className='client_name'>{name}</h5>
            <small className="client_review">
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
       
        {/* <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5 className='client_name'>Ernest Achiever</h5>
            <small className="client_review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis iure inventore necessitatibus tenetur excepturi ex nisi nobis impedit placeat eaque dolorem deserunt numquam vel minima facilis odit mollitia ratione labore maiores enim eum eius delectus, illum optio. Dolorum distinctio tenetur, dolores veritatis quam hic qui.
            </small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5 className='client_name'>Ernest Achiever</h5>
            <small className="client_review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis iure inventore necessitatibus tenetur excepturi ex nisi nobis impedit placeat eaque dolorem deserunt numquam vel minima facilis odit mollitia ratione labore maiores enim eum eius delectus, illum optio. Dolorum distinctio tenetur, dolores veritatis quam hic qui.
            </small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className='client_name'>Ernest Achiever</h5>
            <small className="client_review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis iure inventore necessitatibus tenetur excepturi ex nisi nobis impedit placeat eaque dolorem deserunt numquam vel minima facilis odit mollitia ratione labore maiores enim eum eius delectus, illum optio. Dolorum distinctio tenetur, dolores veritatis quam hic qui.
            </small>
        </article> */}
      </Swiper>
    </section>
  )
}

export default testimonials