import React, { useState } from 'react';
import './SignIn.css';
import FormInput from '../form-input/FormInput';
import DynaButton from '../dynamic-button/DynaButton';

function Signin() {

    let [state, setState] = useState({
        email: '',
        password: '',
    });

    const submitHandler = (event) => {
        event.preventDefault();

        setState({
            email: '',
            password: '',
        });
    };

    const typeHandler = (event) => {
        const { value, name } = event.target;
 
        setState(ps => ({
            ...ps,
            [name]: value,
        }));
        
    };

    return (
        <div className="sign-in">
            <h2>Already Have an Account?</h2>
            <span>Sign In with email and password</span>

            <form onSubmit={submitHandler}>

                <FormInput 
                    name="email" 
                    type="email" 
                    label="email"
                    value={state.email} 
                    typeHandler={typeHandler}
                    required 
                />

                <FormInput 
                    name="password" 
                    type="password" 
                    label="password"
                    value={state.password}
                    typeHandler={typeHandler}
                    required 
                />
                <DynaButton type="submit">
                    Sign In
                </DynaButton>

                <DynaButton type="submit">
                    Sign in With Google
                </DynaButton>
            </form>
            
        </div>
    )
};

export default Signin