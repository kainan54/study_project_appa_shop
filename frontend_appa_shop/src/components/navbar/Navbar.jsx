import React, { useEffect } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { ReactComponent as Logo } from './logo.svg';
import { setCurrentUser } from '../../redux/user/userActions';

function Navbar ({ currentUser, setCurrentUser }) {

        //removes currentUser from redux store and removes corrosponding cookie containing token
    const logoutUser = () => {
        Cookies.remove('appaShop');
        setCurrentUser(null)
    };

    useEffect(() => {
        console.log(currentUser);
    }, [currentUser])

    return (
        <div className="nav" >
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>

            <div className="nav-options">
                <Link to="/" className="nav-option">
                    Contact Us
                </Link>

                {currentUser ? (
                    <span 
                        className="nav-option"
                        onClick={logoutUser}
                    >
                        sign-out
                    </span>
                ) : (
                    <Link to="/signin" className="nav-option">
                        sign-in
                    </Link>
                )} 
                
            </div>
        </div>
    )
    
    
};

// const mdp = (dispatch) => ({
//     setCurrentUser: (user) => dispatch(setCurrentUser(user))
// });
const mdp = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  });

const msp = (reduxState) => ({
    currentUser: reduxState.user.currentUser
});

export default connect(msp, mdp)(Navbar);