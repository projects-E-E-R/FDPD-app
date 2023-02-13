import React, { useState, useEffect } from 'react';
import SSider from 'antd/lib/layout/Sider';
import {StyledSider} from './Sider.styles';
import { ShoppingCartOutlined,UserOutlined,FormOutlined,HistoryOutlined,LogoutOutlined } from '@ant-design/icons';
import { Avatar, Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import CollapsibleTool from './children/CollapsibleTool/CollapsibleTool';
import Menu from './children/Menu/Menu';
import LogOut from './children/LogOut/LogOut';
import useAccountStore from 'store/common/account';

const Sider = (props) => {
  const {
    collapsed,
    setCollapsed
  } = props;

  const {isAdmin} = useAccountStore();

  const toggleStatus = () => setCollapsed(!collapsed);

  const { t } = useTranslation();
  const history = useHistory();

  return (
    <StyledSider
      width={270}
      collapsedWidth={50}
      as={SSider}
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={toggleStatus}
    >
    <CollapsibleTool toggleStatus={toggleStatus} isCollapsed={collapsed}>
      <div className="menu-container">
        <Menu
          className=""
          mode="inline"
          inlineCollapsed={collapsed}
        >
          <div className="menu-item-content-user">
            <Avatar
                size={{
                xs: 115,
                sm: 115,
                md: 115,
                lg: 115,
                xl: 115,
                xxl: 115,
              }}
              icon={<UserOutlined className="menu-item-avatar"/>}
              >
            </Avatar>
          </div> 
          <div className="menu-item-content-user">
            <h1 className='menu-item-content-user-welcome'>Bienvenido</h1>
          </div>
          <Divider/>
          {
            isAdmin ? 
            <>
              <Menu.Item key={1}
                onClick={()=>history.push('/users')}
                className="menu-item"
                icon={<UserOutlined className="menu-item-avatar-section"/>}>
                  <h2 className='ant-menu-submenu-title'>Usuarios</h2>
              </Menu.Item>
              <Menu.Item key={2}
                onClick={()=>history.push('/review')}
                className="menu-item"
                icon={<FormOutlined className="menu-item-avatar-section"/>}>
                  <h2 className='ant-menu-submenu-title'>Revisar formularios</h2>
              </Menu.Item>
            </> :
            <>
              <Menu.Item key={1}
                onClick={()=>history.push('/profile')}
                className="menu-item"
                icon={<UserOutlined className="menu-item-avatar-section"/>}>
                  <h2 className='ant-menu-submenu-title'>Mi perfil</h2>
              </Menu.Item>
              
              <Menu.Item key={2}
                onClick={()=>history.push('/forms')}
                className="menu-item"
                icon={<FormOutlined className="menu-item-avatar-section"/>}>
                  <h2 className='ant-menu-submenu-title'>Mis Encuestas</h2>
              </Menu.Item>
              
              <Menu.Item key={3}
                onClick={()=>history.push('/history')}
                className="menu-item"
                icon={<HistoryOutlined className="menu-item-avatar-section"/>}>
                  <h2 className='ant-menu-submenu-title'>Mi Historial</h2>
              </Menu.Item>   
            </>
          }
        </Menu>
      </div>
      <LogOut/>
    </CollapsibleTool>
    </StyledSider>
  );
};

export default Sider;