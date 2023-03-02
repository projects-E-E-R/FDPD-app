/* eslint-disable no-unused-vars */
import { AlertOutlined, CalendarOutlined } from '@ant-design/icons';
import Section from 'components/Section/Section';
import { getDate, getMoment } from 'utils/datetime';
import React, { useEffect,useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import useStoreFormUserResponse from '../UserResponse/store';
import { StyledFormResponses } from './FormResponses.styles';
import { useStoreFormResponses } from './store';
import Layout from 'components/Layout/Layout';
import { Button, Divider, Empty, InputNumber, List, Tag } from 'antd';
import moment from 'moment-timezone';



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

  const RequestUserResponses = ({userID, userName}) => {
    console.log("Fetch form response - ser id: ",userID)
    requestUserResponse(formID,userID,userName)
    setRedirect(true)
  }
  
  const ResponseViewer = (params) => {
    return <>
      
    </>
  }

  const DateTimeForm = ({form_date}) => {
    const dateMomentLong = getMoment(form_date)?.format('DD MMMM YYYY, h:mm:ss a');
    const dateMomentShort = getMoment(form_date)?.format('DD MMM YYYY');
    //const dateMomentShort2 = getDate('dddd')

    const [date, setDate] = useState(dateMomentShort)
    
    return (
      <>
        <Tag icon={<CalendarOutlined />} color="#87d068" onMouseEnter={() => setDate(dateMomentLong)} onMouseLeave={() => setDate(dateMomentShort)}>
          {date?.toUpperCase()}
        </Tag>
      </>
    )
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
                      <DateTimeForm form_date={item.form_date}/>
                      <div>
                      <Button onClick={() => RequestUserResponses({userID: item.student_id, userName: item.student_full_name})}>Ver respuestas</Button>
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
