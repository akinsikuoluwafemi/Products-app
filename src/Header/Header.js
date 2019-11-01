import React from 'react';
import ReactDOM from 'react-dom';
import './head.css';


function Header () {
    let Handler = (e) => {
        console.log('You can start your payment.');
    }
    return (
        <div>
        <header>
            <nav>
                <ul className='flex'>
                    <li className="list apart"><a className="btn" href="#">Image</a></li>
                    <li className="list"><a className="btn" href="#">Home</a></li>
                    <li className="list"><a className="btn" href="#">About</a></li>
                    <li className="list"><a className="btn" href="#">Contacts</a></li>
                    <li className="list"><a className="btn" href="#">Services</a></li>
                    <li className="list"><a className="btn" href="#">Search</a></li>

                </ul>
            </nav>
            </header>
            <button className='button' onClick={Handler}>Click mE</button>
        </div>   
    )
}
export default Header;
