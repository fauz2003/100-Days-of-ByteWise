import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../features/Counter/counterSlice';

const Child2 = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const onsubmit = (e) => {
      e.preventDefault();
      var value = e.target[0].value;
      if(!value){
        value = 1;
      }
      dispatch(increment(parseInt(value)));
    }

  return (
    <div>
        <h1>Value of state in child 1 : {count}</h1>
        <form onSubmit={onsubmit}>
          <input type='number' placeholder='Enter increment value'/>
          <button type='submit'>Increment</button>
        </form>
    </div>
  )
}

export default Child2