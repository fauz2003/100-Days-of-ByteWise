import React, {useState} from 'react'
import './Container.css'




const Container = () => {
    const [color, setColor] = useState('#f15025');

    const changeColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const newColor = `#${randomColor}`;
        const colorVal = document.querySelector("#Colorval");
        
        colorVal.firstChild.innertext = newColor;
        setColor(newColor);
        document.body.style.backgroundColor = newColor;
    };

  return (
    <div>
        <div className='container'>
            <div className='color'>
            <h1>Background Color: <span id='Colorval'>{color}</span></h1>
            </div>
            <div className='btn'>
                <button className='btn simple' onClick={changeColor}>Click Me</button>
            </div>
        </div>
    </div>
  )
}

export default Container