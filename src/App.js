import React, { useState } from 'react';
import './App.css';
import Parent from './parent';
import counterContext from './counterContext';

const App = () => {
  let countState = useState(1);


  return (
    <counterContext.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </counterContext.Provider>
  );
}

export default App;