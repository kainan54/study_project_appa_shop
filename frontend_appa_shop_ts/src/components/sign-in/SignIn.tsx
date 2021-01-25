import React, { useState } from 'react';
import './SignIn.css';
import FormInput from '../form-input/FormInput';
import DynaButton from '../dynamic-button/DynaButton';

const Signin: React.FC = function () {
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        setState({
            email: '',
            password: '',
        });
    };

    const typeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        setState((ps) => ({
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
                <DynaButton type="submit">Sign In</DynaButton>

                <a href="http://localhost:3000/auth/google_oauth2">
                    <DynaButton type="button" isGoogle>
                        Sign in With Google
                    </DynaButton>
                </a>
            </form>
        </div>
    );
};

export default Signin;
