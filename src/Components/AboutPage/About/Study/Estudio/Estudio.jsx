import React from 'react'
import Circle from './Circle/Circle'

function Estudio({fecha, title, instituto, desc, color}) {
  return (
    <>
        <div className="estudio">
        <Circle color={color}></Circle>
        <p className="estudio__title">{`${title} `}</p>
        <p className="estudio__instituto">{`${instituto} | ${fecha} `}</p>
        <p className='estudio__p'>{desc}</p>
           
        </div>
    </>
  )
}

export default Estudio