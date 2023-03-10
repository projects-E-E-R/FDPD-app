/* eslint-disable no-unused-vars */
import { AlertOutlined, CalendarOutlined, DownloadOutlined, LoadingOutlined } from '@ant-design/icons';
import Section from 'components/Section/Section';
import { getDate, getMoment } from 'utils/datetime';
import React, { useEffect,useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import useStoreFormUserResponse from '../UserResponse/store';
import { StyledFormResponses } from './FormResponses.styles';
import { useStoreFormResponses } from './store';
import Layout from 'components/Layout/Layout';
import { Button, Divider, Empty, InputNumber, List, Spin, Tag } from 'antd';
import moment from 'moment-timezone';
import { getDataModel, getDataReport } from '../UserResponse/service';
import ExcelExport from 'components/Excel/ExcelExport/ExcelExport';




const FormResponses = (props) => {
  const {t} =useTranslation();
  const [redirect,setRedirect]= useState(false);
  const [disableButtonShowResponse,setDisableButtonShowResponse]= useState(false);
  const [loadingDownloaadResponses,setLoadingDownloaadResponses]= useState(false);
  const [dataModel,setDataModel]= useState(false);
  const [dataReport,setDataReport]= useState([]);
  const [dataReportSheetName, setDataReportSheetName] = useState([])
  const history = useHistory();


  const {requestUserResponse,userResponseValue, loading} = useStoreFormUserResponse();
  const {requestFormResponses, requestAllUserResponse,formResponseValue, allUserResponseValue, formID, loading: loadingFormResponses, loadingAllResponses} = useStoreFormResponses();

  
  useEffect(() => {
    document.title = 'Respuestas';
  }, []);

  useEffect(() => {
    if(redirect){
      setRedirect(false)
      history.push('/userResponses')
    }
  }, [redirect]);
  
  useEffect(() => {
    if(allUserResponseValue) {
      console.log(allUserResponseValue)
      setLoadingDownloaadResponses(true)
      const data = allUserResponseValue?.map((userResponse) => {
        return getDataModel({data: userResponse},{t})
      })
      setDataModel(data)
    }
  }, [allUserResponseValue]);

  useEffect(() => {
    if(dataModel){
      const data = dataModel?.map((dataUser) => {
      return getDataReport({data: dataUser},{t})
    })

    const sheetNames = dataModel?.map((dataUser, index) => {
      console.log(dataUser)
      let user_rut
      formResponseValue?.forEach((item) => {
      if (item.student_id == dataUser?.user_id){
        user_rut = item.rut?.replaceAll(".","")?.replaceAll("-","")
      }
      })
      return (user_rut) 
    })
    setDataReportSheetName(sheetNames)
    setDataReport(data)
    //setLoadingDownloaadResponses(false)
    }
    
  }, [dataModel]);

  const RequestUserResponses = ({userID, userName}) => {
    console.log("Fetch form response - ser id: ",userID)
    requestUserResponse(formID,userID,userName)
    setRedirect(true)
  }
  
  const RequestAllUserResponses = ({userID, userName}) => {
    console.log("Fetch form response - ser id: ",userID)
    setDisableButtonShowResponse(true)
    requestAllUserResponse(formID, [15, 16])
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
                <>
                <div style={{justifyContent:"end", display:"flex"}}>
                {!loadingDownloaadResponses ? (
                    <Button loading={loadingAllResponses} 
                    onClick={() =>  RequestAllUserResponses({userID: 1})}
                    style={{
                      borderColor: "darkgray", 
                      background: loadingAllResponses ? "darkgray" : ""}} 
                      type='primary'>
                      {loadingAllResponses ? "Consultando respuestas" : 
                      "Consultar respuestas"}
                      </Button>
                ) : 
                (
                  <ExcelExport
                      key="2"
                      data={dataReport}
                      sheetname={dataReportSheetName}
                      isArray
                      filename={`form_responses`}
                      element={
                <Button loading={loadingAllResponses} 
                    onClick={() => setLoadingDownloaadResponses(false)}
                    style={{
                      borderColor: "darkgray", 
                      background:  "#34b050" }} 
                      type='primary'>
                      { "Click para descargar Excel"}
                      </Button>
                    }/>
                    )}
                </div>
                
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
                      { loadingAllResponses ? 
                        <div style={{ marginRight: 10 }}>
                          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> 
                        </div>
                      : null}
                      <DateTimeForm form_date={item.form_date}/>
                      <div>
                      <Button disabled={loadingAllResponses} onClick={() => RequestUserResponses({userID: item.student_id, userName: item.student_full_name})}>Ver respuestas</Button>
                      </div>
                    </List.Item>
                  )}
                  />
                </> :
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
