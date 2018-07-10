import React from 'react';

const Checkbox = ({ title = 'Default', url = '', onChange = () => { } }) => {
    return (
        <label className="container-custom-checkbox container-checkbox-value">
            {title} <a href={url}>handelsbetingelser </a>
            <input type="checkbox" />
            <span className="custom-checkmark " onClick={onChange}></span>
        </label>
    )
};

export default Checkbox;