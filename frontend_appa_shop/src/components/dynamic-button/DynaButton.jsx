import React from 'react';
import './DynaButton.css';

function DynaButton({children, ...otherProps}) {


    return(
        <button className="dynamic-button" {...otherProps}>
            {children}
            {console.log(children)}
        </button>
    );
};

export default DynaButton;