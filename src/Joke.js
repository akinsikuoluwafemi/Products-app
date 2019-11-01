import React from 'react';
import App from './App';
import JokesData from '../src/JokesData';

function Joke (props) {
    // console.log(props);

    if (props.punchLine === undefined){
        return (
            <div>
                <p style={{fontWeight: 'bold',color:'white'}} className="question">Question:{props.question}</p>
                <hr/>
            </div>
        )
    }

    return (
        <div>
            <p className="question">Question:{props.question}</p>
            <hr />
            <p className="punch">PunchLine:{props.punchLine}</p>
        </div>
    )
}

export default Joke;


