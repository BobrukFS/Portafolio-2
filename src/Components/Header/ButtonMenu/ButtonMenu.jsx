

import React from 'react'

function ButtonMenu({onClick}) {
  return (
    <button onClick={onClick} className='button-menu'>
        <div className='button-menu__middle'></div>
    </button>
  )
}

export default ButtonMenu