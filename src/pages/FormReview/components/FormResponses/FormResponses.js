/* eslint-disable no-unused-vars */
import { AlertOutlined } from '@ant-design/icons';
import Section from 'components/Section/Section';
import React, { useEffect,useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import useStoreFormUserResponse from '../UserResponse/store';
import { StyledFormResponses } from './FormResponses.styles';
import { useStoreFormResponses } from './store';
import Layout from 'components/Layout/Layout';
import { Button, Divider, Empty, InputNumber, List } from 'antd';


const FormResponses = (props) => {
  const {t} =useTranslation();
  const [redirect,setRedirect]= useState(false);
  const history = useHistory();


  const {requestUserResponse,userResponseValue, loading} = useStoreFormUserResponse();
  const {requestFormResponses,formResponseValue, formID, loading: loadingFormResponses} = useStoreFormResponses();

  
  useEffect(() => {
    document.title = 'Respuestas';
  }, []);

  useEffect(() => {
    if(redirect){
      setRedirect(false)
      history.push('/userResponses')
    }
  }, [redirect]);

  const RequestUserResponses = ({userID}) => {
    console.log("Fetch form response - ser id: ",userID)
    requestUserResponse(formID,userID)
    setRedirect(true)
  }
  
  const ResponseViewer = (params) => {
    return <>
      
    </>
  }

  return (
    <StyledFormResponses>
      <Layout.Content>
        <Section  title={'Respuestas'} icon={<AlertOutlined />} loading={loadingFormResponses} shadow>

            {
              formResponseValue ? 
                <List
                  itemLayout="horizontal"
                  dataSource={formResponseValue}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        /* avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} */
                        title={item.student_full_name}
                        description={item.carrer_name}
                      />
                      <div>
                      <Button onClick={() => RequestUserResponses({userID: item.student_id})}>Ver respuestas</Button>
                      </div>
                    </List.Item>
                  )}
                /> :
                <>
                  <Empty></Empty>
                </>
            }
          
        </Section>
      </Layout.Content>
    </StyledFormResponses>
  );
};

export default FormResponses;
