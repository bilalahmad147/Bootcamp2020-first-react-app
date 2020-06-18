import React, { useContext } from 'react';
import counterContext from './counterContext';

const Child = () => {
    let counterValue = useContext(counterContext);
    return (
        <div>
            <h2>This is increament in value by Contaxt Counter</h2>
            <h1>this is counter value {counterValue}</h1>
            <button onClick={() => { counterValue[1](++counterValue[0]) }}>Inreament</button>
        </div>
    );
}

export default Child;