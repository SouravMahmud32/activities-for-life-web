import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-part'>
            <h1>Activities for Life</h1>
            <div>
                <a href="/home">Home</a>
                <a href="/activites">Activities</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;