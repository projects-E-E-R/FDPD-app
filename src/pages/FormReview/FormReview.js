/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react';
import {
  StyledFormReview
} from './FormReview.styles';
import Widget from 'components/Widget/Widget';
import { useTranslation } from 'react-i18next';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import { AlertOutlined } from '@ant-design/icons';
import  Card from 'ui/Card/Card';
import {Row,Col} from 'antd';
import useStoreForms from './Store';
import {getFormReMap} from './Services';
import { GET } from 'services/common/http';
import { GET_FORMS } from 'settings/constants';
import useStoreFormUserResponse from './components/UserResponse/store';
import { Link, useHistory } from 'react-router-dom';
import { useStoreFormResponses } from './components/FormResponses/store';
const FormReview = (props) => {
  const {t} =useTranslation();
  const history = useHistory();
  const [formFilter,setFormFilter]= useState(null);
  const [redirect,setRedirect]= useState(false);
  const {requestForm,valueForms, loading} = useStoreForms(({requestForm,valueForms})=>({requestForm,valueForms}));
  const {requestUserResponse,userResponseValue} = useStoreFormUserResponse();
  const {requestFormResponses,formResponseValue} = useStoreFormResponses();

  const RequestFormResponses = ({formID}) => {
    console.log("Fetch form id: ",formID)
    requestFormResponses(formID)
    setRedirect(true)
  }
  
  const FormViewer = ({ formFilter }) => {
    return (
      <Row gutter={[20, 20]}>
        {formFilter?.map((params, index) =>
            <Col key={index} xs={24} sm={24} md={24} lg={24}>
              <div onClick={() => RequestFormResponses({formID: params?.id})}>
                <Card
                  {...params}
                  /> 
              </div>
            </Col> 
        )}
      </Row>
    );
  };

  /* Get FORMS user */
  useEffect(() => {
    if(valueForms == undefined){
      requestForm(GET_FORMS,GET);
    }
  }, [valueForms]);
  
  useEffect(() => {
    if(redirect){
      setRedirect(false)
      history.push('/responses')
    }
  }, [redirect]);

  useEffect(() => {
    if(valueForms){
      setFormFilter(getFormReMap(valueForms).filter((form)=> form.answered == false));
    }
    
  }, [valueForms]);
  
  useEffect(() => {
    document.title = 'Mis encuestas';
  }, []);


  return (
    <StyledFormReview>
      <Layout.Content>
        <Section  title={'Mis encuestas'} icon={<AlertOutlined />} loading={loading} shadow>
          <FormViewer formFilter={formFilter}/>
        </Section>
      </Layout.Content>
    </StyledFormReview>
  );
};

export default FormReview;
