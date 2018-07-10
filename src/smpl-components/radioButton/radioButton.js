import React from 'react';

const RadioButton = ({ status = '', onChange = () => { }, styles = {}, ...props }) => {
    return (
        <div className="status-field" onClick={onChange}>
            <div className="status">
                <div className={status}></div>
            </div>
        </div>
    )
};

export default RadioButton;