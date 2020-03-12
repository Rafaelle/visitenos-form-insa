import React from "react";
import { useFormik } from "formik";

import * as Yup from 'yup';
import TelephoneInput from './components/primary_components/TelephoneInput';
import ChoiseButton from './components/primary_components/ChoiseButton';
import ChoiseButtonGroup from './components/primary_components/ChoiseButtonGroup';
import TextInput from './components/primary_components/TextInput';


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
    .required('Valor não pode ser vazio'),
  telefoneInstituicao: Yup.string()
    .label('Telefone da instituição visitante')
    .required('Valor não pode ser vazio'),
  emailInstituicao: Yup.string()
    .label('Nome instituição visitante')
    .email("Adicione um e-amil válido")
    .required('Valor não pode ser vazio'),
  nomeResponsavel: Yup.string()
    .label('Nome instituição visitante')
    .min(4, 'Mínimo 4 caracteres')
    .required('Valor não pode ser vazio'),
  telefoneResponsavel: Yup.string()
    .label('Telefone da instituição visitante')
    .required('Valor não pode ser vazio'),
  emailresponsavel: Yup.string()
    .label('Nome instituição visitante')
    .email("Adicione um e-amil válido")
    .required('Valor não pode ser vazio'),
  nVisitantes: Yup.number()
    .label('Número de visitantes')
    .required('Valor não pode ser vazio'),
  dataVisita: Yup.date()
    .label('Data da visita')
    .required('Valor não pode ser vazio'),
  objetivoCaracteristicas: Yup.string()
    .label('Objetivo e características da turma visitante')
    .required('Valor não pode ser vazio'),
  horario: Yup.string()
    .label('Horário da visita')
    .required('Escolha um horário para visita')
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


  return (
    <form onSubmit={formik.handleSubmit}>
      {/*Dados instituição*/}
      <fieldset id="instituicao" className="elements-group">
        <legend className="title-box-element">INSTITUIÇÃO VISITANTE</legend>

        <TextInput
          id="nomeInstituicao"
          type="text"
          placeholder="nome da instituição visitante"
          error={formik.touched.nomeInstituicao && formik.errors.nomeInstituicao}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <div className="input-group">

          <TelephoneInput
            id="telefoneInstituicao"
            type="text"
            placeholder="Telefone da Instituição visitante"
            error={formik.touched.telefoneInstituicao && formik.errors.telefoneInstituicao}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/], ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          />

          <TextInput
            id="emailInstituicao"
            type="email"
            placeholder="E-mail da Instituição visitante"
            error={formik.touched.emailInstituicao && formik.errors.emailInstituicao}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </fieldset>

      {/*Dados responsável pela visita*/}
      <fieldset id="responsavel" className="elements-group">
        <legend className="title-box-element">RESPONSÁVEL PELA VISITA</legend>

        <TextInput
          id="nomeResponsavel"
          type="text"
          placeholder="Nome do responsável pela visita"
          error={formik.touched.nomeResponsavel && formik.errors.nomeResponsavel}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="input-group">
          <TextInput
            id="telefoneResponsavel"
            type="text"
            placeholder="Telefone do Responsável pela visita"
            error={formik.touched.telefoneResponsavel && formik.errors.telefoneResponsavel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <TextInput
            id="emailresponsavel"
            type="email"
            placeholder="E-mail do responsável"
            error={formik.touched.emailresponsavel && formik.errors.emailresponsavel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </fieldset>


      {/* Dados gerais sobre a visita*/}
      <div className="elements-group">
        <div className="input-group">
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

        { /* aumentar input */}
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

      {/* horário e locais pretendidos para a visita */}
      <ChoiseButtonGroup
        id="horarios"
        label="HORÁRIO DA VISITA:"
        value={formik.values.horario}
        error={formik.touched.horario && formik.errors.horario}
      >
        <ChoiseButton
          component={ChoiseButton}
          name="horario"
          id="horarioManha"
          label="Manhã:"
          hour="8:30h às 11:30h"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="horario"
        />
        <ChoiseButton
          component={ChoiseButton}
          name="horario"
          id="horarioTarde"
          label="Tarde:"
          hour="das 13:30h às 16:30h"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="horario"

        />
        <ChoiseButton
          component={ChoiseButton}
          name="horario"
          id="horarioManhaTarde"
          label="Manhã e Tarde:"
          hour="das 8:30h às 16:30h"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="horario"

        />

      </ChoiseButtonGroup>

      <button type="reset" className="outline" onClick={formik.resetForm && formik.handleChange} disabled={!formik.dirty || formik.isSubmitting}>
        Limpar
      </button>
      <button type="submit" >Enviar</button>

    </form>

  );
};

export default INSAForm
