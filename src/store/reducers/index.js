import { combineReducers } from 'redux';

import ordersReducer from './orders.reducer';

const rootReducer = combineReducers({
    ordersReducer: ordersReducer
});

export default rootReducer;
