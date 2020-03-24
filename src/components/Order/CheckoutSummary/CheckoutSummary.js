import React from 'react';

import Burger from '../../Burger/Burger';

const CheckoutSummary = (props) => (
    <div>
        <Burger
            ingredients={props.ingredients}
        />
        <div className="buttons">
            <button disabled={!Object.keys(props.ingredients).length} onClick={props.checkoutContinue}>Continue</button>
            <button onClick={props.checkoutCancelled}>Cancel</button>
        </div>
    </div>
)

export default CheckoutSummary;