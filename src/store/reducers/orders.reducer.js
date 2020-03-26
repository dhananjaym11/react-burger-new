import * as actionType from '../actionType';

const INITIAL_STATE = {
    orders: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.FETCH_ORDERS:
            return {
                ...state,
                orders: state.orders.concat(action.orders)
            }
        default:
            return state;
    }
}

export default reducer;