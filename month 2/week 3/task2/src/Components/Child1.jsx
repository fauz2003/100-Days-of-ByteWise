import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Child2 from './Child2';

const Child1 = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Value of state in child 1 : {count}</h1>
        <Child2/>
    </div>
  )
}

export default Child1