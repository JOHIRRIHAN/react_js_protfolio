/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './ContactInfoCard.css'
const ContactInfoCard = ({iconUrl, text}) => {
  return (
    <div className="contact-details-card">
        <div className="icon">
            <img src={iconUrl} alt={text} />
        </div>
        <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard