import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

function Navbar () {
    
    return (
        <div className="nav">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>

            <div className="nav-options">
                <Link to="/" className="nav-option">
                    Contact Us
                </Link>
                    
                <Link to="/signin" className="nav-option">
                    sign-in
                </Link>
            </div>
        </div>
    )
    
    
};

export default Navbar;