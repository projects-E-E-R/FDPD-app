/* eslint-disable no-unused-vars */
import { LockOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, Menu, message, Popconfirm, Select, Space, Table, Typography } from 'antd';
import ExcelExport from 'components/Excel/ExcelExport/ExcelExport';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getCurrentYear } from 'utils/datetime';
import { getDataReport } from '../UploadFile/Components/DocumentExample/service';
import { StyledRegisteredUsers } from './StyledRegisteredUsers.styles';
import Highlighter from 'react-highlight-words';
import useUsersStore from 'pages/Users/store';
import { useCareersStore } from 'store/common/career';
import { useGendersStore } from 'store/common/gender';

const RegisteredUsers = (props) => {
    const {  videoSource } = props;
    const { t } = useTranslation();
    const [dataSource, setDataSource] = useState(null)
    const [careerFilter, setCareerFilter] = useState([])
    const [careerOptions, setCareerOptions] = useState(null)
    const [genderOptions, setGenderOptions] = useState(null)
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [form] = Form.useForm();
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.key === editingKey;
    
    const { requestData: fetchUsersData, requestUpdateData, requestResetPassword, usersData, loading: usersLoading, ...usersState } = useUsersStore();
    const { requestData: fetchCareerData, getCarrerIDByName, careerData, loading: careerLoading, ...careerState } = useCareersStore();
    const { requestData: fetchGenderData, getGenderIDByName, genderData, loading: genderLoading, ...genderState } = useGendersStore();


    const edit = (record) => {
      form.setFieldsValue({
        first_name: '',
        last_name: '',
        rut: '',
        career: '',
        gender: '',
        email: '',
        ...record,
      });
      setEditingKey(record.key);
    };
    
    const resetPassword = (record) => {
      const newPassword = record?.rut?.replaceAll(".","")?.split("-")
      requestResetPassword(record.email, newPassword[0])

    };

    const cancel = () => {
      setEditingKey('');
    };
    const save = async (key) => {
      try {
        const row = await form.validateFields();
        const newData = [...dataSource];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, {
            ...item,
            ...row,
          });

          const updatedData = newData[index]
          console.log("new data: ", updatedData)

          const career_id = getCarrerIDByName(careerOptions, updatedData?.career)
          const gender_id = getGenderIDByName(genderOptions, updatedData?.gender)

          requestUpdateData({...updatedData, career_id: career_id, gender_id: gender_id})
          setDataSource(newData);
          setEditingKey('');
        } else {
          newData.push(row);
          setDataSource(newData);
          setEditingKey('');
        }
      } catch (errInfo) {
        console.log('Validate Failed:', errInfo);
      }
    };


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
                user_id: item.user_id,
                first_name: item.first_name,
                last_name: item.last_name,
                rut: item.rut,
                career: item.career,
                gender: t(`user.${item.gender}`),
                email: item.email,
                key: `user${item.user_id}`
            }
        })

        return dataSource;
    }

    useEffect(() => {
      const data = getDataModel(usersData)
      setDataSource(data)

  }, [usersData])
    useEffect(() => {
      console.log(careerData)
      setCareerOptions(careerData)
  }, [careerData])
  
  useEffect(() => {
      console.log(genderData)
      setGenderOptions(genderData)
  }, [genderData])

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

    const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
      }) => {
        const inputNode = inputType === 'select' ? <Select options={dataIndex === 'career' ? careerOptions : genderOptions}/> : <Input />;
        return (
          <td {...restProps}>
            {editing ? (
              <Form.Item
                name={dataIndex}
                style={{
                  margin: 0,
                }}
                rules={[
                  {
                    required: true,
                    message: `Please Input ${title}!`,
                  },
                ]}
              >
                {inputNode}
              </Form.Item>
            ) : (
              children
            )}
          </td>
        );
      };
      
    const columns = [
    {
        title: 'Nombre',
        dataIndex: 'first_name',
        key: 'first_name',
        editable: true,
        width: 150,
        sorter: (a, b) => a.first_name.localeCompare(b.first_name),
        ...getColumnSearchProps('first_name')
    },
    {
        title: 'Apellido',
        dataIndex: 'last_name',
        key: 'last_name',
        editable: true,
        width: 150,
        sorter: (a, b) => a.last_name.localeCompare(b.last_name),
        ...getColumnSearchProps('last_name')
    },
    {
        title: 'RUT',
        dataIndex: 'rut',
        key: 'rut',
        editable: true,
        width: 150,
        sorter: (a, b) => a.rut.localeCompare(b.rut),
        ...getColumnSearchProps('rut')
    },
    {
        title: 'Carrera',
        dataIndex: 'career',
        key: 'career',
        editable: true,
        width: 230,
        sorter: (a, b) => a.career.localeCompare(b.career),
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
        editable: true,
        width: 50,
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
        editable: true,
    },
    {
      title: 'Herramientas',
      dataIndex: 'operation',
      width: 150,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
                color:"green",
              }}
            >
              Guardar
            </Typography.Link>
            <Popconfirm title="Perderás los cambios" onConfirm={cancel}>
              <a style={{ color:"red" }}>
                Cancelar
              </a>
            </Popconfirm>
          </span>
        ) : (
          <Space>
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
              Editar
            </Typography.Link>
            <Typography.Link 
            style={ editingKey == '' ? {
              color:"orange",
            } : {}}
            disabled={editingKey !== ''} onClick={() => resetPassword(record)}>
              Resetear contraseña
            </Typography.Link>
          </Space>
        );
      },
    },
    ];

    const mergedColumns = columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          inputType: col.dataIndex === 'career' || col.dataIndex === 'gender' ? 'select' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });
  
  return (
      <StyledRegisteredUsers>
          <div className="info">
          <Form form={form} component={false}>
            <Table
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              size="small"
              bordered
              rowKey="id"
              scroll={{ x: 400 }}
              dataSource={dataSource} 
              columns={mergedColumns}
              rowClassName="editable-row"
              pagination={{
                onChange: cancel,
              }}
            />
          </Form>
          {/*  <Table dataSource={dataSource} columns={columns}/> */}
          </div>
      </StyledRegisteredUsers>
  );
};

export default RegisteredUsers;
