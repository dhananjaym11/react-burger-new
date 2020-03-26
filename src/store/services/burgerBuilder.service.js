import { initIngredients } from '../actions';

export default {
    getInitialIngredients: () => {
        return (dispatch) => {
            debugger
            return fetch('https://react-burger-new-cf0b5.firebaseio.com/ingredients.json')
                .then(res => res.json())
                .then(result => dispatch(initIngredients(result)));
        }
    }
}