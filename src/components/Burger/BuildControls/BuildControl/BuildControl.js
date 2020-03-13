import React from 'react';

const BuildControl = ({ label, updateIngredients, disabled }) => {
    return (
        <div>
            <span>{label}</span>
            <button
                disabled={disabled}
                onClick={() => updateIngredients(label, '-')}
            >less</button>
            <button
                onClick={() => updateIngredients(label, '+')}
            >more</button>
        </div>
    );
}

export default BuildControl;