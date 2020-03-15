import React from 'react';

const OrderSummary = ({ ingredients, totalPrice, toggleModal }) => {
    const ingredientsSummary = Object.entries(ingredients).filter(i => i[1] > 0);
    return (
        <>
            <h4>Your order summary</h4>
            <h5>Total Price: {totalPrice.toFixed(2)}</h5>
            <ul>
                {ingredientsSummary.map(ing => (<li key={ing[0]}>{ing[0]}: {ing[1]}</li>))}
            </ul>
            <p>Continue shopping?</p>
            <div className="buttons">
                <button>Yes</button>
                <button onClick={toggleModal}>Cancel</button>
            </div>
        </>
    )
}

export default OrderSummary;