/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react';
import {
  StyledUsers
} from './Users.styles';
import Widget from 'components/Widget/Widget';
import { useTranslation } from 'react-i18next';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import { AlertOutlined } from '@ant-design/icons';
import  Card from 'ui/Card/Card';
import {Row,Col} from 'antd';
import UploadFile from './Components/UploadFile/UploadFile';
import RegisteredUsers from './Components/RegisteredUsers/RegisteredUsers';

const Users = (props) => {
    const {t} =useTranslation();
    const [Users,setUsers]= useState(null);
    const {history} = props;

    useEffect(()=>{
    if(Users){
        document.title = Users?.name;
    }
    },[Users]);

    return (
        <StyledUsers>
        <Layout.Content>
            <Section  title={'Crear usuarios'}  loading={false} shadow>
                <UploadFile></UploadFile>
            </Section>
            <Section  title={'Usuarios creados'}  loading={false} shadow>
                <RegisteredUsers></RegisteredUsers>
            </Section>
        
        </Layout.Content>

        </StyledUsers>
    );
};

export default Users;
