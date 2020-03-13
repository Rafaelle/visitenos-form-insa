import React from 'react';
import MaskedInput from 'react-text-mask';
import classnames from 'classnames';
import Label from './Label';
import InputFeedback from './InputFeedback';


const TelephoneInput = ({ type, id, label, placeholder, error, onChange, className, mask, value, onBlur }) => {
    const classes = classnames(
        'input-element',
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
            <MaskedInput
                id={id}
                className="text-input"
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                mask={mask}
                onBlur={onBlur} />
            <InputFeedback error={error} />
        </div>
    );
};

export default TelephoneInput;
