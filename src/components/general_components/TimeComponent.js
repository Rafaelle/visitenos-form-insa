import React from 'react';
import ChoiseButtonGroup from '../primary_components/ChoiseButtonGroup'
import ChoiseButton from '../primary_components/ChoiseButton'


const TimeComponent = ({value, error, onChange, onBlur}) =>{

    return (

        <ChoiseButtonGroup
                    id="horarios"
                    label="HORÁRIO DA VISITA"
                    value={value}
                    error={error}
                    className="elements-group"
                    classDirectionInputgroup="input-group-row">
                    <ChoiseButton
                        component={ChoiseButton}
                        name="horario"
                        id="horarioManha"
                        type="radio"
                        label="Manhã:"
                        hour="8:30h às 11:30h"
                        onChange={onChange}
                        onBlur={onBlur}
                        className="horario"
                        classNameInput="radio-button"
                        value='manhã'
                    />
                    <ChoiseButton
                        component={ChoiseButton}
                        name="horario"
                        id="horarioTarde"
                        type="radio"
                        label="Tarde:"
                        hour="das 13:30h às 16:30h"
                        onChange={onChange}
                        onBlur={onBlur}
                        className="horario"
                        classNameInput="radio-button"
                        value='tarde'

                    />
                    <ChoiseButton
                        component={ChoiseButton}
                        name="horario"
                        id="horarioManhaTarde"
                        type="radio"
                        label="Manhã e Tarde:"
                        hour="das 8:30h às 16:30h"
                        onChange={onChange}
                        onBlur={onBlur}
                        className="horario"
                        classNameInput="radio-button"
                        value='manhã e tarde'

                    />
                </ChoiseButtonGroup>
    )

}

export default TimeComponent;