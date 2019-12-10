import React from 'react';

import InputField from './InputField';

const RegisterComponent = ({username, password, verifyPassword, onInputChange, validateUser, validUser}) => {
    return (
        <div className='container'>
            <h1>{'Register'}</h1>
            {
                !validUser &&
                <h3 className="t16-redtext">
                    Invalid credentials
                </h3>
            }
            <div className='form-group row t16-left-align'>
                <label htmlFor="user-role" className='col-sm-2 col-form-label'>Role</label>
                <select
                    id="user-role"
                    className="browser-default custom-select col-sm-3 form-control"
                    onChange={(e) => onInputChange('role', e.target.value)}>
                    <option value="reviewer">Reviewer</option>
                    <option value="reader" defaultValue>Reader</option>
                </select>
            </div>
            <InputField id="username"
                currInput={username}
                label={'Username'}
                onChange={(e) => onInputChange('username', e.target.value)}
            />
            <InputField id="password"
                currInput={password}
                label={'Password'}
                onChange={(e) => onInputChange('password', e.target.value)}
                password={true}
            />
            <InputField id="verify-password"
                currInput={verifyPassword}
                label={'Verify Password'}
                onChange={(e) => onInputChange('verifyPassword', e.target.value)}
                password={true}
            />
            <button
                onClick={validateUser}
                className="btn btn-primary"
            >
                {'Register'}
            </button>
        </div>
    )
};

export default RegisterComponent;
