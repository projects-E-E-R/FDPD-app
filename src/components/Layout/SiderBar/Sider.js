import React, { useState, useEffect } from 'react';
import SSider from 'antd/lib/layout/Sider';
import {StyledSider} from './Sider.styles';
import { ShoppingCartOutlined,UserOutlined,FormOutlined,HistoryOutlined,LogoutOutlined } from '@ant-design/icons';
import { Avatar, Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CollapsibleTool from './children/CollapsibleTool/CollapsibleTool';
import Menu from './children/Menu/Menu';
import LogOut from './children/LogOut/LogOut';
const Sider = (props) => {
  const {
    collapsed,
    setCollapsed
  } = props;

  const toggleStatus = () => setCollapsed(!collapsed);

  const { t } = useTranslation();
/*   const defaultImg = `${IMAGES_SRC_URL}logo.png`; */
const defaultImg = `logo.png`; 
  const AppItemDisplay = (params) => {
    const app = params?.params;
    return (
      <>
        {app.allowed ? (
          <>
            <Link
              className="item-content"
              name={app.name}
              to={app.fullPath || app.path}
            >
              {t(`app.${app.key}`)}
            </Link>
          </>
        ) : (
          <>
            {collapsed ? t(`app.${app.key}`) : null}
            <span
              className="item-content-disabled"
              onClick={() =>console.log('some')}
            >
              <div className="text">{t(`app.${app.key}`)}</div>
              <Avatar
                className="shopIcon"
                size={'small'}
                style={{ alignItems: 'center' }}
              >
                <ShoppingCartOutlined />
              </Avatar>
            </span>
          </>
        )}
      </>
    );
  };


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
                xs: 200,
                sm: 200,
                md: 200,
                lg: 200,
                xl: 200,
                xxl: 200,
              }}
              icon={<UserOutlined className="menu-item-avatar"/>}
              >
            </Avatar>
          </div> 
          <Menu.name>
            <div className="menu-item-content-user-welcome">
            <h1>Bienvenido !!!</h1>
            </div>
          </Menu.name>
          <Divider/>
          <Menu.Item
          className="menu-item"
          icon={<UserOutlined className="menu-item-avatar-section"/>}>
          
            <h2 className='ant-menu-submenu-title'>Mi perfil</h2>
          </Menu.Item>
          <Menu.Item
          className="menu-item"
          icon={<FormOutlined className="menu-item-avatar-section"/>}>
            <h2 className='ant-menu-submenu-title'>Mis Encuestas</h2>
          </Menu.Item>
          <Menu.Item
          className="menu-item"
          icon={<HistoryOutlined className="menu-item-avatar-section"/>}>
            <h2 className='ant-menu-submenu-title'>Mi Historial</h2>
          </Menu.Item>   
        </Menu>
      </div>
      <LogOut/>
    </CollapsibleTool>
    </StyledSider>
  );
};

export default Sider;
