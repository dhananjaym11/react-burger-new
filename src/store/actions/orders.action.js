import * as actionType from '../constants';

export const orderAction = (orders) => ({
    type: actionType.FETCH_ORDERS,
    orders
})