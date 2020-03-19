import React from 'react';

const Spinner = ({ isShow }) => (
    <div
        className="spinner"
        style={{ display: isShow ? 'block' : 'none' }}>
        <div>Loading</div>
    </div>
)

export default Spinner;