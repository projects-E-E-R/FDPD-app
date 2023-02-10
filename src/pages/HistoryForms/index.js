/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react';
import {
  StyledForm
} from './Forms.styles';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import { FormOutlined } from '@ant-design/icons';
import  Card from 'ui/Card/Card';
import {Row,Col} from 'antd';
import useStoreHistory from './Store';
import {getFormReMap} from './Services';
import { GET } from 'services/common/http';
import useAccountStore from 'store/common/account';
const HistoryForms = () => {
  const [formFilter,setFormFilter]= useState(null);
  const {requestForm,valueFormsHistory} = useStoreHistory(({requestForm,valueFormsHistory})=>({requestForm,valueFormsHistory}));
  const{idUser} =useAccountStore (({idUser})=>({idUser}));
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

  /* Get History_FORMS user */
  useEffect(() => {
    if(valueFormsHistory == undefined){
      requestForm(idUser,GET);
    }
  }, []);

  useEffect(() => {
    if(valueFormsHistory){
      setFormFilter(getFormReMap(valueFormsHistory));
    }
    
  }, [valueFormsHistory]);
  useEffect(() => {
    document.title = 'Mi Historial';
  }, []);


  return (
    <StyledForm>
    <Layout.Content>
    <Section  title={'Mis encuestas respondidas'}  icon={<FormOutlined />} loading={false} shadow>
    <FormViewer formFilter={formFilter}/>

    </Section>
    
    </Layout.Content>

    </StyledForm>
  );
};

export default HistoryForms;
