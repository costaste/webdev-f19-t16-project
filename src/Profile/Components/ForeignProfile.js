import React from 'react';

import {LOGGED_IN_USER_ROLE, READER, REVIEWER} from '../../Constants';
import {getCookie} from "../../utils";

const ForeignProfile = ({user}) => {
    return (
        <div className='container'>
            <h1>{user.username}</h1>
            <div className='form-group row t16-left-align'>
                <label className='col-sm-2 col-form-label' htmlFor="user-role">
                    Role
                </label>
                <select
                    id="user-role"
                    className="browser-default custom-select col-sm-3 form-control"
                    disabled>
                    <option value={REVIEWER} defaultValue={user.role===REVIEWER}>Reviewer</option>
                    <option value={READER} defaultValue={user.role===READER}>Reader</option>
                </select>
            </div>
            <div className="row">
                <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                <input id="username" className='col-sm-9 form-control' defaultValue={user.username} disabled/>
            </div>
        </div>
    )
};

export default ForeignProfile;
