
import React from 'react'

function Intro() {
  return (
    <div className='intro'>
        <div>
        <p className="intro__p">Hola, mi nombre es</p>
        <h1 className="intro__title">Exequiel Bobruk</h1>
        <p className="intro__p">Desarrollador web Front-end</p>
        <p className="intro__desc">Desarrollo sitios web responsivos enfocados en la accesibilidad y usabilidad del usuario</p>
        <div className='intro__container-btn'>
        <button className='intro__btn'>Mis proyectos</button>
        <button className='intro__btn'>Curriculum</button>
        
        
        </div>

        </div>
       <img src="src/assets/intro.png" alt="" />
     
    </div>
  )
}

export default Intro