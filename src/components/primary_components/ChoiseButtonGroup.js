
import React from 'react';
import classnames from 'classnames';
import InputFeedback from './InputFeedback';

const ChoiseButtonGroup = ({ id, label, error, className, children, classDirectionInputgroup }) => {
    const classes = classnames(
        "div-group",
        {
            "error": !!error,
        },
        className
    );
    return (
        <fieldset className={classes} >
            <legend className="title-box-element" >{label}</legend>
            <div id={id} className={classDirectionInputgroup}>
                {children}
            </div>
            <InputFeedback error={error} />
        </fieldset>
    );
};

export default ChoiseButtonGroup;