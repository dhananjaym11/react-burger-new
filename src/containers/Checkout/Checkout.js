import React from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends React.Component {
    state = {
        ingredients: {},
        totalPrice: 4
    }

    componentDidMount() {
        const paramStr = this.props.location.search;
        let totalPrice = 4;
        if (paramStr) {
            const paramArr = paramStr.slice(1).split('&');
            const ing = {};
            paramArr.forEach(s => {
                const k = s.split('=');
                if (k[0] === 'price') {
                    totalPrice = k[1];
                } else {
                    ing[k[0]] = parseInt(k[1]);
                }
            });
            this.setState({
                ingredients: ing,
                totalPrice: totalPrice
            });
        }
    }

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
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelled}
                    checkoutContinue={this.checkoutContinue} />

                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={() => (<ContactData
                        ingredients={this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                    />)} />
            </div>
        )
    }
}

export default Checkout;