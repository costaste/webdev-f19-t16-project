import React from 'react';

import InputField from './InputField';
import { getCookie } from '../../utils';
import {LOGGED_IN_USER, LOGGED_IN_USER_ROLE, LOGIN, PROFILE, REGISTER} from "../../Constants";


const ProfileComponent = ({user, username, currentPassword, password, verifyPassword, onInputChange, validUser, validateUser, logout}) => {
    return (
        <div className='container'>
            <h1>Profile</h1>
            {
                !validUser && <h3 className="t16-redtext">Invalid credentials</h3>
            }
            <div className='form-group row t16-left-align'>
                <label className='col-sm-2 col-form-label' htmlFor={"user-role"}>
                        Role
                </label>
                {getCookie(LOGGED_IN_USER_ROLE)}
            </div>

            <InputField
                id="username"
                currInput={username}
                label={'Update Username'}
                onChange={(e) => onInputChange('username', e.target.value)}
            />
            <InputField
                id="password"
                currInput={currentPassword}
                label={'Current Password'}
                onChange={(e) => onInputChange('currentPassword', e.target.value)}
                password={true}
            />
            <InputField
                id="new-password"
                currInput={password}
                label={'Update Password'}
                onChange={(e) => onInputChange('password', e.target.value)}
                password={true}
            />
            <InputField
                id="verify-password"
                currInput={verifyPassword}
                label={'Verify New Password'}
                onChange={(e) => onInputChange('verifyPassword', e.target.value)}
                password={true}
            />
            <button
                onClick={validateUser}
                className="btn btn-primary"
            >
                    Update
            </button>
            <button
                onClick={logout}
                className="btn btn-outline-danger"
            >
                    Logout
            </button>
        </div>
    )
}

export default ProfileComponent;
