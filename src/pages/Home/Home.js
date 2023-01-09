/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  StyledHome
} from './Home.styles';
import Widget from 'components/Widget/Widget';
import { useTranslation } from 'react-i18next';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import { AlertOutlined } from '@ant-design/icons';
import  Card from 'ui/Card/Card';
import {Row,Col} from 'antd';
const Home = (props) => {
  const {t} =useTranslation();
  let formUser = [{id:1,name:'Test 1'},{id:2,name:'Test 2'},{id:3,name:'Test 3'},{id:4,name:'Test 4'},{id:5,name:'Test 5'}]
  const FormViewer = ({ formUser }) => {
    return (
      <Row gutter={[20, 20]}>
        {formUser.map((params, index) =>
            <Col key={index} xs={24} sm={24} md={12} lg={8}>
              <Card
                {...params}
              />
            </Col> 
        )}
      </Row>
    );
  };


  useEffect(() => {
    document.title = 'Bienvenido a FDPD App';
  }, []);

  return (
    <StyledHome>
    <Layout.Content>
    <Section  title={'Encuestas por responder'}  icon={<AlertOutlined />} loading={false} shadow>
    <FormViewer formUser={formUser}/>

    </Section>
    
    </Layout.Content>

    </StyledHome>
  );
};

export default Home;
