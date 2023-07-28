import React from 'react'
import ContactForm from './Contact-Form/ContactForm'

function Contact() {
  return (
    <>
        <section className='contact'>
          <div className='contact__container'>
            <h2 className="contact__title">¿Que sigue?</h2>
            <h3 className='contact__subtitle'>Ponte en contacto</h3>
            <p className='contact__p'>Actualmente estoy en busqueda activa de trabajo y estoy emocionado por comenzar mi carrera profesional. Estoy abierto a nuevas oportunidades y dispuesto a aprender y crecer en cualquier puesto que me brinde la posibilidad de desarrollarme como profesional. Si te intereso mi perfil o quieres saber mas ¡no dudes en contactarme!</p>
            </div>
            <ContactForm className="contact__form"></ContactForm>
        </section>
    
    </>
  )
}

export default Contact