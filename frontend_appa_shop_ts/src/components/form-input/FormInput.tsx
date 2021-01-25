import React from 'react';
import './FormInput.css';

interface Props {
    typeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    label: string;
    name: string;
    type: string;
    required?: boolean;
}

const FormInput: React.FC<Props> = function ({ typeHandler, label, value, ...otherProps }) {
    return (
        <div className="input-group">
            <input className="form-input" onChange={typeHandler} value={value} {...otherProps} />
            {label ? <label className={!value.length ? 'form-input-label' : 'label-shrink'}>{label}</label> : null}
        </div>
    );
};

export default FormInput;
