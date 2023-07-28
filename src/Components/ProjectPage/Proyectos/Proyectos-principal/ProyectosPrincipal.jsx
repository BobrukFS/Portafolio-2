import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
 // Importa tus estilos personalizados si es necesario
import Card from './Card/Card';
import Pagination from'./Pagination/Pagination';
import Complement from './Complement/Complement';

function ProyectosPrincipal() {
  const swiperContainerRef = useRef(null);
  const [activeSlideHeight, setActiveSlideHeight] = useState(0);

  const handleCardResize = (height) => {
    // Ajusta la altura del swiper-container al recibir la altura actualizada de la Card
    setActiveSlideHeight(height);
  };

  return (<>
    <div className="project-main">
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        effect="coverflow"
        direction="vertical"
        coverflowEffect={{
          rotate: 30,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={20}
        slideActiveClass="custom-slide-active"
        ref={swiperContainerRef}
        style={{ height: activeSlideHeight }} // Ajusta la altura del swiper-container
      >
        <SwiperSlide>
          <Card onResize={handleCardResize} />
        </SwiperSlide>
        <SwiperSlide>
          <Card onResize={handleCardResize} />
        </SwiperSlide>
        <SwiperSlide>
          <Card onResize={handleCardResize} />
        </SwiperSlide>
        <SwiperSlide>
          <Card onResize={handleCardResize} />
        </SwiperSlide>
      </Swiper>
      <Pagination className="project-main__pagination" />
      <img className="arrow" src="https://static.thenounproject.com/png/2885276-200.png" alt="" />
    </div>
      
    <div className='project-complement'>
    <Swiper
        className="mySwiper"
        slidesPerView={1}
        effect="coverflow"
        direction="horizontal"
        coverflowEffect={{
          rotate: 30,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={20}
        slideActiveClass="custom-slide-active"
     
      >
        <SwiperSlide>
          <Complement></Complement>
        </SwiperSlide>
        <SwiperSlide>
        <Complement></Complement>
        </SwiperSlide>
        <SwiperSlide>
        <Complement></Complement>
        </SwiperSlide>
        <SwiperSlide>
        <Complement></Complement>
        </SwiperSlide>
      </Swiper>
    </div>
  
    </>);
}

export default ProyectosPrincipal;