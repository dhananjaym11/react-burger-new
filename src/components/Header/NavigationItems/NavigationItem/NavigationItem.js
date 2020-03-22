import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => (
    <li>
        <NavLink
            exact
            to={props.link}
        >{props.children} </NavLink>
    </li>
);

export default NavigationItem;