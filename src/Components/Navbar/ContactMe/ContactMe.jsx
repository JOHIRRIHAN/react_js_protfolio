// import React from 'react'
import './ContactMe.css'
import ContactInfoCard from '../ContactMe/ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard iconUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png" text="jr7718301@gmail.com" />

                <ContactInfoCard iconUrl="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png" text="https://github.com/JOHIRRIHAN" />
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe