/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react';
import {
  StyledForm
} from './Forms.styles';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import { AlertOutlined } from '@ant-design/icons';
import  Card from 'ui/Card/Card';
import {Row,Col} from 'antd';
import useStoreHistory from './Store';
import {getFormReMap} from './Services';
import { GET } from 'services/common/http';
const HistoryForms = () => {
  const [formFilter,setFormFilter]= useState(null);
  const {requestForm,valueForms} = useStoreHistory(({requestForm,valueForms})=>({requestForm,valueForms}));
  const FormViewer = ({ formFilter }) => {
    return (
      <Row gutter={[20, 20]}>
        {formFilter?.map((params, index) =>
            <Col key={index} xs={24} sm={24} md={24} lg={24}>
         
              <Card
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
      console.log('solo Una');
      requestForm(null,GET);
    }
  }, [valueForms]);

  useEffect(() => {
    if(valueForms){
      setFormFilter(getFormReMap(valueForms).filter((form)=> form.answered == false));
    }
    
  }, [valueForms]);
  useEffect(() => {
    document.title = 'Mi Historial';
  }, []);


  return (
    <StyledForm>
    <Layout.Content>
    <Section  title={'Mis encuestas'}  icon={<AlertOutlined />} loading={false} shadow>
    <FormViewer formFilter={formFilter}/>

    </Section>
    
    </Layout.Content>

    </StyledForm>
  );
};

export default HistoryForms;
