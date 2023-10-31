import React from 'react';

const Input = ({ header, placeholder, type, handleInput }) => {
    return (
        <div className="Input">
            <h3>{header}</h3>
            <input type={type} placeholder={placeholder} onChange={handleInput} />
        </div>
    );
};

export default Input;