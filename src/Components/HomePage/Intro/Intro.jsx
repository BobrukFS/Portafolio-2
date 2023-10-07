
import React from 'react'
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <section className='intro'>
        <div>
        <p className="intro__p">Hola, mi nombre es</p>
        <h1 className="intro__title">Exequiel Bobruk</h1>
        <p className="intro__p">Desarrollador Front-end</p>
        <p className="intro__desc">Desarrollo sitios web responsivos enfocados en la accesibilidad y usabilidad del usuario</p>
        <div className='intro__container-btn'>
        <Link className="intro__btn" to="/proyectos">Mis proyectos</Link>
        <a href="src/assets/Exequiel-Bobruk-CV.pdf"  className='intro__btn' download={true}>Curriculum</a>
        </div>
        </div>
        
        <img src="src/assets/intro.png" alt="" />
     
    </section>
  )
}

export default Intro