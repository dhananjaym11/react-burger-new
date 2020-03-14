import React from 'react';

import { INGREDIENT_PRICES } from '../../config/constants';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        showModal: false
    }

    updateIngredients = (ingredient, operator) => {
        const updatedIngredients = { ...this.state.ingredients };
        let updatedTotalPrice = this.state.totalPrice;
        if (operator === '+') {
            updatedIngredients[ingredient] = updatedIngredients[ingredient] + 1;
            updatedTotalPrice += INGREDIENT_PRICES[ingredient];
        } else {
            if (updatedIngredients[ingredient]) {
                updatedIngredients[ingredient] = updatedIngredients[ingredient] - 1;
                updatedTotalPrice -= INGREDIENT_PRICES[ingredient];
            }
        }
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedTotalPrice
        })
    }

    toggleModal = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }))
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        const orderDisabled = !Object.values(this.state.ingredients).reduce((sum, val) => sum + val, 0);

        return (
            <>
                <Burger
                    ingredients={this.state.ingredients}
                />
                <BuildControls
                    totalPrice={this.state.totalPrice}
                    updateIngredients={this.updateIngredients}
                    disabledInfo={disabledInfo}
                    orderDisabled={orderDisabled}
                    handleOrderNow={this.toggleModal}
                />
                <Modal
                    showModal={this.state.showModal}
                    toggleModal={this.toggleModal}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        toggleModal={this.toggleModal} />
                </Modal>
            </>
        )
    }
}

export default BurgerBuilder