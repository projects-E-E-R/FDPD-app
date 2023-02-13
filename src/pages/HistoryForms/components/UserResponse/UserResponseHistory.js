/* eslint-disable no-unused-vars */
import { AlertOutlined, CheckCircleOutlined, CloseCircleOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import Section from 'components/Section/Section';
import { StyledFormReview } from 'pages/FormReview/FormReview.styles';
import React, { useEffect,useState } from 'react';
import { useTranslation } from 'react-i18next';
import useStoreFormUserResponse from '../../Store';
import Layout from 'components/Layout/Layout';
import { getDataModel, getDataReport } from './service';
import { Badge, Button, Divider, Empty, InputNumber, List, Menu, Progress } from 'antd';
import Title from 'ui/Title/Title';
import { green, red } from '@ant-design/colors';
import ExcelExport from 'components/Excel/ExcelExport/ExcelExport';
import MoreOptionsButton from 'components/MoreOptionsButton/MoreOptionsButton';


const UserResponseHistory = () => {
  const {t} = useTranslation();
  const [dataModel, setDataModel] = useState(null)
  const [dataReport, setDataReport] = useState(null)
  
  const {requestUserResponse, userResponseValue, loading} = useStoreFormUserResponse();

  
  useEffect(() => {
    document.title = 'Respuestas formulario';
  }, []);
  
  useEffect(() => {
    const data = getDataModel({data: userResponseValue},{t})
    setDataModel(data)
  }, [userResponseValue]);
  
  useEffect(() => {
    const data = getDataReport({data: dataModel},{t})
    setDataReport(data)
  }, [dataModel]);

  const SectionDetail = (props) => {
    const {name, duration, children} = props

    const getTimeLabel = (duration_sec) => {
      if (duration_sec >= 3600) {
        const duration_hrs = Math.round(duration_sec / 3600)
        const duration_sec_rest_min = Math.round(duration_sec % 3600)
        const duration_min = Math.round(duration_sec_rest_min / 60)
        const duration_sec_rest = Math.round((duration_sec - duration_hrs * 3600 - duration_min * 60) % 60)
        return `${duration_hrs} horas ${duration_min > 0 ? duration_min + " minutos" : ""} ${duration_sec_rest > 0 ? duration_sec_rest + " segundos" : ""}`
      }
      else if (duration_sec >= 60) {
        const duration_min = Math.round(duration_sec / 60)
        const duration_sec_rest = Math.round(duration_sec % 60)
        return `${duration_min} minutos ${duration_sec_rest > 0 ? duration_sec_rest + " segundos" : ""}`
      } else if (duration_sec > 0){
        return duration_sec + " segundos"
      } else {
        return "Tiempo no determinado"
      }
    }

    return <div>
      <Badge.Ribbon text={getTimeLabel(duration)}>
      <Title style={{color: "orange", maxWidth: "80%"}}>{name}</Title>
      {children}
      </Badge.Ribbon>
    </div>
  }
  
  const ResponseDetail = (props) => {
    const {question, answer, children} = props
    return <>
      <div>Pregunta: {question}</div>
      <div>Respuesta: {answer}</div>
      {children}
    </>
  }

  const ExportMenu = () => {
    return (
    <MoreOptionsButton
        disabled={false}
        menu={
            <Menu style={{width: 'auto'}}>
                <ExcelExport
                    key="1"
                    data={dataReport}
                    sheetname={'file'}
                    filename={`respuestas_formulario`}
                    isMenuItem={true}
                />
            </Menu>
        }
    />);
}



  return (
    <StyledFormReview>
      <Layout.Content>
        <Section  title={'Respuestas formulario'} icon={<AlertOutlined />} loading={loading} shadow tools={<ExportMenu/>}>
            {
              dataModel ?
                dataModel?.map((section)=> {
                    return <div style={{margin:20}}>
                      <Divider></Divider>
                       <SectionDetail name={section?.section_name} duration={section.time_seconds}>
                        <List
                          itemLayout="horizontal"
                          dataSource={section?.responses}
                          renderItem={(item) => (
                            <List.Item>
                              <List.Item.Meta
                                /* avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} */
                                title={item.question}
                                description={
                                  <div style={{display: "flex", alignItems: "center"}}>
                                    {
                                      item.is_linear_question? <div  style={{marginRight: 15, display: "grid"}}>
                                      <Progress percent={item.linear_question_answer_scale} steps={5} strokeWidth={12} showInfo={false} strokeColor={[green[6], green[6], red[5]]}/>
                                      </div> : <></>
                                    }
                                    {item.answer}
                                    <div style={{marginLeft: 15}}>
                                      {item.is_correct == true? <CheckCircleOutlined style={{color: "green", fontSize: 20}}/> : <></>}
                                      {item.is_correct == false? <CloseCircleOutlined style={{color: "red", fontSize: 20}}/> : <></>}
                                    </div>
                                   
                                  </div>
                                }
                                />
                              <div >
                                Puntaje: <InputNumber size="medium" min={0} max={section.score_for_each_question} disabled={!item.is_open_question} defaultValue={item.is_correct ? item.score : 0} style={{ width: 'fit' }} /> pts.
                              </div>
                             {/*  <Button onClick={decline} icon={<MinusOutlined />} />
                              <Button onClick={increase} icon={<PlusOutlined />} /> */}
                            </List.Item>
                          )}
                          />
                      </SectionDetail>
                    </div>
                })
            : <Empty></Empty>}
          
        </Section>
      </Layout.Content>
    </StyledFormReview>
  );
};

export default UserResponseHistory;
