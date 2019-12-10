import React from 'react';

import '../Navbar.css';

import { getCookie } from '../../utils';
import NavBar from "../Components/NavBar";
import SearchContainer from "../../Search/Containers/SearchContainer";
import UserContainer from "../../User/Containers/UserContainer";
import Content from "../../Home/Containers/Content";

export default class NavContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUser: getCookie('loggedInUser')
        };

        window.setInterval(this.updateLoggedInUser, 2000);
    }

    componentWillUnmount = () => {
        window.clearInterval(this.updateLoggedInUser);
    };

    updateLoggedInUser = () => {
        if (this.state.loggedInUser !== getCookie('loggedInUser')) {
            this.setState({
                loggedInUser: getCookie('loggedInUser')
            });
        }
    };

    getNavLinks = () => {
        let links = [{
            "url": "/home",
            "route": "/home",
            "text": "Home",
            "component": Content
        }, {
            "url": "/search",
            "route": "/search",
            "text": "Search",
            "component": SearchContainer
        }];

        if(this.state.loggedInUser) {
            links.push({
                "url": `/profile`,
                "route": "/profile",
                "text": "Profile",
                render: (props) => <UserContainer {...props} componentType={'profile'}/>
            })
        } else {
            links.push({
                "url": "/register",
                "route": "/register",
                "text": "Register",
                render: (props) => <UserContainer {...props} componentType={'register'}/>
            }, {
                "url": "/login",
                "route": "/login",
                "text": "Log In",
                render: (props) => <UserContainer {...props} componentType={'login'}/>
            });
        }

        return links;
    };

    render = () => {
        return <NavBar links={this.getNavLinks()}/>
    }
}
