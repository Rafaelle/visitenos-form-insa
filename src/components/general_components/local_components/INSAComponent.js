import React from 'react';
import ChoiseButtonGroup from '../../primary_components/ChoiseButtonGroup';
import ChoiseButton from '../../primary_components/ChoiseButton';

const INSAComponent = ({ value, error, onChange, onBlur}) => {

    return (
        <ChoiseButtonGroup
            id="sedeInsa"
            label="SEDE INSA"
            value={value}
            error={error}
            classDirectionInputgroup="input-group-column"          
        >
            <h5>Exposição</h5>

            <ChoiseButton
                name="localINSA"
                id="SistemaCaptacaoAguaChuvas"
                value='Sistema de captação e armazenamento de água de chuvas'
                type="checkbox"
                label='Sistema de captação e armazenamento de água de chuvas'
                onChange={onChange}
                onBlur={onBlur}
                className="local"
                classNameInput="checkbox-button"
            />
            <ChoiseButton
                name="localINSA"
                id="sistemaReusoAgricolas"
                value="Sistema de reuso para fins agrícolas"
                type="checkbox"
                label="Sistema de reuso para fins agrícolas"
                onChange={onChange}
                onBlur={onBlur}
                className="local"
                classNameInput="checkbox-button"
            />
            <ChoiseButton
                name="localINSA"
                id="estrategiasContencaoSolosDesertificacao"
                value="Estrátegias de contenção de solos e combate a desertificação"
                type="checkbox"
                label="Estrátegias de contenção de solos e combate a desertificação"
                onChange={onChange}
                onBlur={onBlur}
                className="local"
                classNameInput="checkbox-button"
            />

            <ChoiseButton
                name="localINSA"
                id="colecaoCactos"
                value="Coleções de cactos"
                type="checkbox"
                label="Coleções de cactos"
                onChange={onChange}
                onBlur={onBlur}
                className="local"
                classNameInput="checkbox-button"
            />
        </ChoiseButtonGroup>
    )
}

export default INSAComponent;