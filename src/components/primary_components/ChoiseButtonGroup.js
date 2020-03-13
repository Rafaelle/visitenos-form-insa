
import React from 'react';
import classnames from 'classnames';
import InputFeedback from './InputFeedback';

const ChoiseButtonGroup = ({ idBox, id, label, error, className, children, classDirectionInputgroup }) => {
    const classes = classnames(
        "div-group",
        {
            "error": !!error,
        },
        className
    );
    return (
        <fieldset id={idBox} className={classes} >
            <legend className="title-fieldset-element" >{label}</legend>
            <hr/>
            <div id={id} className={classDirectionInputgroup}>
                {children}
            </div>
            <InputFeedback error={error} />
        </fieldset>
    );
};

export default ChoiseButtonGroup;