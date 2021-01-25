import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import Cookies from 'js-cookie';
import { ReactComponent as Logo } from './logo.svg';
import { setCurrentUser } from '../../redux/user/userActions';
import CartIcon from '../cart-icon/CartIcon';
import CartDropMenu from '../cart-drop-menu/CartDropMenu';

interface currentUser {
    email: string;
    id: number;
}

interface RootState {
    user: {
        currentUser: currentUser | null;
    };
    cart: {
        hidden: boolean;
    };
}

const msp = ({ user: { currentUser }, cart: { hidden } }: RootState) => ({
    currentUser,
    hidden,
});

const mdp = (dispatch: (action: { type: string; payload: currentUser | null }) => void) => ({
    setCurrentUser: (user: currentUser | null) => dispatch(setCurrentUser(user)),
});

const connector = connect(msp, mdp);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Navbar: React.FC<PropsFromRedux> = function ({ currentUser, setCurrentUser, hidden }) {
    //removes currentUser from redux store and removes corrosponding cookie containing token
    const logoutUser = () => {
        Cookies.remove('appaShop');
        setCurrentUser(null);
    };

    useEffect(() => {
        console.log(currentUser);
    }, [currentUser]);

    return (
        <div className="nav">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>

            <div className="nav-options">
                <Link to="/" className="nav-option">
                    Contact Us
                </Link>

                {currentUser ? (
                    <span className="nav-option" onClick={logoutUser}>
                        sign-out
                    </span>
                ) : (
                    <Link to="/signin" className="nav-option">
                        sign-in
                    </Link>
                )}

                <CartIcon />
            </div>
            {!hidden ? <CartDropMenu /> : null}
        </div>
    );
};

export default connector(Navbar);
