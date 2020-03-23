import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul>
        <NavigationItem link='/'>Burger Builder</NavigationItem>
        <NavigationItem link='/checkout'>Checkout</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
    </ul>
)

export default NavigationItems;