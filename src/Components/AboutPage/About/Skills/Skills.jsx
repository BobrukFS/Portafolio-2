
import React from 'react'
import Tec from './tec/tec'

function Skills() {
  return (
    <>
        <div className="skills">
          <div className='skills__container-title'>
            <h3 className="skills__title">Habilidades</h3>
            <h3 className='skills__title'>Experiencia</h3>
            </div>
            <div className="skills__desc">
            <p className="skills__p">Como desarrollador frontend con sólida experiencia, puedo crear interfaces de usuario atractivas y funcionales utilizando HTML, CSS y JavaScript. Además, estoy familiarizado con frameworks modernos como React para construir aplicaciones web interactivas y escalables .</p>
            <p className="skills__p">Tengo habilidades en diseño responsivo , lo que significa que puedo asegurar que las aplicaciones que desarrollo se adapten a todos los dispositivos. También me aseguro de que mis proyectos sean compatibles con varios navegadores, garantizando una experiencia coherente para todos los usuarios.</p>
            <p className="skills__p">Me enorgullezco de optimizar el rendimiento de las aplicaciones web que construyo. Utilizo técnicas como la carga diferida, el almacenamiento en caché y la reducción del tiempo de carga para mejorar la velocidad y eficiencia de las aplicaciones. Además, aplico las mejores prácticas para la optimización de imágenes y recursos, lo que resulta en una experiencia de usuario más rápida y agradable.</p>
            </div>
            <div className="skills__tec">
                <Tec titulo="Front-end"></Tec>
                <Tec titulo="Backend"></Tec>
                <Tec titulo="Tools"></Tec>
            </div>
        </div>
    
    </>
  )
}

export default Skills