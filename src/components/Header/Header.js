import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           
            <nav>
            <img className='logo' src={logo} alt=''></img>
                <a href='/shop'>Shop</a>
                <a href='/order'>Order</a>
                <a href='/About_Us'>About Us</a>
    
            </nav>
        </div>
    );
};

export default Header;