import React from 'react';
import PropTypes from 'prop-types';

class BurgerIngredient extends React.Component {

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div>bread-bottom</div>
                break;
            case ('bread-top'):
                ingredient = <div>bread-top</div>
                break;
            case ('meat'):
                ingredient = <div>meat</div>
                break;
            case ('cheese'):
                ingredient = <div>cheese</div>
                break;
            case ('bacon'):
                ingredient = <div>bacon</div>
                break;
            case ('salad'):
                ingredient = <div>salad</div>
                break;
            default:
                ingredient = null;
        }

        return ingredient
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;