/* eslint-disable no-unused-vars */
import { AlertOutlined, CheckCircleOutlined, CloseCircleOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import Section from 'components/Section/Section';
import { StyledFormReview } from 'pages/FormReview/FormReview.styles';
import React, { memo, useEffect,useState } from 'react';
import { useTranslation } from 'react-i18next';
import useStoreFormUserResponse from './store';
import Layout from 'components/Layout/Layout';
import { getDataModel, getDataReport } from './service';
import { Badge, Button, Divider, Empty, InputNumber, List, Menu, Progress } from 'antd';
import Title from 'ui/Title/Title';
import { green, red } from '@ant-design/colors';
import ExcelExport from 'components/Excel/ExcelExport/ExcelExport';
import MoreOptionsButton from 'components/MoreOptionsButton/MoreOptionsButton';


const UserResponse = (props) => {
  const {t} = useTranslation();
  const [dataModel, setDataModel] = useState(null)
  const [dataReport, setDataReport] = useState(null)
  const [scoresData, setScoresData] = useState([])
  const [showButtonUpdateScore, setShowButtonUpdateScore] = useState(false)
  
  const {requestUserResponse, requestSetScore, requestSetMultiScore, userResponseValue, form_id, user_id, loading} = useStoreFormUserResponse();

  const onClickUpdateScore = () => {
    console.log(scoresData)
    requestSetMultiScore(form_id, user_id, scoresData, () => requestUserResponse(form_id, user_id))
    setScoresData([])
    setShowButtonUpdateScore(false)
  }
  
  const onClickCalcelScore = () => {
    console.log(scoresData)
    setScoresData([])
    setShowButtonUpdateScore(false)
  }

  useEffect(() => {
    document.title = 'Respuestas';
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

  const requestSetScoreFunc = ({form_id, question_id, student_id, score}) => {
    console.log(`form ${form_id}, question: ${question_id}, user: ${student_id},  new score: ${score}`)
    requestSetScore(form_id, student_id, question_id, score)
  }
  
  const addNewScore = ({form_id, question_id, student_id, score}) => {
    console.log(`form ${form_id}, question: ${question_id}, user: ${student_id},  new score: ${score}`)
    setShowButtonUpdateScore(true)
    /* setScoresData(scores => [...scores, {
        question_id: question_id,
        score: score
      }]
    ) */

    scoresData.push({
      form_id: form_id,
      question_id: question_id,
      student_id: user_id,
      score: score
    })

    console.log(scoresData)
    setShowButtonUpdateScore(true)
   }

   //useState array?
   

  const ResponseScore = (props) => {
    const {response, section_score} = props
    const [updatingScore, setUpdatingScore] = useState(false)
    const [newScore, setNewScore] = useState(null)
    const [scoreValue, setScoreValue] = useState(null)
    const [score, setScore] = useState(null)

    const onClickScore = () => {
      setScoreValue(newScore)
      setScore(newScore)
      
      /* setScores(scores => 
        [...scores, [{
          question_id: response.question_id,
          score: newScore
        }]
      ]
      )  */

      addNewScore({
        form_id: form_id,
        question_id: response.question_id,
        student_id: user_id,
        score: newScore
      })
      setNewScore(null)
      return null
    }
    
   /*  const onClickScore = () => {
      setNewScore(null)
      setScoreValue(newScore)
      setScore(newScore)
      requestSetScoreFunc({
        form_id: form_id,
        question_id: response.question_id,
        student_id: user_id,
        score: newScore
      })
    }
     */
    const onChangeScore = (value) => {
      setScoreValue(value)
      setNewScore(value)
    }

    const resetScore = () => {
      setNewScore(null)
      setScoreValue(score)
    }

    useEffect(() => {
      //const currentScore = response.is_correct ? response.score : 0
      const currentScore = response.score

      setScoreValue(currentScore)
      setScore(currentScore)
      
      scoresData.forEach((scoreQuestion) => {
        if(scoreQuestion.question_id == response.question_id) {
          let updateScore = scoreQuestion.score
          setScoreValue(updateScore)
        } 
      })
      
      
    },[])

    return <>
      <div style={{display: "grid", justifyItems: "end"}}>
        <div>
          Puntaje: <InputNumber size="medium" 
                      min={0} 
                      max={section_score} 
                      disabled={!response.is_open_question} 
                      defaultValue={score}
                      value={scoreValue}
                      style={{ width: 'fit' }} 
                      onChange={(value) => onChangeScore(value)}
                      /> pts.
        </div>
        {
          newScore != null ? 
            <div style={{marginTop: 5}}>
              <Button type='link' onClick={resetScore}>Cancelar</Button>
              <Button type='link' onClick={onClickScore}>Guardar</Button>
            </div> : 
            <></>
        }
      </div>
    </>
  }

  const ResponseScoreMemo = memo(ResponseScore);

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
        {
          showButtonUpdateScore ? <div style={{position: 'fixed',
            left: '50%',
            bottom: '5%',
            background: '#5f9ea030',
            width: 'auto',
            zIndex: 1,
            borderRadius: '5px'}}>
            <Button type='link' style={{color:"red"}} onClick={onClickCalcelScore}>Cancelar</Button>
            <Button type='link' style={{color:"green"}} onClick={onClickUpdateScore}>Guardar</Button>
          </div> : <></>
        }
        <Section  title={'Respuestas del usuario'} icon={<AlertOutlined />} loading={loading} shadow tools={<ExportMenu/>}>
            {
              dataModel ?
              <>
                <div style={{direction: 'rtl'}}>
                  <Title>Puntaje total: {dataModel?.score || 0} puntos</Title>
                </div>
                {dataModel?.sections?.map((section)=> {
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
                                {
                                  item.has_score ? <ResponseScoreMemo response={item} section_score={section.score_for_each_question}/> : <></>
                                }
                             {/*  <Button onClick={decline} icon={<MinusOutlined />} />
                              <Button onClick={increase} icon={<PlusOutlined />} /> */}
                            </List.Item>
                          )}
                          />
                      </SectionDetail>
                    </div>
                })}
                </>
            : <Empty></Empty>}
          
        </Section>
      </Layout.Content>
    </StyledFormReview>
  );
};

export default UserResponse;
