/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react';
import {
  StyledHome
} from './Home.styles';
import Widget from 'components/Widget/Widget';
import { useTranslation } from 'react-i18next';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import { AlertOutlined } from '@ant-design/icons';
import  Card from 'ui/Card/Card';
import {Row,Col,Space} from 'antd';
const Home = (props) => {
  const {t} =useTranslation();
  const [formFilter,setFormFilter]= useState(null);
  let formUser = [{id:1,name:'¿La actitud hacia la programación predice el pensamiento computacional?',path:'/form',answered:false,
description:"¡Hola!Esta encuesta es direccionada a los/las estudiantes de ingeniaría de la Universidad Católica del Norte (UCN) en su primera asignatura de programación. Esta encuesta hace parte del proyecto “¿La actitud hacia la programación predice el pensamiento computacional? Análisis de las diferencias de género y la experiencia en programación”, que tiene por objetivo medir la correlación entre la actitud hacia la programación y las habilidades de pensamiento computacional. Los resultados servirán de base para mejorar continuamente las clases de programación y podrán ser publicados en eventos y jornales académicos. La participación en esta encuesta es completamente anónima y voluntarias. Los/las participantes pueden desistir de su participación a cualquier momento. Esta encuesta se divide en tres secciones: 1. Información Demográfica (Tiempo estimado para responder: 5 minutos) 2. Actitud hacia la Programación (Tiempo estimado para responder: 20 minutos) 3. Test de Pensamiento Computacional (Responder el máximo de preguntas posible hasta 50 minutos). Los responsables por este proyecto son los/las académica(o)s: Isotilia Costa Melo, Escuela de Ingeniería de Coquimbo Ariel Areyuna, Escuela de Ingeniería de Coquimbo Carolina Rojas, Departamento de Ingeniería Industrial, Antofagasta Paulo Alves Junior, Escuela de Ingeniería de Coquimbo Ítalo Donoso, Departamento de Ingeniería de Sistemas y Computación Si tiene más preguntas y dudas, puede escribir un correo para Isotilia.costa@ce.ucn.cl"

},
  
  
  
  
  {id:2,name:'Test 2',path:'/form',answered:true},
  {id:3,name:'Test 3',path:'/form',answered:true},{id:4,name:'Test 4',path:'/form',answered:true},{id:5,name:'Test 5',path:'/form',answered:true}]
  const FormViewer = ({ formFilter }) => {
    return (
      <Row gutter={[20, 20]}>
        {formFilter?.map((params, index) =>
            <Col key={index} xs={24} sm={24} md={12} lg={24}>
         
              <Card
                {...params}
              /> 
            </Col> 
        )}
      </Row>
    );
  };

  useEffect(() => {
    setFormFilter(formUser.filter((form)=> form.answered == false))
  }, []);
  useEffect(() => {
    document.title = 'Bienvenido a FDPD App';
  }, []);

  return (
    <StyledHome>
    <Layout.Content>
    <Section  title={'Bienvenidos al portal de encuestas UCN'} titleCenter={true} loading={false} shadow>
      <h3>
      <br/>
        Hola <b>alumno</b>, este es una plataforma para poder medir el nivel de diversos aspectos tantos de la programacion como de otras asignaturas.<br/>
        <b>La participación en estas encuestas es completamente anónima y voluntarias.</b>
        <Space/> Los/las participantes pueden desistir de su participación a cualquier momento.
      <br/>
      </h3>
    </Section>
    <Section  title={'Encuestas por responder'}  icon={<AlertOutlined />} loading={false} shadow>
    <FormViewer formFilter={formFilter}/>

    </Section>
    
    </Layout.Content>

    </StyledHome>
  );
};

export default Home;
