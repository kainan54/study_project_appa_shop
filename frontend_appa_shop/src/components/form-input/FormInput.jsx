import React from 'react';
import './FormInput.css'

function FormInput ({ typeHandler, label, ...otherProps }) {

    return (
        <div className="input-group">
            <input className="form-input" onChange={typeHandler} {...otherProps} />
            {label ? (
                <label 
                    className={!otherProps.value.length ? 'form-input-label' : 'label-shrink'}
                >
                    {label}
                </label>
            ) : (
               null 
            )}
            
        </div>
    );
};

export default FormInput;