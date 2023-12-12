import React from "react";

const SelectForm = ({ name, value, onChange, options }) => {
    return (
        <div className="mb-3">
            <label className="form-label">{name}</label>
            <select
                className="form-select"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectForm;