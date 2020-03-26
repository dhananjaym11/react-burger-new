import React from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions'
import burgerBuilderService from '../../store/services/burgerBuilder.service';

class BurgerBuilder extends React.Component {
    state = {
        showModal: false,
        errorMsg: null
    }

    componentDidMount() {
        this.props.getInitialIngredients();
    }

    updateIngredients = (ingredient, operator) => {
        const updatedIngredients = { ...this.props.ingredients };
        if (operator === '+') {
            this.props.addIngredient(ingredient)
        } else {
            if (updatedIngredients[ingredient]) {
                this.props.removeIngredient(ingredient)
            }
        }
    }

    toggleModal = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }))
    }

    purchaseHandler = () => {
        this.props.history.push('/checkout');
    }

    render() {
        let disabledInfo = null;
        let orderDisabled = null;
        if (this.props.ingredients) {
            disabledInfo = { ...this.props.ingredients };
            for (let key in disabledInfo) {
                disabledInfo[key] = disabledInfo[key] <= 0;
            }
            orderDisabled = !Object.values(this.props.ingredients).reduce((sum, val) => sum + val, 0);
        }

        return (
            <>
                {this.props.ingredients ? <>
                    <Burger
                        ingredients={this.props.ingredients}
                    />
                    <BuildControls
                        totalPrice={this.props.totalPrice}
                        updateIngredients={this.updateIngredients}
                        disabledInfo={disabledInfo}
                        orderDisabled={orderDisabled}
                        handleOrderNow={this.toggleModal}
                    />
                    <Modal
                        showModal={this.state.showModal}
                        toggleModal={this.toggleModal}>
                        <OrderSummary
                            ingredients={this.props.ingredients}
                            totalPrice={this.props.totalPrice}
                            purchaseHandler={this.purchaseHandler}
                            toggleModal={this.toggleModal} />
                    </Modal>
                </> :
                    <Spinner isShow={true} />
                }
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    ingredients: state.burderBuilderReducer.ingredients,
    totalPrice: state.burderBuilderReducer.totalPrice
});

const mapDispatchToProps = (dispatch) => ({
    getInitialIngredients: () => dispatch(burgerBuilderService.getInitialIngredients()),
    addIngredient: (ingredientName) => dispatch(actions.addIngredient(ingredientName)),
    removeIngredient: (ingredientName) => dispatch(actions.removeIngredient(ingredientName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);