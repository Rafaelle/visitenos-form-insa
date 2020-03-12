import React from "react";
import classnames from "classnames";
import TelephoneInput from "../primary_components/TelephoneInput";
import TextInput from "../primary_components/TextInput";

const DataComponent = ({ id,legend, onChange, onBlur, idName, nameLabel,errorName, idTelphone, telephoneLabel, errorTelphone, idEmail, emailLabel, errorEmail }) => {
    const classes = classnames(
        "elements-group",
        "div-group"
    );
    return (

        <fieldset id={id} className={classes}>
            <legend className="title-box-element">{legend}</legend>

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
                <TelephoneInput
                    id={idTelphone}
                    type="text"
                    label={telephoneLabel + ":"}
                    placeholder={telephoneLabel}
                    error={errorTelphone}
                    onChange={onChange}
                    onBlur={onBlur}
                    mask={["(", "0", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/], ["(", "0", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
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

