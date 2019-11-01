import React from 'react';

function Navbar () {
    return (
        <nav>
            <ul className="list">
                <li className="apart"><a className='Btn-link' href="#">Logo</a></li>
                <li><a className='Btn-link' href="#">About</a></li>
                <li><a className='Btn-link' href="#">Contact</a></li>
                <li><a className='Btn-link' href="#">Portfolio</a></li>
                <li><a className='Btn-link' href="#">Community</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;