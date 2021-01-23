import React from 'react';
import { withRouter } from 'react-router-dom';
import './DynaButton.css';

function DynaButton({children, isGoogle, history, staticContext, ...otherProps}) {

    return(
        <button 
            className={`${isGoogle ? 'dyna-btn-google' : 'dyna-btn'}`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default withRouter(DynaButton);