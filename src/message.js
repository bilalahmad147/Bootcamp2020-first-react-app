import React, {useState} from 'react';

function Message(props){
    // let [morning,setmorning]= useState(morning ? {})

    return(
        <h3>value of count variable : {props.counter}</h3>
        // <button onClick={()=> }>Change Mood</button>
    );
}

export default Message;