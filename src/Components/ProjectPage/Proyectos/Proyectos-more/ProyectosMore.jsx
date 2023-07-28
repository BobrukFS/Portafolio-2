import React from 'react'
import CardMore from './Card-more/CardMore'

function ProyectosMore() {
  return (
    <>
        <div className='proyectos-more'>
        <h3 className='proyectos-more__title'>Mas proyectos</h3>
        <div className='proyectos-more__container'>
            <CardMore 
            nombre="Pagina web" 
            proceso="Terminado" 
            tecnologias="HTML, CSS, JavaScript" 
            descripcion={"Pagina web que trata de componentes web y me ayudo a practicar react"}/>
            <CardMore 
            nombre="Pagina web" 
            proceso="Terminado" 
            tecnologias="HTML, CSS, JavaScript" 
            descripcion={"Pagina web que trata de componentes web y me ayudo a practicar react"}/>
            <CardMore 
            nombre="Pagina web" 
            proceso="Terminado" 
            tecnologias="HTML, CSS, JavaScript" 
            descripcion={"Pagina web que trata de componentes web y me ayudo a practicar react"}/>
            <CardMore 
            nombre="Pagina web" 
            proceso="Terminado" 
            tecnologias="HTML, CSS, JavaScript" 
            descripcion={"Pagina web que trata de componentes web y me ayudo a practicar react"}/>
        </div>
        </div>
    
    </>
  )
}

export default ProyectosMore