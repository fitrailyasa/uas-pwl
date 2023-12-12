import React from 'react';

const InputForm = ({ name, type, placeholder, value, onChange }) => {
    return (
        <div className="mb-3">
            <label className="form-label">{name}</label>
            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default InputForm;