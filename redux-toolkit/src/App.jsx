import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/counterSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  console.log(counter);

  return (
    <div className="App  ">
      <span onClick={() => dispatch(decrement())}>-</span>
      <span>{counter}</span>
      <span onClick={() => dispatch(increment())}>+</span>
    </div>
  );
}

export default App;
