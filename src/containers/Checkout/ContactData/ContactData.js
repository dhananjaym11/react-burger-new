import React from 'react';

import Spinner from '../../../components/UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        street: '',
        code: '',
        deliveryMethod: 'normal',
        showSpinner: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sumbitHandler = () => {
        this.setState({
            showSpinner: true
        })
        const data = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            address: {
                name: this.state.name,
                email: this.state.email,
                street: this.state.street,
                code: this.state.code
            },
            deliveryMethod: this.state.deliveryMethod
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
                });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    showSpinner: false,
                    errorMsg: error
                })
            });
    }

    render() {
        return (
            <div>
                <h3>Enter Details</h3>
                <form>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Name"
                            onChange={this.handleChange}
                            value={this.state.name} />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter Email"
                            onChange={this.handleChange}
                            value={this.state.email} />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="street"
                            placeholder="Enter Street"
                            onChange={this.handleChange}
                            value={this.state.street} />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="code"
                            placeholder="Enter Code"
                            onChange={this.handleChange}
                            value={this.state.code} />
                    </div>
                    <div>
                        <select
                            name="deliveryMethod"
                            onChange={this.handleChange}
                            value={this.state.deliveryMethod}>
                            <option value="slow">Slow</option>
                            <option value="normal">Normal</option>
                            <option value="fast">Fast</option>
                        </select>
                    </div>
                    <div>
                        <button type="button" onClick={this.sumbitHandler}>Submit</button>
                    </div>
                </form>
                <Spinner isShow={this.state.showSpinner} />
            </div>
        )
    }
}

export default withRouter(ContactData);