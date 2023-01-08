/* eslint-disable no-unused-vars */
import React from 'react';
import AntdLayout from 'antd/lib/layout/layout';
import useAccountStore from 'store/common/account';
import { StyledLayout } from './Layout.styles';
import Header from './Header/Header';
import Body from './Body/Body';
import Menu from './Header/children/Menu/Menu';
import { MenuOutlined } from '@ant-design/icons';
import SiderBar from './SiderBar/Sider';
const Layout = (props)=>{
    const { children, ...rest } = props;
    const {disableSider,setDisableSider} =useAccountStore();
    const toggleToClose = () => setDisableSider(false);
    const toggleOpen = () => setDisableSider(true);
    return (
        <StyledLayout className="layout" as={AntdLayout}>
            <Header>
                <Menu float='left'>
                {!disableSider ? (
                    <Menu.Item>
                    <div className="sider-button-container" onClick={toggleToClose}>
                        <MenuOutlined />
                    </div>
                    </Menu.Item>
                ) : (
                    <></>
                )}
                </Menu>
                <Menu float='right'></Menu>
            </Header>
            <StyledLayout className="layout" as={AntdLayout} hasSider={!disableSider}>
                {!disableSider ? (
                <SiderBar collapsed={disableSider} setCollapsed={setDisableSider}></SiderBar>
                ) : (
                <></>
                )}
                <StyledLayout className="layout" as={AntdLayout}>
                    <Body>{children}</Body>
                </StyledLayout>
            </StyledLayout>
        </StyledLayout>
    )
};
/* Prototypes */
Layout.Header = Header;

export default Layout;