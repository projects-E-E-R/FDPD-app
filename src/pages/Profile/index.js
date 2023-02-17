/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react';
import {
  StyledForm,StyledView
} from './Profile.styles';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import {Avatar,Row,Col, Drawer, Button} from 'antd';
import { LockOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import useAccountStore from 'store/common/account';
import UpdatePassword from './components/UpdatePassword/UpdatePassword';
const Profile = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  
  const ButtonUpdatePassword = () => {
    return (
      <Button type="link" onClick={() => setOpenDrawer(true)} icon={<LockOutlined />} style={{fontSize: 18}}>
          Actualizar contraseña
      </Button>
    );
  }

  const ViewerProfile = ()=>{
    const{career,fullName,gender,rut,email} =useAccountStore (({
      career,fullName,gender,rut,email
    })=>({
      career,fullName,gender,rut,email
    }));
    return (
      
   
      <Row gutter={[20, 20]}>
       <Col key={1} xs={24} sm={24} md={24} lg={24}>
            <StyledView>
            <div class="wrapper">
            <div class="top">
            <Avatar 
              size={{ xs: 100, sm: 140, md: 150, lg: 160, xl: 180, xxl: 200 }}
             icon={<UserOutlined />} />
              <h4>{fullName}</h4>
              <p>Estudiante</p>
            </div>
            <div class="bottom">
                <div class="info">
                    <h3>Información personal</h3>
                    <div class="info_data">
                        <div class="data">
                            <h4>Correo</h4>
                            <p>{email}</p>
                        </div>
                        <div class="data">
                          <h4>Rut</h4>
                           <p>{rut}</p>
                        </div>
                        <div class="data">
                          <h4>Género</h4>
                           <p>{gender == 'male' ? 'Masculino': gender == 'female' ?  'Femenino': 'Otro'}</p>
                        </div>
                    </div>
                </div>
              <div class="academic">
                    <h3>Información académica</h3>
                    <div class="academic_data">
                        <div class="data">
                            <h4>Carrera</h4>
                            <p>{career}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>  
            </StyledView>
       </Col>
      </Row>
     
    );
  }

  useEffect(()=>{
    document.title = 'Mi perfil';
  },[]);
  return (
    <StyledForm>
      <Layout.Content>
        <UpdatePassword openDrawer={openDrawer} onCloseDrawer={() => setOpenDrawer(false)}></UpdatePassword>
          <Section  title='' shadow>
            <ViewerProfile/>
          <ButtonUpdatePassword/>
          </Section>
      </Layout.Content>
    </StyledForm>
  );
};

export default Profile;
