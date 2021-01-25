import React from 'react';
import './CartIcon.css';
import { ReactComponent as ShoppingIcon } from './cart-icon.svg';
import { connect, ConnectedProps } from 'react-redux';
import { toggleCartDisplay } from '../../redux/cart/cartActions';

const mdp = (dispatch: (action: { type: string }) => void) => ({
    toggleCartDisplay: () => dispatch(toggleCartDisplay()),
});

const connector = connect(null, mdp);
type PropsFromRedux = ConnectedProps<typeof connector>;

const CartIcon: React.FC<PropsFromRedux> = function ({ toggleCartDisplay }) {
    return (
        <div className="cart-icon" onClick={toggleCartDisplay}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

export default connector(CartIcon);
