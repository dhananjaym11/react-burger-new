import React from 'react';

import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ showModal, children, toggleModal }) => (
    <div className="modal-div" style={{ display: showModal ? 'block' : 'none' }} >
        <Backdrop toggleModal={toggleModal} />
        <div className="modal" >
            {children}
        </div>
    </div>
)

export default Modal;