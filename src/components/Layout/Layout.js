import React, { useEffect,useState } from 'react';
import AntdLayout from 'antd/lib/layout/layout';
import useAccountStore from 'store/common/account';
import { StyledLayout } from './Layout.styles';
import Header from './Header/Header';
import Body from './Body/Body';
import Content from './Body/children/Content/Content';
import Menu from './Header/children/Menu/Menu';
import SiderBar from './SiderBar/Sider';
import SiderBarMenu from './Header/options/SiderBarMenu/SideBarMenu';
import useSidebarState from 'store/common/sidebar';
const Layout = (props)=>{
    /* States */
    const { children, ...rest } = props;
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth
      });
      
    const {disableSider,setDisableSider} =useAccountStore();
    const { collapsed } = useSidebarState();
    /* Functions */
    const handleResize = () => {
        setDimensions({
        width: window.innerWidth
        });
      }
    const toggleToClose = () => setDisableSider(!disableSider);
      useEffect(()=>{
        toggleToClose();
      },[collapsed]);
      
    useEffect(() => {
      window.addEventListener("resize", handleResize, false);
    }, []);
    useEffect(()=>{
        if(dimensions.width <= 768){
            setDisableSider(true);
        }else if(dimensions.width > 768 && !collapsed){
            setDisableSider(false);
        }
    },[dimensions]);
    return (
        <StyledLayout className="layout" as={AntdLayout}>
            <Header>
                <Menu float='left'>
                    <Menu.Item key={1}>
                        <Menu className="mobile-menu">
                            <Menu.Item key={2}>
                                <SiderBarMenu {...rest} />
                            </Menu.Item>
                        </Menu>
                    </Menu.Item>
                </Menu>
                <Menu float='right'>
  
                </Menu>
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
Layout.Body = Body;
Layout.Sidebar = SiderBar;
Layout.Content = Content;

export default Layout;