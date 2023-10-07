import React from 'react'

function Desc() {
  return (
    <>
        <div className="desc">
          <div className='desc__main'>

      
     
            <p className="desc__p">Tengo 23 años y soy <span>estudiante de la Licenciatura en Informatica en la Universidad de Quilmes</span>. Ademas de mis estudios formales, me dedico al aprendizaje autodidacta para expandir mis conocimientos.</p>
            <p className="desc__p">Ademas de mi formacion tecnica, tambien estoy trabajando en el <span>desarrollo de mis soft skills</span> junto a la <span>Fundacion Pescar en conjunto con Santander</span>.</p>
            <div className='desc__img'>
            <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none">
            <circle cx="125" cy="125" r="124.5" stroke="#1B8D87" strokeDasharray="2 4 6 8"/>
            </svg>  
              <div className='desc__circle'>
              <a href='src/assets/Exequiel-Bobruk-CV.pdf' download={true} className='desc__cv'>Cv <i className="fa-solid fa-file-arrow-down"></i></a> 
              </div>
            </div>
            <svg className="desc__cuadrado" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
               <rect width="100" height="100" fill="white" />

             </svg>
             </div>
        </div>
    </>
  )
}

export default Desc