import React from 'react';

const Backdrop = ({ toggleModal }) => (
    <div className="backdrop" onClick={toggleModal}></div>
)

export default Backdrop;