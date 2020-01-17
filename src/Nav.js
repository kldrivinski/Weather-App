import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Icon from '/Users/kelseydrivinski/Documents/React/weather-app/src/weathericon.png'



function Nav() {
    return (
        <nav>
            <img src={Icon} alt="icon" />
            <ul className="navLinks">
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/">
                    <li>Home</li>
                </Link>
                {/* <Link to="/search">
                    <li>Search</li>
                </Link> */}
            </ul>
        </nav>
    );
}

export default Nav;
