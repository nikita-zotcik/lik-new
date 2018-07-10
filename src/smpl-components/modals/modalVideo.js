import React from 'react';

const ModalVideo = ({ title = 'Video guide: Sådan synkroniserer du Likvido med Dinero', url = '', onChange = () => { } }) => {
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-header">
                    <div className="modal-header-title">
                        {title}
                    </div>
                    <div className="modal-header-icon">
                        <a className='close' />
                    </div>
                </div>
                <div className="modal-video">
                    {/* <video width="400" height="300"  src="https://youtube.com/watch?v=yBLdQ1a4-JI" controls="controls" poster="video/duel.jpg"/> */}
                    <iframe width="760" height="400" src="https://www.youtube.com/embed/Ct6BUPvE2sM" frameborder="0" allow="autoplay; encrypted-media" />
                </div>
            </div>
        </div>
    )
};

export default ModalVideo;