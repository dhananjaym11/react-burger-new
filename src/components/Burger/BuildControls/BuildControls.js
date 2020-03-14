import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import { INGREDIENT_PRICES } from '../../../config/constants';

const BuildControls = (props) => {
    return (
        <div style={{ marginTop: 20 }}>
            <h4>Total Price: {props.totalPrice.toFixed(2)}</h4>
            {
                Object.keys(INGREDIENT_PRICES).map(ingredient => (
                    <BuildControl
                        key={ingredient}
                        label={ingredient}
                        disabled={props.disabledInfo[ingredient]}
                        updateIngredients={props.updateIngredients} />
                ))
            }
            <button
                onClick={props.handleOrderNow}
                disabled={props.orderDisabled}
                style={{ marginTop: 10 }}
            >Order Now</button>
        </div>
    );
}

export default BuildControls;