import React from 'react'
import Desc from './Desc/Desc'
import AboutMore from './About-more/AboutMore'

function About() {
  return (<>
    <section className="about">
     
        <h2 className='about__title'>Sobre mi</h2>
        <Desc></Desc>
        <AboutMore></AboutMore>
      
    </section>
    </>
  )
}

export default About