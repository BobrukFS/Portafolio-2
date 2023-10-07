import React from 'react'

/* <img className="complement__icon-tec" src="https://img.shields.io/badge/-Bootstrap-%23563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap"/>
        <img className="complement__icon-tec" src="https://img.shields.io/badge/-React-%2361DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
        <img className="complement__icon-tec" src="https://img.shields.io/badge/-SASS-%23CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SASS"/>
        <img className="complement__icon-tec" src="https://img.shields.io/badge/-Git-%23F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git"/> */ 

function Complement({className}) {
  return (
    <div className={`complement ${className}`}>
           <p className="complement__title">Pagina web</p>
        <div className='complement__info'>
        <p className="complement__desc">Esta es una pagina web donde aprendi a usar react y me sirve para consultar el clima en tu localidad</p>
        <ul>
            <li><span>Maquetado web, funcionalidad e interactividad</span></li>
            <li><span>Integracion con el Backend</span></li>
            <li><span>Manejo de base de datos</span></li>
        </ul>
        </div>
        <div className='complement__info-more'>
        <div className="complement__tec">
        <img className="complement__icon-tec" src="https://img.shields.io/badge/-HTML-%23E34F26?style=for-the-badge&logo=html5&logoColor=white"  />
        <img className="complement__icon-tec" src="https://img.shields.io/badge/-CSS-%231572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS"/>
        <img className="complement__icon-tec" src="https://img.shields.io/badge/-JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
        <img className="complement__icon-tec" src="https://img.shields.io/badge/-SASS-%23CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SASS"/>
        <img className="complement__icon-tec" src="https://img.shields.io/badge/-Git-%23F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git"/> 
        </div>
        <div className='complement__icons'>
           <i className="fa-solid fa-globe complement__icon"></i>
          <i className="fa-brands fa-github complement__icon"></i>
        </div>
        </div>
    </div>
  )
}

export default Complement