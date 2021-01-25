import React from 'react';
import './DynaButton.css';

interface Props {
    isGoogle?: boolean;
    type: 'submit' | 'button' | 'reset' | undefined;
}
const DynaButton: React.FC<Props> = function ({ children, isGoogle, ...otherProps }) {
    return (
        <button className={`${isGoogle ? 'dyna-btn-google' : 'dyna-btn'}`} {...otherProps}>
            {children}
        </button>
    );
};

export default DynaButton;
