import React from 'react'

function CardMore({proceso, nombre, descripcion, tecnologias}) {
  return (
    <>
        <div className="card-more">
            <div>
            <div className="card-more__icons">
            <i className="fa-solid fa-folder"  style={{color: "#1b808d"}}></i>
            <div>
            <i className="fa-brands fa-github"></i>
            <i className="fa-solid fa-globe"></i>
            </div>
            </div>
            <div className="card-more__desc">
                <p>{proceso}</p>
                <p>{nombre}</p>
                <p>{descripcion}</p>
            </div>
            </div>
            <div className="card-more__tec">{tecnologias}</div>
        </div>
    </>
  )
}

export default CardMore