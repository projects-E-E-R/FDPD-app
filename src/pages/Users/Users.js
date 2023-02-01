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
import {Row,Col, Menu} from 'antd';
import UploadFile from './Components/UploadFile/UploadFile';
import RegisteredUsers from './Components/RegisteredUsers/RegisteredUsers';
import MoreOptionsButton from 'components/MoreOptionsButton/MoreOptionsButton';
import ExcelExport from 'components/Excel/ExcelExport/ExcelExport';
import { getDataReport } from './Components/UploadFile/Components/DocumentExample/service';
import { border, color } from 'settings/report';

const Users = (props) => {
    const {t} =useTranslation();
    const [Users,setUsers]= useState(null);
    const [dataReport, setDataReport] = useState(null)
    const {history} = props;

    useEffect(()=>{
    if(Users){
        document.title = Users?.name;
    }
    },[Users]);

    const dataTable = [
        {
          user_id: 16,
          first_name: "Sebastian",
          last_name: "Sanchez",
          full_name: "Sebastian Sanchez",
          career_id: 1,
          rut: "19.239.594-1",
          career: "Ingeniería Civil en Computación e Informática",
          gender: "male",
          gender_id: 1,
          email: "ssp013@alumnos.ucn.cl",
          password: "123456"
        },
        {
          user_id: 15,
          first_name: "Nicolas",
          last_name: "Garcia",
          full_name: "Nicolas Garcia",
          career_id: 1,
          rut: "19.239.594-1",
          career: "Ingeniería Civil en Computación e Informática",
          gender: "male",
          gender_id: 1,
          email: "nicolas.garcia@alumnos.ucn.cl",
          password: "clave123"
        },
        {
          user_id: 15,
          first_name: "Dionisio",
          last_name: "Olivares",
          full_name: "Dionisio Olivares",
          career_id: 1,
          rut: "20.236.276-1",
          career: "Ingeniería Civil en Computación e Informática",
          gender: "male",
          gender_id: 1,
          email: "dionisio.olivares@alumnos.ucn.cl",
          password: "clave123"
        },
        {
          user_id: 15,
          first_name: "Juan",
          last_name: "Perez",
          full_name: "Juan Perez",
          career_id: 1,
          rut: "18.543.343-1",
          career: "Ingeniería Civil Industrial",
          gender: "male",
          gender_id: 1,
          email: "juan.perez@alumnos.ucn.cl",
          password: "clave123"
        },
        {
          user_id: 15,
          first_name: "Maria",
          last_name: "Flores",
          full_name: "Maria Flores",
          career_id: 1,
          rut: "19.939.123-9",
          career: "Ingeniería Civil Industrial",
          gender: "female",
          gender_id: 1,
          email: "maria.flores@alumnos.ucn.cl",
          password: "clave123"
        }
    ]

    useEffect(() => {
        if (dataTable) {
          const report = getDataReport(
            {
              data: dataTable,
            },
            { t, border, color}
          );
          setDataReport(report);
        }
    }, []);

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
                <Section  title={'Usuarios creados'}  loading={false} shadow tools={<ExportMenu/>}>
                    <RegisteredUsers></RegisteredUsers>
                </Section>
            </Layout.Content>
        </StyledUsers>
    );
};

export default Users;
