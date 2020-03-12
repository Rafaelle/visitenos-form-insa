import React from 'react';
import classnames from 'classnames';
import Label from './Label';
import InputFeedback from './InputFeedback';


const TextInput = ({ type, id, label, placeholder, error, onChange, className, onBlur }) => {
    //Adicionar outra classe
    const classes = classnames(
        'input-element',
        'form-group',
        {
            'error': !!error,
        },
        className
    );
    return (
        <div className={classes}>
            <Label htmlFor={id} error={error}>
                {label}
            </Label>
            <input
                id={id}
                className="text-input"
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
            />
            <InputFeedback error={error} />
        </div>
    );
};

export default TextInput;