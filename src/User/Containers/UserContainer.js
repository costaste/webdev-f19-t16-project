import React from 'react';
import { withRouter } from 'react-router-dom';

import ProfileComponent from '../Components/ProfileComponent';
import LoginComponent from '../Components/LoginComponent';
import RegisterComponent from '../Components/RegisterComponent';
import {validateUser, registerUser, loginUser} from '../../Services/BackendService';
import {setCookie, getCookie} from '../../utils';
import '../User.css';
import {LOGGED_IN_USER, LOGGED_IN_USER_ROLE, LOGIN, PROFILE, REGISTER} from "../../Constants";

class UserContainer extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            username: this.props.match.params.username || '',
            currentPassword: '',
            password: '',
            verifyPassword: '',
            role: '',
            user: {},
            validUser: true
        };
    }

    // change state props when input value changes
    onInputChange = (type, val) => {
        this.setState({
            [type]: val
        });
    };

    register = (success) => {
        const {user} = this.state;
        if(success) {
            setCookie(LOGGED_IN_USER, this.state.username, 3);
            registerUser(user, this.profileRedirect);
        } else {
            this.setState({validUser: false});
        }
    };

    checkLogin = (callback) => {
        const {username, password} = this.state;

        loginUser({username, password}, callback);
    };

    getComponentType = () => {
        const {componentType} = this.props;
        const loggedInUser = this.getLoggedInUser();

        if(loggedInUser)
            return PROFILE;
        else if(componentType===PROFILE)
            return LOGIN;
        else return componentType;
    };

    getLoggedInUser = () => {
        return getCookie(LOGGED_IN_USER);
    };

    login = (user) => {
        if (user.username) {
            setCookie(LOGGED_IN_USER, user.username, 3);
            setCookie(LOGGED_IN_USER_ROLE, user.role, 3);
            this.profileRedirect();
        } else {
            this.setState({ validUser: false });
        }
    };

    logout = () => {
        setCookie(LOGGED_IN_USER, '', 3);
        setCookie(LOGGED_IN_USER_ROLE, '', 3);
        this.props.history.push(`/login`);
    };

    profileRedirect = () => {
        const {username} = this.state;
        this.setState({
            username: '',
            currentPassword: '',
            password: '',
            verifyPassword: '',
            role: '',
            user: {},
            validUser: true
        });
        this.props.history.push(`/profile/${username}`);
    };

    validateNewUser = () => {
        const {username, password, verifyPassword, role} = this.state;

        if (password !== verifyPassword) {
            this.setState({
                validUser: false
            });
            return;
        }

        const newUser = {
            username,
            password,
            role
        };

        this.setState({
                user: newUser
            },
            validateUser(newUser, this.register)
        );
    };

    render = () => {
        const {
            username,
            currentPassword,
            password,
            verifyPassword,
            validUser
        } = this.state;

        const componentType = this.getComponentType();

        switch (componentType) {
            case REGISTER:
                return (
                <RegisterComponent
                    validUser={validUser}
                    username={username}
                    password={password}
                    verifyPassword={verifyPassword}
                    onInputChange={this.onInputChange}
                    validateUser={this.validateNewUser}
                />
                );
            case LOGIN:
                return (
                <LoginComponent
                    validUser={validUser}
                    username={username}
                    password={password}
                    onInputChange={this.onInputChange}
                    validateUser={() => this.checkLogin(this.login)}
                />
                );
            case PROFILE:
                // TODO change validate new user to update current user
                return (
                <ProfileComponent
                    user={this.state.user}
                    validUser={validUser}
                    username={username || this.getLoggedInUser()}
                    currentPassword={currentPassword}
                    logout={this.logout}
                    password={password}
                    verifyPassword={verifyPassword}
                    onInputChange={this.onInputChange}
                    validateUser={() => this.checkLogin(this.validateNewUser)}
                />
                );
            default:
        }
    }
}

export default withRouter(UserContainer);
