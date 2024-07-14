import React, {useState} from 'react'
import Card from './components/Card/Card'
import Button from './components/Button/Button'


const App = () => {

  const [count, setCount] = useState(1);
  const incrementCount = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <Card count={count} />
      <Button incrementCount= {incrementCount}/>
    </div>
  )
}

export default App