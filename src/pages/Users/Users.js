/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react';
import {
  StyledUsers
} from './Users.styles';
import Widget from 'components/Widget/Widget';
import { useTranslation } from 'react-i18next';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import { AlertOutlined, SyncOutlined } from '@ant-design/icons';
import  Card from 'ui/Card/Card';
import {Row,Col, Menu, Space} from 'antd';
import UploadFile from './Components/UploadFile/UploadFile';
import RegisteredUsers from './Components/RegisteredUsers/RegisteredUsers';
import MoreOptionsButton from 'components/MoreOptionsButton/MoreOptionsButton';
import ExcelExport from 'components/Excel/ExcelExport/ExcelExport';
import { getDataReport } from './Components/UploadFile/Components/DocumentExample/service';
import { border, color } from 'settings/report';
import useUsersStore from './store';
import { useCareersStore } from 'store/common/career';
import { useGendersStore } from 'store/common/gender';

const Users = (props) => {
    const {t} =useTranslation();
    const [Users,setUsers]= useState(null);
    const [dataReport, setDataReport] = useState(null)
    const {history} = props;
    
    const { requestData: fetchUsersData, usersData, loading: usersLoading, ...usersState } = useUsersStore();
    const { requestData: fetchCareerData, careerData, loading: careerLoading, ...careerState } = useCareersStore();
    const { requestData: fetchGenderData, genderData, loading: genderLoading, ...genderState } = useGendersStore();


    useEffect(()=>{
    if(Users){
      document.title = Users?.name;
    }
    },[Users]);
    
    useEffect(()=>{
      fetchUsersData();
      //fetchCareerData();
      //fetchGenderData();
    }
    ,[]);

    useEffect(()=>{

      console.log("users: ",usersData)
    }
    ,[usersData]);

    

    const ExportMenu = () => {
        return (
        <MoreOptionsButton
            disabled={false}
            menu={
                <Menu style={{width: 'auto'}}>
                    <Menu.Item onClick={fetchUsersData}>
                      <Space style={{ display: 'inline-flex' }}>
                        <SyncOutlined />
                        {t('common.refresh')}
                      </Space>
                    </Menu.Item>
                    <ExcelExport
                        key="1"
                        data={dataReport}
                        sheetname={'file'}
                        filename={`file`}
                        isMenuItem={true}
                    />
                </Menu>
            }
        />);
    }

    return (
        <StyledUsers>
            <Layout.Content>
                <Section  title={'Crear usuarios'}  loading={false} shadow>
                    <UploadFile></UploadFile>
                </Section>
                <Section  title={'Usuarios creados'}  loading={usersLoading} shadow tools={<ExportMenu/>}>
                    <RegisteredUsers></RegisteredUsers>
                </Section>
            </Layout.Content>
        </StyledUsers>
    );
};

export default Users;
