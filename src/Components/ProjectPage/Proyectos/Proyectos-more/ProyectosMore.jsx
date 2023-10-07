import React from 'react';
import CardMore from './Card-more/CardMore';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

function ProyectosMore() {
  const swiperParams = {
    slidesPerView: 'auto', // Ajustamos a 'auto' para que los slides se ajusten al tamaño del contenedor
    spaceBetween: 20,
    slidesPerGroup: 1,
    grabCursor: true,
    effect: 'coverflow',
 
    coverflowEffect: {
      rotate: 30,
      stretch: 50,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };

  return (
    <>
      <div className='proyectos-more'>
        <h3 className='proyectos-more__title'>Mas proyectos</h3>
     
          <Swiper className='swiper' {...swiperParams} style={{ height: '100%' }}>
            <SwiperSlide>
              <CardMore
                nombre="Pagina web"
                proceso="Terminado"
                tecnologias="HTML - CSS - JavaScript"
                descripcion={"Pagina web que trata de componentes web y me ayudo a practicar react"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardMore
                nombre="Pagina web"
                proceso="Terminado"
                tecnologias="HTML - CSS - JavaScript"
                descripcion={"Pagina web que trata de componentes web y me ayudo a practicar react"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardMore
                nombre="Pagina web"
                proceso="Terminado"
                tecnologias="HTML - CSS - JavaScript"
                descripcion={"Pagina web que trata de componentes web y me ayudo a practicar react"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardMore
                nombre="Pagina web"
                proceso="Terminado"
                tecnologias="HTML - CSS - JavaScript"
                descripcion={"Pagina web que trata de componentes web y me ayudo a practicar react"}
              />
            </SwiperSlide>

            <SwiperSlide>
              <CardMore
                nombre="Pagina web"
                proceso="Terminado"
                tecnologias="HTML - CSS - JavaScript"
                descripcion={"Pagina web que trata de componentes web y me ayudo a practicar react"}
              />
            </SwiperSlide>

            <SwiperSlide>
            <div className='proyectos-more__card-git'>
              <i className="fa-brands fa-github proyectos-more__icon-git"></i>
              <p className='proyectos-more__p-git'>Ver mas en mi repositorio</p>
              </div>
            </SwiperSlide>

      
          </Swiper>

      
      </div>
    </>
  );
}

export default ProyectosMore;
