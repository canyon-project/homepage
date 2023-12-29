'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeSwiper = () => {
  return (
    <Swiper
      style={{ width: '500px', height: '500px' }}
      modules={[ Pagination]}
      pagination={{
        bulletClass: 'swiper-pagination-bullet zlz',
        bulletActiveClass: 'swiper-pagination-bullet-active zlz-active',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      }}

    >
      <SwiperSlide>
        <div className={'text-5xl h-full flex justify-center items-center'} style={{border:'1px solid red'}}>海报一</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={'text-5xl h-full flex justify-center items-center'}
             style={{border: '1px solid red'}}>海报二
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={'text-5xl h-full flex justify-center items-center'}
             style={{border: '1px solid red'}}>海报三
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSwiper;
