import React, { useState } from 'react';
import './Input.scss';

const Input = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, important, type, placeholder, errorMessage, errorIcon, iconEye, onClick, onChange, ...inputProps } =
        props;

    const handleFocus = () => {
        setFocused(true);
    };
    return (
        <div className="form-control relative">
            <div className="flex items-center">
                <label className="label pt-4">{label}</label>
                <span className="red text-sm font-light">{important}</span>
            </div>
            <input
                className="input input-bordered  relative "
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
                focused={focused.toString()}
                {...inputProps}
            />
            <p className="error-icon absolute right-0 px-5 cursor-pointer">{errorIcon}</p>

            <p className="icon-eye absolute right-0 px-5 cursor-pointer text-slate-500" onClick={onClick}>
                {iconEye}
            </p>

            <span className="error-message">{errorMessage}</span>
        </div>
    );
};

export default Input;
