import React, { useState, useEffect } from 'react';
import SSider from 'antd/lib/layout/Sider';
import StyledSider from './Sider.styles';
import { ShoppingCartOutlined,UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CollapsibleTool from './children/CollapsibleTool/CollapsibleTool';
import Menu from './children/Menu/Menu';
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

  const AppItemIcon = (params) => {
    const { imgSrc } = params;
    const [imgSource, setImgSource] = useState(null);
    const handleImageError = () => {
      setImgSource(defaultImg);
    };

    useEffect(() => {
      setImgSource(imgSrc);
    }, [imgSrc]);

    return (
      <span>
        <Avatar size={'90%'} src={imgSource} onError={handleImageError} />
      </span>
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
              //defaultSelectedKeys={selectedKey}
              //defaultOpenKeys={openKeys}
              //onOpenChange={onOpenChange}
              onSelect={null}
              //onClick={handleClick}
              inlineCollapsed={collapsed}
            >
              <div
                className="menu-item-user"
                key={1}>
                <Avatar
                    size={{
                    xs: 24,
                    sm: 32,
                    md: 260,
                    lg: 260,
                    xl: 260,
                    xxl: 260,
                  }}
                  icon={<UserOutlined className="menu-item-avatar"/>}
                  >

                  </Avatar>
           
              </div>
            </Menu>

            </div>

        

        </CollapsibleTool>
      </StyledSider>
  );
};

export default Sider;
/* 
            <span
              className="item-content-disabled"
              onClick={() =>console.log('some')}
            >
           
              <Avatar
                className="shopIcon"
                size={'medium'}
                style={{ alignItems: 'center' }}
              >
                <UserOutlined />
              </Avatar>
            </span>


*/

/* 
       <Menu
              className=""
              mode="inline"
              //defaultSelectedKeys={selectedKey}
              //defaultOpenKeys={openKeys}
              //onOpenChange={onOpenChange}
              onSelect={null}
              //onClick={handleClick}
              inlineCollapsed={collapsed}
            >
              <Menu.SubMenu
                className="menu-item-module"
                //collapsed ? '' : t(`app.breadcrumb.${moduleName}`)
                title={'some'}
                popupOffset={true}
                key={1}
                icon={
                  <Avatar
                    style={{ padding: 6 }}
                    size={'100%'}
                    src={defaultImg}
                  />}>
                <Menu.Item
                  className="menu-item"
                  //title={t(`app.${params.key}`)}
                  title={'some'}
                  //disabled={!params.allowed}
                  key={1}
                  icon={
                        <span
                              className="item-content-disabled"
                              onClick={() =>console.log('some')}
                            >
                            
                              <Avatar
                                className="shopIcon"
                                size={'medium'}
                                style={{ alignItems: 'center' }}
                              >
                                <UserOutlined />
                              </Avatar>
                        </span>
                  }>
                            
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>



*/
