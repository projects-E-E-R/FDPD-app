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
import useStoreForms from '../Forms/Store';
import {getFormReMap} from '../Forms/Services';
import { GET } from 'services/common/http';
import {GET_DETAIL_FORM} from 'settings/constants';
import useStoreDataForm from '../Form/Store/storeDataForm';
const Home = (props) => {
  const {t} =useTranslation();
  const [formFilter,setFormFilter]= useState(null);
  const {requestForm,valueForms} = useStoreForms(({requestForm,valueForms})=>({requestForm,valueForms}));
  const {requestGetDetail,loading : loadingForm,valueDetailForm}  = 
  useStoreDataForm(({requestGetDetail,loading,valueDetailForm}) => ({
    requestGetDetail,loading,valueDetailForm
  }));
  const FormViewer = ({ formFilter }) => {
    return (
      <Row gutter={[20, 20]}>
        {formFilter?.map((params, index) =>
            <Col key={index} xs={24} sm={24} md={12} lg={24}>
              <Card
                request={requestGetDetail}
                value={valueDetailForm}
                loading={loadingForm}
                constant={GET_DETAIL_FORM}
                {...params}
              /> 
            </Col> 
        )}
      </Row>
    );
  };
  /* Get FORMS user */
  useEffect(() => {
    if(valueForms == undefined){
      requestForm(null,GET);
    }
  }, [valueForms]);

  useEffect(() => {
    if(valueForms){
      setFormFilter(getFormReMap(valueForms).filter((form)=> form.answered == false));
    }
  }, [valueForms]);
  useEffect(() => {
    if(valueForms){
      setFormFilter(getFormReMap(valueForms).filter((form)=> form.answered == false));
    }
  }, []);
  useEffect(() => {
    document.title = 'Bienvenido a FDPD App';
  }, []);

  return (
    <StyledHome>
    <Layout.Content>
    <Section  title={'Bienvenidos al portal de encuestas UCN'} titleCenter={true} shadow>
      <h3>
      <br/>
        Hola <b>alumno</b>, este es una plataforma para poder medir el nivel de diversos aspectos tantos de la programacion como de otras asignaturas.<br/>
        <b>La participación en estas encuestas es completamente anónima y voluntarias.</b>
        <Space/> Los/las participantes pueden desistir de su participación a cualquier momento.
      <br/>
      </h3>
    </Section>
    <Section  title={'Encuestas por responder'}  icon={<AlertOutlined />} loading={loadingForm} shadow>
    <FormViewer formFilter={formFilter}/>

    </Section>
    
    </Layout.Content>

    </StyledHome>
  );
};

export default Home;
