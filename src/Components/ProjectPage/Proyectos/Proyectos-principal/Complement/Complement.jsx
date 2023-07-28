import React from 'react'

function Complement() {
  return (
    <div className='complement'>
        <div>
        <p className="complement__title">Pagina web</p>
        <p className="complement__desc">Esta es una pagina web donde aprendi a usar react y me sirve para consultar el clima en tu localidad</p>
        <ul>
            <li><span>Maquetado web, funcionalidad e interactividad</span></li>
            <li><span>Integracion con el Backend</span></li>
            <li><span>Manejo de base de datos</span></li>
        </ul>
        </div>
        <p className="complement__tec">React - MongoDB - NodeJS</p>
    </div>
  )
}

export default Complement