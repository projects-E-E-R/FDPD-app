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
import useStoreForms from './Store';
import {getFormReMap} from './Services';
import { GET } from 'services/common/http';
import {GET_DETAIL_FORM} from 'settings/constants';
import useStoreDataForm from '../Form/Store/storeDataForm';
const Forms = () => {
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
            <Col key={index} xs={24} sm={24} md={24} lg={24}>
         
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
    document.title = 'Mis encuestas';
  }, []);


  return (
    <StyledForm>
    <Layout.Content>
    <Section  title={'Mis encuestas por responder'}  icon={<AlertOutlined />} loading={loadingForm} shadow>
    <FormViewer formFilter={formFilter}/>

    </Section>
    
    </Layout.Content>

    </StyledForm>
  );
};

export default Forms;
