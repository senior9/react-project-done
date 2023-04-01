import React from 'react';
import logo from '../../Ellipse.png';
import "./Header.css"
const Header = () => {
    return (
        <div className='container'>
            <nav className='navbar '>
                <a href="programming-hero.com">Free Source For Coding</a>
                <a href="programming-hero.com"><img src={logo} alt="" /></a>
            </nav>
            <hr />
        </div>
    );
};

export default Header;