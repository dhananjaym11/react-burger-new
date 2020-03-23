import React from 'react';

const Order = ({ ingredients, price }) => {
    const ingArr = [];
    Object.keys(ingredients).forEach(type => {
        if (ingredients[type]) {
            ingArr.push({
                type: type,
                value: ingredients[type]
            })
        }
    });

    return (
        <li>
            <h3>Ingredients: {
                ingArr.map(ing => (
                    <span key={ing.type}>{ing.type}({ ing.value}), </span>
                ))
            }</h3>
            <h4>Price: {price.toFixed(2)}</h4>
        </li>
    )
}

export default Order;