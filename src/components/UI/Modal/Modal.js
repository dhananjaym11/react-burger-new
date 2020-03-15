import React from 'react';

import Backdrop from '../Backdrop/Backdrop';

class Modal extends React.Component {
    shouldComponentUpdate(prevState) {
        return prevState.showModal !== this.props.showModal
    }

    render() {
        return (
            <div className="modal-div" style={{ display: this.props.showModal ? 'block' : 'none' }} >
                <Backdrop toggleModal={this.props.toggleModal} />
                <div className="modal" >
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Modal;