import React from 'react';
import './DynaButton.css';

interface Props {
    isGoogle?: boolean;
    inverted?: boolean;
    type: 'submit' | 'button' | 'reset' | undefined;
}
const DynaButton: React.FC<Props> = function ({ children, isGoogle, inverted, ...otherProps }) {
    return (
        <button
            className={`${isGoogle ? 'dyna-btn-google' : ''} ${inverted ? 'dyna-btn-inverted' : ''} dyna-btn`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default DynaButton;
