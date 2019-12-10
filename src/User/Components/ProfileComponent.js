import React from 'react';

import InputField from './InputField';

const ProfileComponent = ({user, username, currentPassword, password, verifyPassword, onInputChange, validUser, validateUser, logout}) => {
    return (
        <div className='container'>
            <h1>Profile</h1>
            {
                !validUser && <h3 className="t16-redtext">Invalid credentials</h3>
            }
                {console.log(user)}
            <div className='form-group row t16-left-align'>
                <label className='col-sm-2 col-form-label' htmlFor={"user-role"}>
                        Role
                </label>
                {/*<select
                    id="user-role"
                    className="browser-default custom-select col-sm-3 form-control"
                    onChange={(e) => onInputChange('role', e.target.value)}
                    disabled>
                        <option value="reviewer">Reviewer</option>
                        <option value="reader" defaultValue>Reader</option>
                </select>*/}
                <input id="user-role" value={user.role} disabled/>
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
