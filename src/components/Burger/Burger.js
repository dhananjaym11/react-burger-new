import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let ingredientsUI = Object.keys(props.ingredients)
        .map(ingredient => {
            return [...Array(props.ingredients[ingredient])]
                .map((_, i) => <BurgerIngredient key={ingredient + i} type={ingredient} />)
        })
        .reduce((arr, el) => arr.concat(el), [])
    if (!ingredientsUI.length) {
        ingredientsUI = 'Please add ingredients'
    }
    return (
        <div style={{ height: 100, overflow: 'auto' }}>
            <BurgerIngredient type='bread-top' />
            {ingredientsUI}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger;