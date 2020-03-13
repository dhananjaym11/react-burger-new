import React from 'react';

import { INGREDIENT_PRICES } from '../../config/constants';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4.00
    }

    updateIngredients = (ingredient, operator) => {
        const prevState = { ...this.state.ingredients };
        let totalPrice = this.state.totalPrice;
        if (operator === '+') {
            prevState[ingredient] = prevState[ingredient] + 1;
            totalPrice += INGREDIENT_PRICES[ingredient];
        } else {
            if (prevState[ingredient]) {
                prevState[ingredient] = prevState[ingredient] - 1;
                totalPrice -= INGREDIENT_PRICES[ingredient];
            }
        }
        this.setState({
            ingredients: prevState,
            totalPrice: totalPrice
        })
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <>
                <Burger
                    ingredients={this.state.ingredients}
                />
                <BuildControls
                    totalPrice={this.state.totalPrice}
                    updateIngredients={this.updateIngredients}
                    disabledInfo={disabledInfo}
                />
            </>
        )
    }
}

export default BurgerBuilder