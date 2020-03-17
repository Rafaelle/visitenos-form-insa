(this["webpackJsonpvisitenos-form-insa"]=this["webpackJsonpvisitenos-form-insa"]||[]).push([[0],{65:function(e,a,o){e.exports=o(78)},77:function(e,a,o){},78:function(e,a,o){"use strict";o.r(a);var t=o(53),l=o(54),r=o(62),n=o(55),i=o(63),c=o(56),s=o.n(c),m=o(0),u=o.n(m),d=o(61),h=o(10),p=o(11),b=o.n(p),v=o(60),E=o.n(v),g=o(64),N=function(e){e.error,e.className;var a=e.children,o=Object(g.a)(e,["error","className","children"]);return u.a.createElement("label",Object.assign({className:"label"},o),a)},I=function(e){var a=e.error;return a?u.a.createElement("div",{className:"input-feedback"},a):null},f=function(e){var a=e.type,o=e.id,t=e.label,l=e.placeholder,r=e.error,n=e.onChange,i=e.className,c=e.mask,s=(e.value,e.onBlur),m=b()("input-element",{error:!!r},i);return u.a.createElement("div",{className:m},u.a.createElement(N,{htmlFor:o,error:r},t),u.a.createElement(E.a,{id:o,className:"text-input",type:a,placeholder:l,onChange:n,mask:c,onBlur:s}),u.a.createElement(I,{error:r}))},C=function(e){var a=e.type,o=e.id,t=e.label,l=e.placeholder,r=e.error,n=e.onChange,i=e.className,c=e.onBlur,s=e.mask,m=b()("input-element","form-group",{error:!!r},i);return u.a.createElement("div",{className:m},u.a.createElement(N,{htmlFor:o,error:r},t),u.a.createElement("input",{id:o,className:"text-input",type:a,placeholder:l,onChange:n,onBlur:c,mask:s}),u.a.createElement(I,{error:r}))},x=function(e){var a=e.id,o=e.legend,t=e.onChange,l=e.onBlur,r=e.idName,n=e.nameLabel,i=e.errorName,c=e.idTelphone,s=e.telephoneLabel,m=e.errorTelphone,d=e.valueTelephone,h=e.idEmail,p=e.emailLabel,v=e.errorEmail,E=b()("elements-group","div-group");return u.a.createElement("fieldset",{id:a,className:E},u.a.createElement("legend",{className:"title-fieldset-element"},o),u.a.createElement(C,{id:r,type:"text",label:n+":",placeholder:n,error:i,onChange:t,onBlur:l}),u.a.createElement("div",{className:"input-group-row"},u.a.createElement(f,{id:c,type:"text",label:s+":",placeholder:s,error:m,onChange:t,onBlur:l,mask:["(","0",/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],value:d}),u.a.createElement(C,{id:h,type:"email",label:p+":",placeholder:p,error:v,onChange:t,onBlur:l})))},B=function(e){var a=e.idBox,o=e.id,t=e.label,l=e.error,r=e.className,n=e.children,i=e.classDirectionInputgroup,c=b()("div-group",{error:!!l},r);return u.a.createElement("fieldset",{id:a,className:c},u.a.createElement("legend",{className:"title-fieldset-element"},t),u.a.createElement("hr",null),u.a.createElement("div",{id:o,className:i},n),u.a.createElement(I,{error:l}))},k=function(e){var a=e.name,o=e.id,t=e.value,l=e.label,r=e.onChange,n=e.onBlur,i=e.className,c=e.hour,s=e.type,m=e.classNameInput,d=b()(i);return u.a.createElement("div",{className:d},u.a.createElement("input",{name:a,id:o,type:s,value:t,onChange:r,onBlur:n,className:b()({classNameInput:m})}),u.a.createElement(N,{htmlFor:o},l," ",u.a.createElement("br",null)," ",c))},y=function(e){var a=e.value,o=e.error,t=e.onChange,l=e.onBlur;return u.a.createElement(B,{idBox:"box-horario",id:"horarios",label:"HOR\xc1RIO DA VISITA",value:a,error:o,className:"elements-group",classDirectionInputgroup:"input-group-row"},u.a.createElement(k,{component:k,name:"horario",id:"horarioManha",type:"radio",label:"Manh\xe3:",hour:"8:30h \xe0s 11:30h",onChange:t,onBlur:l,className:"horario",classNameInput:"radio-button",value:"manh\xe3"}),u.a.createElement(k,{component:k,name:"horario",id:"horarioTarde",type:"radio",label:"Tarde:",hour:"das 13:30h \xe0s 16:30h",onChange:t,onBlur:l,className:"horario",classNameInput:"radio-button",value:"tarde"}),u.a.createElement(k,{component:k,name:"horario",id:"horarioManhaTarde",type:"radio",label:"Manh\xe3 e Tarde:",hour:"das 8:30h \xe0s 16:30h",onChange:t,onBlur:l,className:"horario",classNameInput:"radio-button",value:"manh\xe3 e tarde"}))},S=function(e){var a=e.value,o=e.error,t=e.onChange,l=e.onBlur;return u.a.createElement(B,{id:"sedeInsa",label:"Sede INSA",value:a,error:o,classDirectionInputgroup:"input-group-column"},u.a.createElement("h5",null,"Exposi\xe7\xe3o"),u.a.createElement(k,{name:"localINSA",id:"SistemaCaptacaoAguaChuvas",value:"Sistema de capta\xe7\xe3o e armazenamento de \xe1gua de chuvas",type:"checkbox",label:"Sistema de capta\xe7\xe3o e armazenamento de \xe1gua de chuvas",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"}),u.a.createElement(k,{name:"localINSA",id:"sistemaReusoAgricolas",value:"Sistema de reuso para fins agr\xedcolas",type:"checkbox",label:"Sistema de reuso para fins agr\xedcolas",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"}),u.a.createElement(k,{name:"localINSA",id:"estrategiasContencaoSolosDesertificacao",value:"Estr\xe1tegias de conten\xe7\xe3o de solos e combate a desertifica\xe7\xe3o",type:"checkbox",label:"Estr\xe1tegias de conten\xe7\xe3o de solos e combate a desertifica\xe7\xe3o",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"}),u.a.createElement(k,{name:"localINSA",id:"colecaoCactos",value:"Cole\xe7\xf5es de cactos",type:"checkbox",label:"Cole\xe7\xf5es de cactos",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"}))},A=function(e){var a=e.value,o=e.error,t=e.onChange,l=e.onBlur;return u.a.createElement(B,{id:"estacaoExperimental",label:"Esta\xe7\xe3o Experimental",value:a,error:o,classDirectionInputgroup:"input-group-column"},u.a.createElement("div",{id:"exposicao"},u.a.createElement("h5",null,"Exposi\xe7\xe3o"),u.a.createElement(k,{name:"localEstacaoExperimental",id:"biodigestor",value:"Biodigestor",type:"checkbox",label:"Biodigestor",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"}),u.a.createElement(k,{name:"localEstacaoExperimental",id:"viveiroMudas",value:"Viveiro de mudas",type:"checkbox",label:"Viveiro de mudas",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"}),u.a.createElement(k,{name:"localEstacaoExperimental",id:"estacaoMetereologica",value:"Esta\xe7\xe3o meteorol\xf3gica",type:"checkbox",label:"Esta\xe7\xe3o meteorol\xf3gica",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"}),u.a.createElement(k,{name:"localEstacaoExperimental",id:"estacaoMetereologica",value:"Esta\xe7\xe3o meteorol\xf3gica",type:"checkbox",label:"Esta\xe7\xe3o meteorol\xf3gica",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"}),u.a.createElement(k,{name:"localEstacaoExperimental",id:"barreiroInteligenteBarragemMeiaLua",value:"Barreiro Inteligente e Barragem Meia Lua",type:"checkbox",label:"Barreiro Inteligente e Barragem Meia Lua",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"}),u.a.createElement(k,{name:"localEstacaoExperimental",id:"gadocurraleiro",value:"Gado Curraleiro P\xe9 Duro",type:"checkbox",label:"Gado Curraleiro P\xe9 Duro",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"}),u.a.createElement(k,{name:"localEstacaoExperimental",id:"forragemNativa",value:"Forragens nativas da caatinga",type:"checkbox",label:"Forragens nativas da caatinga",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"}),u.a.createElement(k,{name:"localEstacaoExperimental",id:"campoExperimentacaoPalma",value:"Campos de experimenta\xe7\xe3o da palma forrageira resistente a cochonilha do carmim",type:"checkbox",label:"Campos de experimenta\xe7\xe3o da palma forrageira resistente a cochonilha do carmim",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"})),u.a.createElement("div",{id:"laboratorios"},u.a.createElement("h5",null,"Laborat\xf3rios"),u.a.createElement(k,{name:"localEstacaoExperimental",id:"labAnaliseAlimentos",value:"Laborat\xf3rio de An\xe1lise de Alimentos",type:"checkbox",label:"Laborat\xf3rio de An\xe1lise de Alimentos",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"}),u.a.createElement(k,{name:"localEstacaoExperimental",id:"labMicrobiologiaAmbiental",value:"Laborat\xf3rio de Microbiologia Ambiental",type:"checkbox",label:"Laborat\xf3rio de Microbiologia Ambiental",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"}),u.a.createElement(k,{name:"localEstacaoExperimental",id:"labMicropropagacao",value:"Laborat\xf3rio de Micropropaga\xe7\xe3o",type:"checkbox",label:"Laborat\xf3rio de Micropropaga\xe7\xe3o",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"}),u.a.createElement(k,{name:"localEstacaoExperimental",id:"labSolos",value:"Laborat\xf3rio de Solos",type:"checkbox",label:"Laborat\xf3rio de Solos",onChange:t,onBlur:l,className:"local",classNameInput:"checkbox-button"})))},T={nomeInstituicao:"",telefoneInstituicao:"",emailInstituicao:"",nomeResponsavel:"",telefoneResponsavel:"",emailresponsavel:"",nVisitantes:"",dataVisita:"",objetivoCaracteristicas:"",horario:""},L=h.c().shape({nomeInstituicao:h.d().label("Nome institui\xe7\xe3o visitante").required("Por favor, digite o nome da Institui\xe7\xe3o"),telefoneInstituicao:h.d().label("Telefone da institui\xe7\xe3o visitante").min(4,"Please enter no more than 40 characters").required("Por favor, digite o n\xfamero do telefone com DDD"),emailInstituicao:h.d().label("Nome institui\xe7\xe3o visitante").email("Por favor, adicione um e-mail v\xe1lido"),nomeResponsavel:h.d().label("Nome institui\xe7\xe3o visitante").min(4,"M\xednimo 4 caracteres").required("Por favor, digite o nome do Respons\xe1vel"),telefoneResponsavel:h.d().label("Telefone da institui\xe7\xe3o visitante").required("Por favor, digite o n\xfamero do telefone com DDD"),emailresponsavel:h.d().label("Nome institui\xe7\xe3o visitante").email("Por favor, adicione um e-mail v\xe1lido").required("Por favor, digite um endere\xe7o de e-mail"),nVisitantes:h.b().label("N\xfamero de visitantes").required("Por favor, digite um n\xfamero"),dataVisita:h.a().label("Data da visita").required("Por favor, digite uma data"),objetivoCaracteristicas:h.d().label("Objetivo e caracter\xedsticas da turma visitante").required("Por favor, digite o objetivo e caracter\xedsticas da turma"),horario:h.d().label("Hor\xe1rio da visita").required("Por favor, escolha um hor\xe1rio para a visita")}),O=function(e){alert(JSON.stringify(e,null,2))},P=function(){var e=Object(d.a)({initialValues:T,validationSchema:L,onSubmit:O});return u.a.createElement("div",{className:"container form-body"},u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement(x,{id:"instituicao",legend:"INSTITUI\xc7\xc3O VISITANTE",onChange:e.handleChange,onBlur:e.handleBlur,idName:"nomeInstituicao",nameLabel:"Nome da Institui\xe7\xe3o Visitante",errorName:e.touched.nomeInstituicao&&e.errors.nomeInstituicao,idTelphone:"telefoneInstituicao",telephoneLabel:"Telefone da Institui\xe7\xe3o visitante",errorTelphone:e.touched.telefoneInstituicao&&e.errors.telefoneInstituicao,idEmail:"emailInstituicao",emailLabel:"E-mail da Institui\xe7\xe3o visitante",errorEmail:e.touched.emailInstituicao&&e.errors.emailInstituicao,valueTelephone:e.values.telefoneInstituicao}),u.a.createElement(x,{id:"responsavel",legend:"RESPONS\xc1VEL PELA VISITA",onChange:e.handleChange,onBlur:e.handleBlur,idName:"nomeResponsavel",nameLabel:"Nome do respons\xe1vel pela visita",errorName:e.touched.nomeResponsavel&&e.errors.nomeResponsavel,idTelphone:"telefoneResponsavel",telephoneLabel:"Telefone do Respons\xe1vel pela visita",errorTelphone:e.touched.telefoneResponsavel&&e.errors.telefoneResponsavel,idEmail:"emailresponsavel",emailLabel:"E-mail do respons\xe1vel pela visita",errorEmail:e.touched.emailresponsavel&&e.errors.emailresponsavel}),u.a.createElement("div",{className:"elements-group div-group"},u.a.createElement("div",{className:"input-group-row"},u.a.createElement(C,{id:"nVisitantes",type:"number",label:"N\xfamero de visitantes:",placeholder:"N\xfamero de visitantes",error:e.touched.nVisitantes&&e.errors.nVisitantes,onChange:e.handleChange,onBlur:e.handleBlur}),u.a.createElement(C,{id:"dataVisita",type:"text",label:"Data da visita:",error:e.touched.dataVisita&&e.errors.dataVisita,onChange:e.handleChange,onBlur:e.handleBlur})),u.a.createElement(C,{id:"objetivoCaracteristicas",type:"text",label:"Objetivo e caracter\xedsticas da turma:",placeholder:"Objetivo e caracter\xedsticas da turma",error:e.touched.objetivoCaracteristicas&&e.errors.objetivoCaracteristicas,onChange:e.handleChange,onBlur:e.handleBlur})),u.a.createElement(y,{value:e.values.horario,error:e.touched.horario&&e.errors.horario,onChange:e.handleChange,onBlur:e.handleBlur}),u.a.createElement("div",{className:"div-group"},u.a.createElement("h4",{className:"title-box-element"},"OP\xc7\xd5ES DE PROJETO E EXPERIMENTOS A SEREM VISITADOS"),u.a.createElement(S,{value:e.values.localINSA,error:e.touched.localINSA&&e.errors.localINSA,onChange:e.handleChange,onBlur:e.handleBlur}),u.a.createElement(A,{value:e.values.localEstacao,error:e.touched.localEstacao&&e.errors.localEstacao,onChange:e.handleChange,onBlur:e.handleBlur})),u.a.createElement("div",{className:"formBtns"},u.a.createElement("button",{type:"reset",className:"outline",onClick:e.resetForm&&e.handleChange,disabled:!e.dirty||e.isSubmitting},"Limpar"),u.a.createElement("button",{type:"submit"},"Enviar"))))},M=(o(77),function(e){function a(){return Object(t.a)(this,a),Object(r.a)(this,Object(n.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:"App"},u.a.createElement("div",{className:"container"},u.a.createElement(P,null)))}}]),a}(m.Component)),R=document.getElementById("root");s.a.render(u.a.createElement(M,null),R)}},[[65,1,2]]]);
//# sourceMappingURL=main.eadde356.chunk.js.map