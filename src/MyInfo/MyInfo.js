import React from 'react';
import './MyInfo.css';
import Footer from './Footer' 

function MyInfo() {
    return (
        <div className="Info">
            <h1>Femi Akinsiku</h1>
            <p>I am a daring chap, i defy the odds and i am a doer. </p>
            <ul>
                <li className="list">Dubai</li>
                <li className="list">Canada</li>
                <li className="list">San-francisco</li>
                <Footer/>
            </ul>
        </div>
    )
}

export default MyInfo;