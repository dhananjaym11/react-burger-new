import React from 'react';
import { Link } from 'react-router-dom';

import NavigationItems from './NavigationItems/NavigationItems';

const Header = () => (
    <header>
        <Link to="/">Header</Link>
        <NavigationItems />
    </header>
)

export default Header;