import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-part'>
            <div className="nav-title">
              <FontAwesomeIcon icon={faPersonRunning}></FontAwesomeIcon>
              <h1>Activities for Life</h1>
            </div>
            <div className='nav-btn'>
                <a href="/home">Home</a>
                <a href="/activites">Activities</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;