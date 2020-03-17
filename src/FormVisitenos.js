import React from "react";
import { useFormik } from "formik";

import * as Yup from "yup";

import DataComponent from "./components/general_components/DataComponent";
import TimeComponent from "./components/general_components/TimeComponent";
import INSAComponent from "./components/general_components/local_components/INSAComponent";
import ExperimentalStationComponent from "./components/general_components/local_components/ExperimentalStationComponent";
/*import {
    isMobile
} from "react-device-detect";
*/
import TextInput from "./components/primary_components/TextInput";

const initialValues = {
    nomeInstituicao: "",
    telefoneInstituicao: "",
    emailInstituicao: "",
    nomeResponsavel: "",
    telefoneResponsavel: "",
    emailresponsavel: "",
    nVisitantes: "",
    dataVisita: "",
    objetivoCaracteristicas: "",
    horario: ""
};

const validationSchema = Yup.object().shape({
    nomeInstituicao: Yup.string()
        .label('Nome instituição visitante')
        .required('Por favor, digite o nome da Instituição'),
    telefoneInstituicao: Yup.string()
        .label('Telefone da instituição visitante')
        .min(4, 'Please enter no more than 40 characters')
        .required('Por favor, digite o número do telefone com DDD'),
    emailInstituicao: Yup.string()
        .label('Nome instituição visitante')
        .email("Por favor, adicione um e-mail válido"),
    nomeResponsavel: Yup.string()
        .label('Nome instituição visitante')
        .min(4, 'Mínimo 4 caracteres')
        .required('Por favor, digite o nome do Responsável'),
    telefoneResponsavel: Yup.string()
        .label('Telefone da instituição visitante')
        .required('Por favor, digite o número do telefone com DDD'),
    emailresponsavel: Yup.string()
        .label('Nome instituição visitante')
        .email("Por favor, adicione um e-mail válido")
        .required('Por favor, digite um endereço de e-mail'),
    nVisitantes: Yup.number()
        .label('Número de visitantes')
        .required('Por favor, digite um número'),
    dataVisita: Yup.date()
        .label('Data da visita')
        .required('Por favor, digite uma data'),
    objetivoCaracteristicas: Yup.string()
        .label('Objetivo e características da turma visitante')
        .required('Por favor, digite o objetivo e características da turma'),
    horario: Yup.string()
        .label('Horário da visita')
        .required('Por favor, escolha um horário para a visita')
})

const onSubmit = values => {

    alert(JSON.stringify(values, null, 2));
};

const INSAForm = () => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    /*if (isMobile) {
        return <div> This content is unavailable on mobile</div>
    }*/

    return (

        <div className="container form-body" >
            {/*
            <h1>Formulário de Agendamento de Visita</h1>
            <hr />
            <p>
                As atividades de visitas ao INSA, ocorrem preferencialmente às terças feiras em função da dosponibilidade de técnicas e pesquisadores responsáveis por cada área e cada pesquisa. Sugerimos que casos isolados devam ser discutidos por telefone ou presencialmente. Preencha este formulário e nos ajude a facilitar seu processo de agendamento de visita ao INSA.
            </p>
            <h4>Observações:</h4>
            <ul>
                <li>Após o preenchimento dos dados deste formulário, você receberá confirmação e validação por e-mail referente as datas e demais pormenores, mediante análise interna.</li>
                <li>Como sugestão para melhor aproveitamento em termos de logistica, separe um turno (manhã ou tarde) para casa local de experimento. Por exemplo: Sede do INSA (manhã); Estação Experimental (tarde).</li>
                <li>Usar proteção solar (chapéu, protetor solar, roupas confortáveis), trazer garrafinhas com água.</li>
            </ul>
            */}
            <form onSubmit={formik.handleSubmit}>
                {/*Dados instituição*/}
                <DataComponent
                    id="instituicao"
                    legend="INSTITUIÇÃO VISITANTE"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    idName="nomeInstituicao"
                    nameLabel="Nome da Instituição Visitante"
                    errorName={formik.touched.nomeInstituicao && formik.errors.nomeInstituicao}
                    idTelphone="telefoneInstituicao"
                    telephoneLabel="Telefone da Instituição visitante"
                    errorTelphone={formik.touched.telefoneInstituicao && formik.errors.telefoneInstituicao}
                    idEmail="emailInstituicao"
                    emailLabel="E-mail da Instituição visitante"
                    errorEmail={formik.touched.emailInstituicao && formik.errors.emailInstituicao}
                    valueTelephone={formik.values.telefoneInstituicao}
                />
                {/*Dados responsável pela visita*/}

                <DataComponent
                    id="responsavel"
                    legend="RESPONSÁVEL PELA VISITA"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    idName="nomeResponsavel"
                    nameLabel="Nome do responsável pela visita"
                    errorName={formik.touched.nomeResponsavel && formik.errors.nomeResponsavel}
                    idTelphone="telefoneResponsavel"
                    telephoneLabel="Telefone do Responsável pela visita"
                    errorTelphone={formik.touched.telefoneResponsavel && formik.errors.telefoneResponsavel}
                    idEmail="emailresponsavel"
                    emailLabel="E-mail do responsável pela visita"
                    errorEmail={formik.touched.emailresponsavel && formik.errors.emailresponsavel}
                />

                {/* Dados gerais sobre a visita*/}
                <div className="elements-group div-group">
                    <div className="input-group-row">
                        { /* Ajustar para receber apenas números positivos */}
                        <TextInput
                            id="nVisitantes"
                            type="number"
                            label="Número de visitantes:"
                            placeholder="Número de visitantes"
                            error={formik.touched.nVisitantes && formik.errors.nVisitantes}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextInput
                            id="dataVisita"
                            type="text"
                            label="Data da visita:"
                            error={formik.touched.dataVisita && formik.errors.dataVisita}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <TextInput
                        id="objetivoCaracteristicas"
                        type="text"
                        label="Objetivo e características da turma:"
                        placeholder="Objetivo e características da turma"
                        error={formik.touched.objetivoCaracteristicas && formik.errors.objetivoCaracteristicas}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>

                {/* horário pretendido para a visita */}
                <TimeComponent
                    value={formik.values.horario}
                    error={formik.touched.horario && formik.errors.horario}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {/* Locais pretendidos para a visita */}
                <div className="div-group">
                    <h4 className="title-box-element">
                        OPÇÕES DE PROJETO E EXPERIMENTOS A SEREM VISITADOS
                    </h4>

                    {/*Locais de visitação na sede do INSA*/}
                    <INSAComponent
                        value={formik.values.localINSA}
                        error={formik.touched.localINSA && formik.errors.localINSA}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    {/*Locais de visitação na Estação Experimental*/}

                    <ExperimentalStationComponent
                        value={formik.values.localEstacao}
                        error={formik.touched.localEstacao && formik.errors.localEstacao}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                </div>
                <div className="formBtns">
                    <button type="reset" className="outline" onClick={formik.resetForm && formik.handleChange} disabled={!formik.dirty || formik.isSubmitting}>Limpar</button>
                    <button type="submit" >Enviar</button>
                </div>
            </form>


        </div>
    );
};

export default INSAForm;
