import React from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import ordersService from '../../store/services/orders.service';

class Orders extends React.Component {
    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        return (
            <div>
                <h2>Orders</h2>
                {
                    this.props.orders.length ?
                        <ul>
                            {
                                this.props.orders.map(order =>
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

const mapStateToProps = (state) => ({ orders: state.ordersReducer.orders })

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: () => dispatch(ordersService.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);