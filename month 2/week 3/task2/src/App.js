import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Child1 from './Components/Child1';

const App = () => {

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Value of state in App: {count}</h1>
      <Child1/>
    </div>
  )
}

export default App