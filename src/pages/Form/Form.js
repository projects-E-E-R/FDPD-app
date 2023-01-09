/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react';
import {
  StyledForm
} from './Form.styles';
import Widget from 'components/Widget/Widget';
import { useTranslation } from 'react-i18next';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import { AlertOutlined } from '@ant-design/icons';
import  Card from 'ui/Card/Card';
import {Row,Col} from 'antd';
const Form = (props) => {
  const {t} =useTranslation();
  const [form,setForm]= useState(null);
const {history} = props;
useEffect(()=>{
  setForm(history.location.state);
 
},[]);
useEffect(()=>{
  if(form){
    document.title = form?.name;
  }
},[form]);
  return (
    <StyledForm>
    <Layout.Content>
    <Section  title={form?.name}  loading={false} shadow>


    </Section>
    
    </Layout.Content>

    </StyledForm>
  );
};

export default Form;
