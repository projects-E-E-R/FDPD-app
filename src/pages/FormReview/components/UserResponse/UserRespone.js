/* eslint-disable no-unused-vars */
import { AlertOutlined } from '@ant-design/icons';
import Section from 'components/Section/Section';
import { StyledFormReview } from 'pages/FormReview/FormReview.styles';
import React, { useEffect,useState } from 'react';
import { useTranslation } from 'react-i18next';
import useStoreFormUserResponse from './store';
import Layout from 'components/Layout/Layout';
import { getDataModel } from './service';
import { Divider, InputNumber, List } from 'antd';
import Title from 'ui/Title/Title';


const UserResponse = (props) => {
  const {t} = useTranslation();
  const [dataModel, setDataModel] = useState(null)
  
  const {requestUserResponse, userResponseValue, loading} = useStoreFormUserResponse();

  
  useEffect(() => {
    document.title = 'Respuestas';
  }, []);
  
  useEffect(() => {
    const data = getDataModel({data: userResponseValue},{t})
    setDataModel(data)
  }, [userResponseValue]);

  const SectionDetail = (props) => {
    const {name, children} = props
    return <>
      <Title style={{color: "orange"}}>{name}</Title>
      {children}
    </>
  }
  
  const ResponseDetail = (props) => {
    const {question, answer, children} = props
    return <>
      <div>Pregunta: {question}</div>
      <div>Respuesta: {answer}</div>
      {children}
    </>
  }




  return (
    <StyledFormReview>
      <Layout.Content>
        <Section  title={'Respuestas'} icon={<AlertOutlined />} loading={loading} shadow>

            {
                dataModel?.map((section)=> {
                    return <div style={{margin:20}}>
                      <Divider></Divider>
                       <SectionDetail name={section?.section_name}>
                        {/* {
                          section?.responses?.map((response)=> {
                            return <div style={{margin:20}}>
                                  <ResponseDetail question={response.question} answer={response.answer}></ResponseDetail>
                              </div>
                          })
                        } */}
                        <List
                          itemLayout="horizontal"
                          dataSource={section?.responses}
                          renderItem={(item) => (
                            <List.Item>
                              <List.Item.Meta
                                /* avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} */
                                title={item.question}
                                description={item.answer}
                              />
                              <div>
                                {/* Puntaje: <InputNumber size="medium" min={0} max={10} defaultValue={3} style={{ width: 'fit' }} /> pts. */}
                              </div>
                            </List.Item>
                          )}
                        />
                      </SectionDetail>
                    </div>
                })
            }
          
        </Section>
      </Layout.Content>
    </StyledFormReview>
  );
};

export default UserResponse;
