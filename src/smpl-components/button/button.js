import React from 'react';

const Button = ({ title = 'Default', className = 'button', onChange, styles = {}, ...props }) => {
    return (
        <button className={className} onClick={onChange} style={styles} {...props}>{title}</button>
    )
};

export default Button;