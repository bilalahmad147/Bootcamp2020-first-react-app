import React, { useReducer } from 'react';
import CounterReaducer from './counterReaducer'

const Child2 = () => {

    let [state, dispatch] = useReducer(CounterReaducer, 1);
    return (
        <div>
            <h2>This is increament in value by Readucer Counter</h2>
            <h1>this is counter value {state}</h1>
            <button onClick={()=>dispatch('INCREAMENT')}>Inreament</button>
        </div>
    );
}

export default Child2;