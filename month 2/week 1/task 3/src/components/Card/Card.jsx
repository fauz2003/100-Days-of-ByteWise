import React from 'react'
import './Card.css'

const Card = ({count}) => {


  return (
    <div className='cardContainer'>
        <h2 id='adviceNo'>Advice #{count}</h2>
        <p className="advice">
            "It is easy to sit up and take notice, what's difficult is getting up and taking action."
        </p>
        <div className="border">
            
        </div>
    </div>
  )
}

export default Card