import React from 'react';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends React.Component {
    state = {
        orders: []
    }

    componentDidMount() {
        fetch('https://react-burger-new-cf0b5.firebaseio.com/orders.json')
            .then(res => res.json())
            .then(results => {
                const orders = Object.keys(results).map(key => (
                    {
                        id: key,
                        ...results[key]
                    }
                ))
                this.setState({ orders })
            });
    }

    render() {
        return (
            <div>
                <h2>Orders</h2>
                {
                    this.state.orders.length ?
                        <ul>
                            {
                                this.state.orders.map(order =>
                                    <Order
                                        key={order.id}
                                        ingredients={order.ingredients}
                                        price={+order.price} />
                                )
                            }
                        </ul>
                        : <Spinner isShow={true} />
                }
            </div>
        )
    }
}

export default Orders;