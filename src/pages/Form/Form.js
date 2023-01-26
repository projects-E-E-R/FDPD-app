/* eslint-disable no-unused-vars */
import React, { useEffect,useState,useCallback } from 'react';
import { GoogleFormProvider, useGoogleForm} from 'react-google-forms-hooks';
import {StyledForm,Form,QuestionContainer} from './Form.styles';
import { useTranslation } from 'react-i18next';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import Question from 'components/Question/Question';
import form from "./form.json";
import RadioInput from 'components/Form/RadioInput/RadioInput';
import ShortAnswerInput from 'components/Form/ShortAnswerInput/ShortAnswerInput';
import LinearGrid from 'components/Form/LinearGrid/LinearGrid'
import Button from 'ui/Button/Button';

const FormWrapper = (props) => {
    const {history} = props;
  const {t} =useTranslation();
  const [formQuestion,setFormQuestion]= useState(null);
  const [sectionForm,setSectionForm]= useState(1);
  const [sectionFormMax,setSectionFormMax]= useState(1);
  const [sub_section_count,setSub_section_count ] = useState(0);
  const [sections,setSections]= useState(null);
  const [permissionToSend,setPermissionToSend]= useState(false);
  const methods = useGoogleForm({ form });


  const Questions = () => {
    const { total_section,section_content } = form;

    useEffect( () => {
    if(total_section == sectionForm){
      setPermissionToSend(true);
    }
    },[sectionForm]);
    useEffect(()=>{
      setSectionFormMax(total_section);
      setSections(section_content);
    },[])
    return (
    
      <div>
        {   
          sectionForm ? form?.fields?.map((field) => {
            const { id,section } = field;
            let questionInput = null;
            if(sectionForm == section){
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
            if (!questionInput) {
              return null;
            }
            return (
              field?.items ? <>{questionInput}</> 
              :
              <Question command={field?.type =="LINEAR" || field?.type =="RADIO" ? true : false} title={field?.label} shadow loading={false} initSection={false}>
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
    if(sectionForm == sectionFormMax){
      console.log(">>> Here is the data", data);
      //console.log(data['2081366331']);

    } else {
      if(sub_section_count == 0){
        setSectionForm(sectionForm+1);
        setSub_section_count(0);   
      } else {
        setSub_section_count(sub_section_coun+1);      
      }
    }
    //await methods.submitToGoogleForms(data);
    //alert("Form submitted with success!");
  };
  useEffect(()=>{
    setFormQuestion(history.location.state);
  },[]);

  useEffect(()=>{
    if(formQuestion){
      document.title = formQuestion?.name;
    }
  },[formQuestion]);


  return (
    <StyledForm>
    <Layout.Content>
    <Section  title={''}  loading={false} shadow>
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
      <GoogleFormProvider {...methods}>
          <Questions/>
      </GoogleFormProvider>
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
    </Layout.Content>

    </StyledForm>
  );
};

export default FormWrapper;
