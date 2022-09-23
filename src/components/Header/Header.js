import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Welcome to rest Countries</h1>
            <nav className='menu'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Counties</a>
                <a href="">Link</a>
            </nav>
        </div>
    );
};

export default Header;