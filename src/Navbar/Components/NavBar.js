import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavLink from "./NavLink";
import DetailContainer from "../../Detail/Containers/DetailContainer";
import ReviewContainer from "../../Review/Containers/ReviewContainer";
import Content from '../../Home/Containers/Content';
import Policy from '../../Privacy/Components/Policy';
import ProfileContainer from "../../Profile/Containers/ProfileContainer";

const NavBar = ({links}) =>
    <Router>
        <nav className="navbar fixed-top navbar-dark t16-nav-bkgd">
            {links.map(link => <NavLink to={link.url} text={link.text} key={link.url}/>)}
        </nav>
        <Route exact path="/" component={Content} />
        <div className="t16-component-container">
            {links.map(link =>
                    <Route exact={link.exact} path={link.route} component={link.component} render={link.render} key={link.route}/>)}
            <Route path="/detail/:id" component={DetailContainer}/>
            <Route path="/review/:song/:id" component={ReviewContainer}/>
            <Route path="/privacy" component={Policy}/>
            <Route path="/profile/:username" component={ProfileContainer}/>
        </div>
    </Router>;
export default NavBar;
