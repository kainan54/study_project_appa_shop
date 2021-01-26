import React from 'react';
import DynaButton from '../dynamic-button/DynaButton';
import './CartDropMenu.css';

const CartDropMenu: React.FC = function () {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <DynaButton inverted type="button">
                GO TO CHECKOUT
            </DynaButton>
        </div>
    );
};

export default CartDropMenu;
