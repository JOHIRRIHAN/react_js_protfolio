/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './ExperienceCard.css'
const ExperienceCard = ({details} ) => {
  return (
    <div className="work-experience-card">
        <h6>{details.title}</h6>
        <div className="work-duration">{details.Date}</div>
        <ul>
            {details.responsibilities.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ExperienceCard