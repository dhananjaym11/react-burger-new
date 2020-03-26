import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends React.Component {

    checkoutCancelled = () => {
        this.props.history.push('/')
    }

    checkoutContinue = () => {
        this.props.history.push('/checkout/contact-data')
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ingredients}
                    checkoutCancelled={this.checkoutCancelled}
                    checkoutContinue={this.checkoutContinue} />

                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={() => (<ContactData
                        ingredients={this.props.ingredients}
                        totalPrice={this.props.totalPrice}
                    />)} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ingredients: state.burderBuilderReducer.ingredients,
    totalPrice: state.burderBuilderReducer.totalPrice
})

export default connect(mapStateToProps)(Checkout);