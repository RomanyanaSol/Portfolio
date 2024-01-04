import s from './style.module.css';
import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from 'react-icons/rx';

export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
]


const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      style={{
        '--swiper-pagination-bullet-size': '10px',
        '--swiper-pagination-color': '#F13024',
        '--swiper-pagination-bullet-inactive-color': '#fff'
      }}
      modules={[FreeMode, Pagination]}
      className={s.swiper}
    >
      {
        serviceData.map((item, index) =>
          <SwiperSlide key={index}>
            <div className={s.group}>
              <div className={s.container}>
                <div className={s.icon}>{item.icon}</div>
                <div className={s.textContainer}>
                  <div className={s.title}>{item.title}</div>
                  <p className={s.p}>{item.description}</p>
                </div>
                <div className={s.arrowSize}>
                  <RxArrowTopRight className={s.arrow} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      }
    </Swiper>
  );
};

export default ServiceSlider;
