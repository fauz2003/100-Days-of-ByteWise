import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../features/Counter/counterSlice';

const Child2 = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();


  return (
    <div>
        <h1>Value of state in child 1 : {count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  )
}

export default Child2