import React from 'react';

const ModalLoading = ({text}) => {

        return (
            <div className="modal-outer" id="modal-wrapper">
                <section className='modal'>
                    <h4>{text}</h4>
                </section>
            </div>
        )
}

export default ModalLoading;