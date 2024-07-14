import React from "react";
import './Header.css';
import logo from './logo.jpg';
const Header=()=>{
    return(
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo"/>
            </div>
            <nav className="navbar">
                <ul className="menu">
                    <li className="option"><a href="#home">Home</a></li>
                    <li className="option"><a href="#about">About</a></li>
                    <li className="option"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;