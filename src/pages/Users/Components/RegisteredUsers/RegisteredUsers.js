/* eslint-disable no-unused-vars */
import { LockOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input, Menu, Space, Table } from 'antd';
import ExcelExport from 'components/Excel/ExcelExport/ExcelExport';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCurrentYear } from 'utils/datetime';
import { getDataReport } from '../UploadFile/Components/DocumentExample/service';
import { StyledRegisteredUsers } from './StyledRegisteredUsers.styles';
import Highlighter from 'react-highlight-words';

const RegisteredUsers = (props) => {
    const {  videoSource } = props;
    const { t } = useTranslation();
    const [dataSource, setDataSource] = useState(null)
    const [careerFilter, setCareerFilter] = useState([])
    const [dataReport, setDataReport] = useState(null)
    
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

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

    const dataTable = [
    {
      user_id: 16,
      first_name: "Sebastian Sebastian Sebastian",
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

        const careerFilterData = dataSource?.map((user) => {
                return  { text:  user['career'] , value: user['career'] }
            })

            console.log(careerFilterData)
        setCareerFilter(careerFilterData)

    }, [])

    /////////////////////

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
          <div
            style={{
              padding: 8,
            }}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <Input
              ref={searchInput}
              placeholder={`Buscar ${t('user.'+dataIndex)}`}
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
              style={{
                marginBottom: 8,
                display: 'block',
              }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Buscar
              </Button>
              <Button
                onClick={() => clearFilters && handleReset(clearFilters)}
                size="small"
                style={{
                  width: 90,
                }}
              >
                Limpiar
              </Button>
              <Button
                type="link"
                size="small"
                onClick={() => {
                  confirm({
                    closeDropdown: false,
                  });
                  setSearchText(selectedKeys[0]);
                  setSearchedColumn(dataIndex);
                }}
              >
                Filtrar
              </Button>
            </Space>
          </div>
        ),
        filterIcon: (filtered) => (
          <SearchOutlined
            style={{
              color: filtered ? '#1890ff' : undefined,
            }}
          />
        ),
        onFilter: (value, record) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
          if (visible) {
            setTimeout(() => searchInput.current?.select(), 100);
          }
        },
        render: (text) =>
          searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{
                backgroundColor: '#ffc069',
                padding: 0,
              }}
              searchWords={[searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
      });
      
    const columns = [
    {
        title: 'Nombre',
        dataIndex: 'first_name',
        key: 'first_name',
        sorter: (a, b) => a.first_name.localeCompare(b.first_name),
        ...getColumnSearchProps('first_name')
    },
    {
        title: 'Apellido',
        dataIndex: 'last_name',
        key: 'last_name',
        sorter: (a, b) => a.last_name.localeCompare(b.last_name),
        ...getColumnSearchProps('last_name')
    },
    {
        title: 'RUT',
        dataIndex: 'rut',
        key: 'rut',
        sorter: (a, b) => a.rut.localeCompare(b.rut),
        ...getColumnSearchProps('rut')
    },
    {
        title: 'Carrera',
        dataIndex: 'career',
        key: 'career',
        sorter: (a, b) => a.career.localeCompare(b.career),
        /* filters: [... new Set(dataSource?.map((user) => {
            return  { text:  user['career'] , value: user['career'] }
        }))] */
        filters: ([... new Set(dataSource?.map((user) => {
                    return  user['career']
                }))]).map((career) => {
            return  { text:  career , value: career }
        }),
        onFilter: (value, record) => record.career.indexOf(value) === 0,
    },
    {
        title: 'Género',
        dataIndex: 'gender',
        key: 'gender',
        filters: [
      { text:  t(`user.male`) , value: t(`user.male`) },
      { text:  t(`user.female`) , value: t(`user.female`)},
    ],
        sorter: (a, b) => a.gender.localeCompare(b.gender),
        onFilter: (value, record) => record.gender.indexOf(value) === 0,
    },
    {
        title: 'Correo',
        dataIndex: 'email',
        key: 'email',

    },
    ];
  
  return (
      <StyledRegisteredUsers>
          <div className="info">
           <Table dataSource={dataSource} columns={columns} />
          </div>
      </StyledRegisteredUsers>
  );
};

export default RegisteredUsers;
