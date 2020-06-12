import React, { useState } from 'react';
import './App.css';
import Message from './message.js';
function App() {
  let [count, setcount] = useState(1);
  let [isMorning, setMorning] = useState(true);


  return (
    <div className={`header ${isMorning ? 'daylight':'' } `}>
      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter={count} />
      <button onClick={() => setcount(count + 1)}>Plus Counter Value</button>
      <button onClick={() => setcount(count - 1)}>Minus Counter Value</button>
      <button onClick={() => setMorning(!isMorning)}>Change MOod View</button>
    </div>
  );
}

export default App;
