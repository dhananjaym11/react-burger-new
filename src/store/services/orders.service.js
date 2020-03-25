import { orderAction } from '../actions';

export default {
    fetchOrders: () => {
        return (dispatch) => {
            return fetch('https://react-burger-new-cf0b5.firebaseio.com/orders.json')
                .then(res => res.json())
                .then(results => {
                    const orders = Object.keys(results).map(key => (
                        {
                            id: key,
                            ...results[key]
                        }
                    ))
                    dispatch(orderAction(orders))
                });
        }
    }
}