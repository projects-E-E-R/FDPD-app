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
import {sendResponse} from './services';
const FormWrapper = (props) => {
  const {history,location} = props;
  const {state : form} = location;
  const {t} =useTranslation();
  const [formQuestion,setFormQuestion]= useState(null);
  const [sectionForm,setSectionForm]= useState(1);
  const [sectionFormMax,setSectionFormMax]= useState(1);
  const [sub_section_count,setSub_section_count ] = useState(1);
  const [sections,setSections]= useState(null);
  const [fields,setFields]= useState(null);
  const [permissionToSend,setPermissionToSend]= useState(false);
  const [changeSubSection,setChangeSubSection]= useState(false);
  const[timerSection,setTimerSection] = useState(0);
  const[subscription,setSubscription] = useState(null);
  const {idUser} = useAccountStore(({idUser})=>({idUser}))
  const {
    setTimer,subscribeTimer,
    setTimeForResponse,
    timeForResponse,
    formComplete,
    setFormComplete,cleanAllStoreForm
    } = 
    useStoreForm(({
      setTimer,subscribeTimer,
      setTimeForResponse,timeForResponse,
      formComplete,setFormComplete,cleanAllStoreForm}) => ({
      setTimer,subscribeTimer,setTimeForResponse,
      timeForResponse,formComplete,setFormComplete,cleanAllStoreForm
      }));
  const {requestGetDetail,loading : loadingForm,valueDetailForm,cleanAll}  = 
  useStoreDataForm(({requestGetDetail,loading,valueDetailForm,cleanAll}) => ({
    requestGetDetail,loading,valueDetailForm,cleanAll
  }));
  


  const Questions = (form) => {
    const { total_section,section_content,fields } = form?.form;

    useEffect( () => {
    if(total_section == sectionForm){
      setPermissionToSend(true);
    }
    },[sectionForm]);
    useEffect(()=>{
      //console.log(form);
      setSectionFormMax(total_section);
      setSections(section_content);
      setFields(fields);
    },[]);
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
                  questionInput = <LinearGrid id={id} />;
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
              field?.items ? <>{questionInput}</> 
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
    if(changeSubSection){
      const sectionView = sections?.find((e)=> e?.id == sectionForm);
      if(sectionView?.sub_section > 0 && sub_section_count < sectionView?.sub_section){
        setSub_section_count(sub_section_count+1); 
      } else {
        setSectionForm(sectionForm+1);
        setSub_section_count(1);
      } 
    }else{
      if(sectionForm == sectionFormMax){
        if(subscription){
          setTimeForResponse(timeForResponse,timerSection,sections,sectionForm+1);
          subscription.unsubscribe();
        }
        setFormComplete(true);
        sendResponse(form,data,timeForResponse,idUser);
        console.log(timeForResponse);
        console.log(">>> Here is the data", data);
        //console.log(data['2081366331']);
  
      } else {
          setSectionForm(sectionForm+1);
          setSub_section_count(1);
      }
    }

    //await methodsGoogleForm?.submitToGoogleForms(data);
    //alert("Form submitted with success!");
  };
  useEffect(()=>{
    if(sections){
      const sectionView = sections?.find((e)=>e?.id == sectionForm);
      setTimer();
      if(sectionView?.sub_section > 0){
        setChangeSubSection(true);
      }else{
        setChangeSubSection(false);
      }
    }
  },[sectionForm]);

  useEffect(()=>{
    if(subscribeTimer){
      if(subscription){
        setTimeForResponse(timeForResponse,timerSection,sections,sectionForm);
        subscription.unsubscribe();
      }
      const subscribe = subscribeTimer.subscribe((val) => {
        //console.log(val);
        setTimerSection(val);
      });
      setSubscription(subscribe);
    }
  },[subscribeTimer]);

  useEffect(()=>{
    setFormQuestion(history.location.state);
  },[]);
/*   useEffect(()=>{
    if(form){

    }
  },[form]) */
  useEffect(()=>{
    if(formQuestion){
      //requestGetDetail(GET_DETAIL_FORM,formQuestion?.id,GET);
      document.title = formQuestion?.name;
    }
  },[formQuestion]);

 let methods = useGoogleForm({form});
 useEffect(()=>{
  console.log(form);
  console.log(methods);
},[]);
  return (
    <StyledForm>
    <Layout.Content  style={{width:'70%'}}>
    {
      formComplete ? (
        <CompleteSection cleanAllStoreForm={cleanAllStoreForm} history={history} cleanAll={cleanAll} {...props}/>
      ) : (
        <>
          <Section  title={''}  loading={loadingForm} shadow>
          {sectionForm == 1 ? 
                <Question titleCenter title={formQuestion?.name} shadow loading={false} initSection={true}>
                  <p style={{fontSize:15}}>
                  ¡Hola!
                  Esta encuesta es direccionada a los/las estudiantes de ingeniaría de la Universidad Católica del Norte (UCN) en su primera asignatura de programación.<br/>
                  Esta encuesta hace parte del proyecto “¿La actitud hacia la programación predice el pensamiento computacional? Análisis de las diferencias de género y
                  la experiencia en programación”, que tiene por objetivo medir la correlación entre la actitud hacia la programación y las habilidades de pensamiento computacional.
                  Los resultados servirán de base para mejorar continuamente las clases de programación y podrán ser publicados en eventos y jornales académicos.<br/>
                  La participación en esta encuesta es completamente anónima y voluntarias. Los/las participantes pueden desistir de su participación a cualquier momento.<br/>
                  Esta encuesta se divide en tres secciones:<br/>
                  1. Información Demográfica (Tiempo estimado para responder: 5 minutos)<br/>
                  2. Actitud hacia la Programación (Tiempo estimado para responder: 20 minutos)<br/>
                  3. Test de Pensamiento Computacional (Responder el máximo de preguntas posible hasta 50 minutos).<br/>
                  Los responsables por este proyecto son los/las académica(o)s:
                  <br/>
                  Isotilia Costa Melo, Escuela de Ingeniería de Coquimbo<br/>
                  Ariel Areyuna, Escuela de Ingeniería de Coquimbo<br/>
                  Carolina Rojas, Departamento de Ingeniería Industrial, Antofagasta<br/>
                  Paulo Alves Junior, Escuela de Ingeniería de Coquimbo<br/>
                  Ítalo Donoso, Departamento de Ingeniería de Sistemas y Computación<br/>
                  Si tiene más preguntas y dudas, puede escribir un correo para <a href="mailto:Isotilia.costa@ce.ucn.cl">Isotilia.costa@ce.ucn.cl</a>
                  </p>
                </Question> : 
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
                    type="submit"
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

    </Layout.Content>
    </StyledForm>
  );
};

export default FormWrapper;
