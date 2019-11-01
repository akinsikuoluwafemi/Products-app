import React from 'react';


function Person (props) {
    return (
        <div>
            <h1 onClick={props.click}>God will add another year to {props.name}'s year by nov</h1>
            <h1>I will speak at {props.event} one day</h1>
            <h2>Nations shall come to christ because of me</h2>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} /> 
            {/* Data binding in React can be achieved by using a controlled input. A controlled input is achieved by binding the value to a state variable and a onChange event to change the state as the input value changes. */}
        </div>
    )
}


export default Person;