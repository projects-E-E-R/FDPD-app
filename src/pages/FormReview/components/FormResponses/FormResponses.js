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

  return (
    <StyledFormResponses>
      <Layout.Content>
        <Section  title={'Respuestas'} icon={<AlertOutlined />} loading={loading} shadow>

            {
                formResponseValue?.map((response)=> {
                    return <div style={{margin:20}} onClick={() => RequestUserResponses({userID: response?.student_id})}>
                        <div>
                            {response?.student_full_name}
                        </div>
                        <div>
                            {response?.form_date}
                        </div>
                    </div>
                })
            }
          
        </Section>
      </Layout.Content>
    </StyledFormResponses>
  );
};

export default FormResponses;
