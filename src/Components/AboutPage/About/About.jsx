import React from 'react'
import Desc from './Desc/Desc'
import Skills from './Skills/Skills'

function About() {
  return (<>
    <section className="about">
        <h2 className='about__title'>Sobre mi</h2>
        <Desc></Desc>
        <Skills></Skills>
    </section>
    </>
  )
}

export default About