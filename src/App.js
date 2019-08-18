import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      {isLogged ? <h3>Valuable stuff</h3> : ''}
    </div>
  );
}

export default App;
