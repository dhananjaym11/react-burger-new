import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul>
        <NavigationItem link='/'>Burger Builder</NavigationItem>
        <NavigationItem link='/checkout'>checkout</NavigationItem>
    </ul>
)

export default NavigationItems;