import React from 'react';

import InputField from './InputField';

const LoginComponent = ({username, password, validateUser, onInputChange, validUser}) => {
    return (
        <div className='container'>
            <h1>Login</h1>
            {
                !validUser
                &&
                <h3 className='t16-redtext'>
                    Invalid credentials
                </h3>
            }
            <InputField
                id={'username'}
                currInput={username}
                label={'Username'}
                onChange={(e) => onInputChange('username', e.target.value)}
            />
            <InputField
                id={'password'}
                currInput={password}
                label={'Password'}
                onChange={(e) => onInputChange('password', e.target.value)}
                password={true}
            />
            <button
                onClick={validateUser}
                className='btn btn-primary'
            >
                Login
            </button>
        </div>
    );
}

export default LoginComponent;
