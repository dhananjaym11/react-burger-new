import { combineReducers } from 'redux';

import ordersReducer from './orders.reducer';
import burderBuilderReducer from './burgerBuilder.reducer';

const rootReducer = combineReducers({
    ordersReducer: ordersReducer,
    burderBuilderReducer: burderBuilderReducer
});

export default rootReducer;
