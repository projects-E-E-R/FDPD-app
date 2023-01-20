/* eslint-disable no-unused-vars */
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCurrentYear } from 'utils/datetime';
import { StyledRegisteredUsers } from './StyledRegisteredUsers.styles';
const RegisteredUsers = (props) => {
    const {  videoSource } = props;
    const { t } = useTranslation();
    const [dataSource, setDataSource] = useState()

    const getDataModel = (data) => {
        const dataSource = data?.map((item) => {
            return {
                first_name: item.first_name,
                last_name: item.last_name,
                rut: item.rut,
                career: item.career,
                gender: t(`user.${item.gender}`),
                email: item.email,
            }
        })

        return dataSource;
    }

    const users = [
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
        const data = getDataModel(users)
        setDataSource(data)
    }, [])

    console.log(dataSource)
      
    const columns = [
    {
        title: 'Nombre',
        dataIndex: 'first_name',
        key: 'first_name',
        sorter: (a, b) => a.first_name.localeCompare(b.first_name)
    },
    {
        title: 'Apellido',
        dataIndex: 'last_name',
        key: 'last_name',
        sorter: (a, b) => a.last_name.localeCompare(b.last_name)

    },
    {
        title: 'RUT',
        dataIndex: 'rut',
        key: 'rut',
        sorter: (a, b) => a.rut.localeCompare(b.rut)
    },
    {
        title: 'Carrera',
        dataIndex: 'career',
        key: 'career',
        sorter: (a, b) => a.career.localeCompare(b.career)

    },
    {
        title: 'Género',
        dataIndex: 'gender',
        key: 'gender',
        sorter: (a, b) => a.gender.localeCompare(b.gender)

    },
    {
        title: 'Correo',
        dataIndex: 'email',
        key: 'email',

    },
    ];
    

    const UserInfo = ({userInfo}) => {
        console.log(userInfo)
        return <>
        <div>
            <div>
                {'a'}
            </div>
        </div>
        </>
    }
  
  return (
      <StyledRegisteredUsers>
          <div className="info">
           <Table dataSource={dataSource} columns={columns} />
          </div>
      </StyledRegisteredUsers>
  );
};

export default RegisteredUsers;
