// src/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ incrementCount }) => {
  const changeAdvice = () => {
    fetch('http://localhost:5000/api/advice')
      .then(response => response.json())
      .then(data => {
        document.querySelector('.advice').innerHTML = `${data.slip.advice}`;
        incrementCount();
      })
      .catch(error => {
        console.error('Error fetching advice:', error);
      });
  };

  return (
    <div className='buttonContainer' onClick={changeAdvice}>
      <h3 className="adviceButton" >
        Advise Me
      </h3>
    </div>
  );
};

export default Button;
