import { data } from './data';
import s from '../Global.module.css';
import { TestimonialsContainer, TestimonialsAvatar, Testimonial, TestimonialsRewiews } from './Testimonials.styles';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    
    <section id='testimonials'>
      <h5>Rewiew from clients</h5>
      <h2>Testimonials</h2>
      
      <TestimonialsContainer className={s.container}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
            >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index}>
            <Testimonial>
            <TestimonialsAvatar>
            <img src={avatar} alt={avatar} />
            </TestimonialsAvatar>
            <h5>{name}</h5>
            <TestimonialsRewiews>{review}</TestimonialsRewiews>
            </Testimonial>
          </SwiperSlide>
        ))}
        </Swiper>
        </TestimonialsContainer>
        
      </section>
    
  )
}

export default Testimonials