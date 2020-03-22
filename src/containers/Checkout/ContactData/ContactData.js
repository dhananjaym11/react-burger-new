import React from 'react';

import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            code: ''
        },
        showSpinner: false
    }

    sumbitHandler = () => {
        console.log(this.props.ingredients)

        this.setState({
            showSpinner: true
        })
        const data = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice
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
        return (
            <div>
                <h3>Enter Address</h3>
                <form>
                    <div>
                        <input type="text" name="name" placeholder="Enter Name" />
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="Enter Email" />
                    </div>
                    <div>
                        <input type="text" name="street" placeholder="Enter Street" />
                    </div>
                    <div>
                        <input type="text" name="code" placeholder="Enter Code" />
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

export default ContactData;