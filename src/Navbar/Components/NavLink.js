import React from 'react';
import {Link} from 'react-router-dom';


const NavLink = ({to, text}) =>
    <Link to={to} className='t16-nav-text'>
        {text}
    </Link>;
export default NavLink;
