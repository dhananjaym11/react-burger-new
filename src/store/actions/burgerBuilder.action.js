import * as actionType from '../actionType';

export const addIngredient = (ingredientName) => ({
    type: actionType.ADD_INGREDIENTS,
    ingredientName
})

export const removeIngredient = (ingredientName) => ({
    type: actionType.REMOVE_INGREDIENTS,
    ingredientName
})

export const initIngredients = () => ({
    type: actionType.INIT_INGREDIENTS
})