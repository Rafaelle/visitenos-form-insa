import React from 'react';
import ChoiseButtonGroup from '../../primary_components/ChoiseButtonGroup';
import ChoiseButton from '../../primary_components/ChoiseButton';
import classnames from "classnames";

const ExperimentalStationComponent = ({ value, error, onChange, onBlur }) => {
    const classes = classnames(
        "elements-group",
        "div-group"
    );

    return (

        <ChoiseButtonGroup
            id="estacaoExperimental"
            label="Estação Experimental"
            value={value}
            error={error}
            classDirectionInputgroup="input-group-column"
        >
            <div id='exposicao'>
                <h5>Exposição</h5>
                <ChoiseButton
                    name="localEstacaoExperimental"
                    id="biodigestor"
                    value="Biodigestor"
                    type="checkbox"
                    label="Biodigestor"
                    onChange={onChange}
                    onBlur={onBlur}
                    className="local"
                    classNameInput="checkbox-button"
                />

                <ChoiseButton
                    name="localEstacaoExperimental"
                    id="viveiroMudas"
                    value="Viveiro de mudas"
                    type="checkbox"
                    label="Viveiro de mudas"
                    onChange={onChange}
                    onBlur={onBlur}
                    className="local"
                    classNameInput="checkbox-button"
                />

                <ChoiseButton
                    name="localEstacaoExperimental"
                    id="estacaoMetereologica"
                    value="Estação meteorológica"
                    type="checkbox"
                    label="Estação meteorológica"
                    onChange={onChange}
                    onBlur={onBlur}
                    className="local"
                    classNameInput="checkbox-button"
                />

                <ChoiseButton
                    name="localEstacaoExperimental"
                    id="estacaoMetereologica"
                    value="Estação meteorológica"
                    type="checkbox"
                    label="Estação meteorológica"
                    onChange={onChange}
                    onBlur={onBlur}
                    className="local"
                    classNameInput="checkbox-button"
                />

                <ChoiseButton
                    name="localEstacaoExperimental"
                    id="barreiroInteligenteBarragemMeiaLua"
                    value="Barreiro Inteligente e Barragem Meia Lua"
                    type="checkbox"
                    label="Barreiro Inteligente e Barragem Meia Lua"
                    onChange={onChange}
                    onBlur={onBlur}
                    className="local"
                    classNameInput="checkbox-button"
                />

                <ChoiseButton
                    name="localEstacaoExperimental"
                    id="gadocurraleiro"
                    value="Gado Curraleiro Pé Duro"
                    type="checkbox"
                    label="Gado Curraleiro Pé Duro"
                    onChange={onChange}
                    onBlur={onBlur}
                    className="local"
                    classNameInput="checkbox-button"
                />

                <ChoiseButton
                    name="localEstacaoExperimental"
                    id="forragemNativa"
                    value="Forragens nativas da caatinga"
                    type="checkbox"
                    label="Forragens nativas da caatinga"
                    onChange={onChange}
                    onBlur={onBlur}
                    className="local"
                    classNameInput="checkbox-button"
                />

                <ChoiseButton
                    name="localEstacaoExperimental"
                    id="campoExperimentacaoPalma"
                    value="Campos de experimentação da palma forrageira resistente a cochonilha do carmim"
                    type="checkbox"
                    label="Campos de experimentação da palma forrageira resistente a cochonilha do carmim"
                    onChange={onChange}
                    onBlur={onBlur}
                    className="local"
                    classNameInput="checkbox-button"
                />

            </div>

            <div id="laboratorios">
                <h5>Laboratórios</h5>


                <ChoiseButton
                    name="localEstacaoExperimental"
                    id="labAnaliseAlimentos"
                    value="Laboratório de Análise de Alimentos"
                    type="checkbox"
                    label="Laboratório de Análise de Alimentos"
                    onChange={onChange}
                    onBlur={onBlur}
                    className="local"
                    classNameInput="checkbox-button"
                />

                <ChoiseButton
                    name="localEstacaoExperimental"
                    id="labMicrobiologiaAmbiental"
                    value="Laboratório de Microbiologia Ambiental"
                    type="checkbox"
                    label="Laboratório de Microbiologia Ambiental"
                    onChange={onChange}
                    onBlur={onBlur}
                    className="local"
                    classNameInput="checkbox-button"
                />

                <ChoiseButton
                    name="localEstacaoExperimental"
                    id="labMicropropagacao"
                    value="Laboratório de Micropropagação"
                    type="checkbox"
                    label="Laboratório de Micropropagação"
                    onChange={onChange}
                    onBlur={onBlur}
                    className="local"
                    classNameInput="checkbox-button"
                />

                <ChoiseButton
                    name="localEstacaoExperimental"
                    id="labSolos"
                    value="Laboratório de Solos"
                    type="checkbox"
                    label="Laboratório de Solos"
                    onChange={onChange}
                    onBlur={onBlur}
                    className="local"
                    classNameInput="checkbox-button"
                />

            </div>
        </ChoiseButtonGroup>
    )
}

export default ExperimentalStationComponent;