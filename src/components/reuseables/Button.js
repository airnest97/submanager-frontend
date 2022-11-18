import React from 'react';

const Button = ({children, type, onClick, buttonStyle,disabled=false}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type ={type}
            className={buttonStyle}
        style={(disabled)? { cursor: 'not-allowed'} : {}}>
            {children}
        </button>
    );
};

export default Button;