import React from "react";
import classnames from 'classnames';
import Label from './Label';

const ChoiseButton = ({ name, id, value, label, onChange, onBlur, className, hour, type, classNameInput }) => {
    //Adicionar outra classe
    const classes = classnames(
        className
    );
    return (
        <div className={classes}>
            <input
                name={name}
                id={id}
                type={type}
                value={value} // could be something else for output?
                onChange={onChange}
                onBlur={onBlur}
                className={classnames({ classNameInput })}
            />
            <Label htmlFor={id} >
                {label} <br /> {hour}
            </Label>
        </div>
    );
};

export default ChoiseButton;