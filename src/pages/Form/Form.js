/* eslint-disable no-unused-vars */
import React, { useEffect,useState,useCallback,useRef } from 'react';
import { GoogleFormProvider, useGoogleForm} from 'react-google-forms-hooks';
import {StyledForm,Form,QuestionContainer,StyleImageContent} from './Form.styles';
import { useTranslation } from 'react-i18next';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import Question from 'components/Question/Question';
import RadioInput from 'components/Form/RadioInput/RadioInput';
import ShortAnswerInput from 'components/Form/ShortAnswerInput/ShortAnswerInput';
import LinearGrid from 'components/Form/LinearGrid/LinearGrid'
import Button from 'ui/Button/Button';
import useStoreForm from './Store/useStoreForm';
import useStoreDataForm from './Store/storeDataForm';
import CompleteSection from 'components/CompleteSection';
import useAccountStore from 'store/common/account';
import useStoreForms from '../Forms/Store';
import {sendResponse} from './services';
import Stopwatch from './components/timer'
import { useStopwatch } from 'react-timer-hook';
/* import form from './form.json'; */
const FormWrapper = (props) => {
  const {history,location} = props;
  const {state : form} = location; 
  const {t} =useTranslation();
  const [formQuestion,setFormQuestion]= useState(null);
  const [sectionForm,setSectionForm]= useState(1);
  const [sectionFormMax,setSectionFormMax]= useState(1);
  const [sub_section_count,setSub_section_count ] = useState(1);
  const [sections,setSections]= useState(null);
  const [permissionToSend,setPermissionToSend]= useState(false);
  const [changeSubSection,setChangeSubSection]= useState(false);
  const {idUser} = useAccountStore(({idUser})=>({idUser}));
  const {valueForms} = useStoreForms(({valueForms})=>({valueForms}));
  const {
    setTimer,
    timeForResponse,
    formComplete,
    setFormComplete,cleanAllStoreForm
    } = 
    useStoreForm(({
      setTimer,
      timeForResponse,
      formComplete,
      setFormComplete,
      cleanAllStoreForm}) => ({
      setTimer,
      timeForResponse,
      formComplete,
      setFormComplete,
      cleanAllStoreForm
      }));
      const {requestGetDetail,loading : loadingForm,valueDetailForm,cleanAll,setLoading}  = 
      useStoreDataForm(({requestGetDetail,loading,valueDetailForm,cleanAll,setLoading}) => ({
        requestGetDetail,loading,valueDetailForm,cleanAll,setLoading
      }));
    /* Calculate time */

  const Questions = (form) => {
    const { fields } = form?.form;
   
    return (
    
      <div>
        {   
          sectionForm || sub_section_count ? fields?.map((field) => {
            const { id,section,sub_section_id } = field;
            let questionInput = null;
            if(sectionForm == section){
              if(sub_section_id == sub_section_count){   
                  switch (field?.type) {
                  case "RADIO":
                    questionInput = <RadioInput id={id} field={field} />;
                    break;
                   case "SHORT_ANSWER":
                    questionInput = <ShortAnswerInput id={id} field={field}/>;
                    break;
                  case "LINEAR":
                  questionInput = <LinearGrid id={id} field={field}/>;
                    break;
                  default:
                    return null;
                }
              }
            }
            if (!questionInput) {
              return null;
            }
            return (
              field?.title ? 
              <>{questionInput}</> 
              :
              field?.items ? <>{questionInput}</>  :
              field?.type == 'LINEAR' && field?.image_url ? 
              <>{questionInput}</>  

              :
              <Question command={field?.type =="LINEAR" ? true : false} title={field?.label} shadow loading={false} initSection={false}>
              <QuestionContainer key={id}>
                {questionInput}
              </QuestionContainer>
              </Question>
            );
          }) : null
        }
      </div>
    );
  };

  const onSubmit = async (data) => {
    /* Cambiamos subsecciones */
    if(changeSubSection){
      const sectionView = sections?.find((e)=> e?.id == sectionForm);
      if(sectionView?.sub_section > 0 && sub_section_count < sectionView?.sub_section){
        setSub_section_count(sub_section_count+1); 
      } else {
        setSectionForm(sectionForm+1);
        setSub_section_count(1);
      } 
    }else{
      /* Si tomamos el max del formulario */
      if(sectionForm == sectionFormMax){
        setFormComplete(true);
        console.log('Vamos a enviar el form')
        sendResponse(form,data,timeForResponse,idUser,setLoading);
      } else {
        /* Cuando queremos cambiar de seccion */
          setSectionForm(sectionForm+1);
          setSub_section_count(1);
      }
    }
  };

  useEffect(()=>{
    if(sections){
      const sectionView = sections?.find((e)=>e?.id == sectionForm);
      setTimer(sectionView)
      if(sectionView?.sub_section > 1){
        setChangeSubSection(true);
      }else{
        setChangeSubSection(false);
      }
    }
  },[sectionForm]);

  useEffect( () => {
    if(sectionFormMax !=1 && sectionFormMax == sectionForm){
      console.log(sectionFormMax+'Calculando'+sectionForm)
      setPermissionToSend(true);
    }
    },[sectionForm]);
  useEffect(()=>{
    if(form){
      const { total_section,section_content } = form;
      console.log(total_section,section_content )
      setSectionFormMax(total_section);
      setSections(section_content);
      let result = valueForms?.find((e)=> e?.form_id == history.location.state?.form_id);
      setFormQuestion(result?.form_title);
     
    }
  },[form]);

  useEffect(()=>{
    if(formQuestion){
      document.title = formQuestion;
    }
  },[formQuestion]);

 let methods = useGoogleForm({form});
  return (
    <StyledForm>
    <Layout.Content  style={{width:'70%'}}>
    {
      formComplete ? (
        <CompleteSection cleanAllStoreForm={cleanAllStoreForm} history={history} cleanAll={cleanAll} loading={loadingForm} {...props}/>
      ) : (
        <>
          <Section  title={''}  loading={loadingForm} shadow>
          {sectionForm == 1 && form?.form_id == 1 ? 
                <Question titleCenter title={formQuestion} shadow loading={false} initSection={true}>
                  <p style={{fontSize:15}}>
                  ??Hola! Esta encuesta es direccionada a los/las estudiantes de ingeniar??a de la Universidad Cat??lica del Norte (UCN).<br/><br/>
                  Esta encuesta tiene por objetivo medir la correlaci??n entre la actitud hacia la programaci??n y las habilidades de pensamiento computacional. Los resultados servir??n de base para mejorar continuamente las clases de programaci??n y podr??n ser publicados en eventos y jornales acad??micos.
                  <br/><br/>
                  La participaci??n en esta encuesta es completamente an??nima y voluntarias. <br/>
                  Los/las participantes pueden desistir de su participaci??n a cualquier momento.<br/>
                  <br/>
                  Esta encuesta se divide en tres secciones:<br/>
                  1. Informaci??n Demogr??fica (Tiempo estimado para responder: 5 minutos)<br/>
                  2. Actitud hacia la Programaci??n (Tiempo estimado para responder: 20 minutos)<br/>
                  3. Test de Pensamiento Computacional (Responder el m??ximo de preguntas posible hasta 50 minutos).<br/>
                  <br/>
                  Los responsables por este proyecto son los/las acad??mica(o)s:<br/>
                  Isotilia Costa Melo, Escuela de Ingenier??a de Coquimbo<br/>
                  Ariel Areyuna, Escuela de Ingenier??a de Coquimbo<br/>
                  Carolina Rojas, Departamento de Ingenier??a Industrial, Antofagasta<br/>
                  Paulo Alves Junior, Escuela de Ingenier??a de Coquimbo<br/>
                  ??talo Donoso, Departamento de Ingenier??a de Sistemas y Computaci??n, Antofagasta<br/>
                  <br/>
                  Si tiene m??s preguntas y dudas, puede contactarlos.<br/>
                  </p>
                </Question> : 
                sectionForm == 4  && form?.form_id == 1 ? 
                <Question titleCenter title={formQuestion} shadow loading={false} initSection={true}>
                  <p style={{fontSize:15}}>
                  Ahora usted va a empezar el testeo de pensamiento computacional.
                  No hay necesidad de responder todas las preguntas.
                   Si no sabe la respuesta, puede dejar en blanco.
                    Pero, para la buena interpretaci??n de los resultados pedag??gicos, es importante hacer el tieste del inicio al fin sin interrupciones.
                    La duraci??n estimada del testeo es de 50 minutos.
                   
                  </p>
                </Question>               
                :
                <Question titleCenter title={sections[sectionForm-1]?.title} shadow loading={false} initSection={true}>
                </Question>
          }
          {
            methods && form && (
            <GoogleFormProvider {...methods}>
                <Questions form={form}/>
            </GoogleFormProvider>
            )
          }

          </Section>
          <Question command title={''}>
                <Button
                    $capitalize
                    loading={false}
                    disabled={false}
                    color="primary"
                    onClick={methods.handleSubmit(onSubmit)}
                    style={{position:'absolute',right:-25,bottom:1,top:-30,width:100,height:50,fontSize:16}}
                    >
                    {  permissionToSend ?   t('common.send') :  t('common.next')}
                </Button>
                
          </Question>
        </>
      )
      
    }
    <Stopwatch form={form} sections={sections} sectionForm={sectionForm} formComplete={formComplete} /> 

    </Layout.Content>
    </StyledForm>
  );
};

export default FormWrapper;
