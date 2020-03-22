import React from 'react';

import { INGREDIENT_PRICES } from '../../config/constants';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

class BurgerBuilder extends React.Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        showModal: false,
        showSpinner: false,
        errorMsg: null
    }

    componentDidMount() {
        fetch('https://react-burger-new-cf0b5.firebaseio.com/ingredients.json')
            .then(res => res.json())
            .then(result => this.setState({ ingredients: result }));
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

    purchaseHandler = () => {
        this.setState({
            showModal: false,
            showSpinner: true
        })
        const data = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice
        }
        fetch('https://react-burger-new-cf0b5.firebaseio.com/orders.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(result => {
                this.setState({
                    showSpinner: false
                })
            })
            .catch(error => {
                this.setState({
                    showSpinner: false,
                    errorMsg: error
                })
            });
    }

    render() {
        let disabledInfo = null;
        let orderDisabled = null;
        if (this.state.ingredients) {
            disabledInfo = { ...this.state.ingredients };
            for (let key in disabledInfo) {
                disabledInfo[key] = disabledInfo[key] <= 0;
            }
            orderDisabled = !Object.values(this.state.ingredients).reduce((sum, val) => sum + val, 0);
        }

        return (
            <>
                {this.state.ingredients ? <>
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
                            totalPrice={this.state.totalPrice}
                            purchaseHandler={this.purchaseHandler}
                            toggleModal={this.toggleModal} />
                    </Modal>
                    <Spinner isShow={this.state.showSpinner} />
                </> :
                    <Spinner isShow={true} />
                }
            </>
        )
    }
}

export default BurgerBuilder;