import React from 'react';

const Modal = ({isModalActive, onCloseModal, children}) => {
    return (
        <aside className={( isModalActive ? "is-active ": "") + "modal"}>
            <div 
                className="modal-background"
                onClick={() => { onCloseModal(false); }} ></div>
            <div className="modal-content">
                {children}
            </div>
            <button
                aria-label="close"
                className="modal-close is-large"
                onClick={() => { onCloseModal(false); }} />
        </aside>
    )
}

export default Modal;