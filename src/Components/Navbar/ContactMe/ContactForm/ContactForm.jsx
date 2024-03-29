import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
  return (
    <div className="contact-form-content">
         <form>
            <div className="name-container">
                <input type="text" name="firstname" placeholder="First Name" />
                <input type="text" name="lastname" placeholder="Last Name" />
            </div>
            <input type="email" name="email" id="" placeholder='Email@gmail.com'/>
            <textarea type="text" name="message"   rows={3} placeholder='Message'></textarea>
            <button>SEND</button>
         </form>
    </div>
  )
}

export default ContactForm