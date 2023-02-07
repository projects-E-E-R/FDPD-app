/* eslint-disable no-unused-vars */
import { Card, Col, Row } from 'antd';
import Section from 'components/Section/Section';
import React, { useEffect,useState } from 'react';
import { useTranslation } from 'react-i18next';

import Layout from 'components/Layout/Layout';
import { AlertOutlined } from '@ant-design/icons';
import useStoreForms from 'pages/Forms/Store';
import { GET } from 'services/common/http';
import { getFormReMap } from 'pages/Forms/Services';

const FormReview = (props) => {
    const {t} =useTranslation();
    const [formFilter,setFormFilter]= useState(null);
    const {requestForm,valueForms} = useStoreForms(({requestForm,valueForms})=>({requestForm,valueForms}));


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
        if(valueForms){
        setFormFilter(getFormReMap(valueForms).filter((form)=> form.answered == false));
        }
    }, []);
    useEffect(() => {
        document.title = 'Bienvenido a FDPD App';
    }, []);

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
    

    return (
        <Layout.Content>
            <Section  title={'Encuestas por responder'}  /* icon={<AlertOutlined />} */ loading={false} shadow>
                <FormViewer formFilter={formFilter}/>

            </Section>
        </Layout.Content>
    );
};

export default FormReview;
