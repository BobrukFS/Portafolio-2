import React from 'react'
import ProyectosPrincipal from './Proyectos-principal/ProyectosPrincipal'
import ProyectosMore from './Proyectos-more/ProyectosMore'

function Proyectos() {
  return (
    <>
     <section className='project'>
      <h2 className="project__title">Proyectos</h2>
      <p className="project__desc">Estos son mis últimos proyectos: una muestra del trabajo apasionante y desafiante en el que he estado inmerso como desarrollador frontend. Cada uno de estos proyectos representa una oportunidad para aplicar mis habilidades y conocimientos en la creación de experiencias digitales excepcionales.</p>
      <ProyectosPrincipal></ProyectosPrincipal>
     </section>
     <ProyectosMore></ProyectosMore>
    </>
  )
}

export default Proyectos