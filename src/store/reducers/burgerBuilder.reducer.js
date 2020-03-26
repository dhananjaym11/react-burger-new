import * as actionType from '../actionType';
import { INGREDIENT_PRICES } from '../../config/constants';

const INITIAL_STATE = {
    ingredients: null,
    totalPrice: 4,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIENTS:
            const addedIngredients = {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            }
            return {
                ...state,
                ingredients: addedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
        case actionType.REMOVE_INGREDIENTS:
            const removedIngredients = {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            }
            return {
                ...state,
                ingredients: removedIngredients,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
        case actionType.INIT_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients
            }
        default:
            return state
    }
}

export default reducer;