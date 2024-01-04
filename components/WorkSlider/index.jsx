const workSlider = {
  slides: [
    {
      images: [
        { title: 'title', path: '/myThumb1.jpg', link: 'https://real-estate2-seven.vercel.app' },
        { title: 'title', path: '/myThumb2.jpg', link: 'https://romanyanasol.github.io/Creative-Portfolio' },
        { title: 'title', path: '/myThumb4.jpg', link: 'https://romanyanasol.github.io/Beauty-3D-scroll-animation' },
        { title: 'title', path: '/myThumb6.jpg', link: 'https://romanyanasol.github.io/Fairy-Forest' },
      ],
    },
    {
      images: [
        { title: 'title', path: '/myThumb3.jpg', link: 'https://github.com/RomanyanaSol/Online-store-selling-goods-for-the-garden' },
        { title: 'title', path: '/myThumb5.jpg', link: 'https://github.com/RomanyanaSol/Pizza' },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import s from './style.module.css';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';


const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      style={{
        '--swiper-pagination-bullet-size': '10px',
        '--swiper-pagination-color': '#F13024',
        '--swiper-pagination-bullet-inactive-color': '#fff'
      }}
      modules={[Pagination]}
      className={s.swiper}
    >
      {
        workSlider.slides.map((item, index) =>
          <SwiperSlide key={index}>
            <div className={s.grid}>
              {item.images.map((image, index) =>
                <Link href={image.link} target='blank'>
                  <div key={index} className={s.group}>
                    <div className={s.imageContainer}>
                      <Image src={image.path} width={500} height={300} alt='' className={s.img} />
                      <div className={s.overlay}></div>
                      <div className={s.textMain}>
                        <div className={s.textFlex}>
                          <div className={s.titleOne}>LIVE</div>
                          <div className={s.titleTwo}>PROJECT</div>
                          <div className={s.titleThree}><BsArrowRight /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </SwiperSlide>
        )
      }
    </Swiper>
  );
};

export default WorkSlider;
