import React from 'react';
import './SignInAndSignUp.css';
import SignIn from '../../components/sign-in/SignIn';

const SignInAndSignUp: React.FC = function () {
    return (
        <div className="signIn-signup   ">
            <SignIn />
        </div>
    );
};

export default SignInAndSignUp;
