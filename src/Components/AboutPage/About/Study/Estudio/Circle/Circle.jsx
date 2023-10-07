import React from 'react'

function Circle({color}) {
  return (
    <>
        <div className="circle">
        <div className="circle__circle" style={{ backgroundColor: color }}></div>
        </div>
    </>
  )
}

export default Circle