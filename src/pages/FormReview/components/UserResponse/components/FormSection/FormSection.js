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


const FormSection = (props) => {
    const {data} = props
    const {t} =useTranslation();
    const history = useHistory();
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

export default FormSection;
