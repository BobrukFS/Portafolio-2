import React from 'react'

function ContactForm({className}) {
  return (
    
        <form action="" className={`form ${className}`}>
            <label htmlFor="">Nombre completo</label>
            <input type="text" />

            <label htmlFor="">E-mail</label>
            <input type="text" />

            <label htmlFor="">Asunto</label>
            <input type="text" />

            <label htmlFor="">Mensaje</label>
            <textarea name="" style={{ resize: 'none' }} id="textarea"></textarea>

            <button className='form__btn'>Contactame</button>
        </form>
    
   
  )
}

export default ContactForm