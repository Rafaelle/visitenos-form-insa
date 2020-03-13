import React from "react";
import classnames from "classnames";
import TextMaskedInput from "../primary_components/TextMaskedInput";
import TextInput from "../primary_components/TextInput";

const DataComponent = ({ id,legend, onChange, onBlur, idName, nameLabel,errorName, idTelphone, telephoneLabel, errorTelphone,valueTelephone, idEmail, emailLabel, errorEmail }) => {
    const classes = classnames(
        "elements-group",
        "div-group"
    );
    return (

        <fieldset id={id} className={classes}>
            <legend className="title-fieldset-element">{legend}</legend>

            <TextInput
                id={idName}
                type="text"
                label={nameLabel + ":"}
                placeholder={nameLabel}
                error={errorName}
                onChange={onChange}
                onBlur={onBlur}
            />
            <div className="input-group-row">
                <TextMaskedInput
                    id={idTelphone}
                    type="text"
                    label={telephoneLabel + ":"}
                    placeholder={telephoneLabel}
                    error={errorTelphone}
                    onChange={onChange}
                    onBlur={onBlur}
                    mask={["(", "0", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/,/\d/, "-", /\d/, /\d/, /\d/, /\d/]}
                    value = {valueTelephone}
                />
                <TextInput
                    id={idEmail}
                    type="email"
                    label={emailLabel + ":"}
                    placeholder={emailLabel}
                    error={errorEmail}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>
        </fieldset>
    );
};

export default DataComponent;

