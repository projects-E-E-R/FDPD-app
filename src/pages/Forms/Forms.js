/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react';
import {
  StyledForm
} from './Forms.styles';
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
const Forms = (props) => {
  const {t} =useTranslation();
  const [formFilter,setFormFilter]= useState(null);
  const {requestForm,valueForms} = useStoreForms(({requestForm,valueForms})=>({requestForm,valueForms}));
  let formUser = [{id:1,name:'Test 1',path:'/form',answered:false},{id:2,name:'Test 2',path:'/form',answered:true},
  {id:3,name:'Test 3',path:'/form',answered:true},{id:4,name:'Test 4',path:'/form',answered:true},{id:5,name:'Test 5',path:'/form',answered:true}]
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
      requestForm(null,GET);
    }
  }, []);

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
    <Section  title={'Mis encuestas'}  icon={<AlertOutlined />} loading={false} shadow>
    <FormViewer formFilter={formFilter}/>

    </Section>
    
    </Layout.Content>

    </StyledForm>
  );
};

export default Forms;
