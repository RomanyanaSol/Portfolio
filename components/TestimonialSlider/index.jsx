import s from './style.module.css';

const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';


const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      style={{
        '--swiper-pagination-bullet-size': '10px',
        '--swiper-pagination-color': '#F13024',
        '--swiper-pagination-bullet-inactive-color': '#fff',
        '--swiper-navigation-color': '#F13024',
      }}
      modules={[Navigation, Pagination]}
      className={s.swiper}
    >
      {
        testimonialData.map((item, index) =>
          <SwiperSlide key={index}>
            <div className={s.textContainer}>
              <div className={s.text}>
                <div className={s.textItems}>
                  <div className={s.img}>
                    <Image src={item.image} width={100} height={100} alt=''/>
                  </div>
                  <div className={s.name}>{item.name}</div>
                  <div className={s.person}>{item.position}</div>
                </div>
              </div>
              <div className={s.container}>
                <div className={s.icon}><FaQuoteLeft /></div>
                <div className={s.message}>
                  {item.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      }
    </Swiper>
  );
};

export default TestimonialSlider;