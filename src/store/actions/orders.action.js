import * as actionType from '../actionType';

export const orderAction = (orders) => ({
    type: actionType.FETCH_ORDERS,
    orders
})