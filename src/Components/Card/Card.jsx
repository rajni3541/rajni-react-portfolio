import React  from 'react'
import  "./Card.css"

 const Card = ({emoji,heading,details, url, github}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{details}</span>
        <div style={{display: 'flex', gap: '0.5rem'}}>
        <a href={url} style={{textDecoration: 'none'}} className="c-button">Live Demo</a>
        <a href={github} style={{textDecoration: 'none'}} className="c-button">Github</a>
        </div>
        
    </div>
  )
}

export default Card;