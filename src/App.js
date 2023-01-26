import React, { useEffect } from 'react';
import { ConfigProvider } from 'antd';
import Network from 'ui/Network/Network';
import { Switch, Redirect, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTheme } from 'hooks/themeHook';
import { useLang } from 'hooks/langHook';
import Login from 'pages/Login';
import Form from 'pages/Form/Form';
import Forms from 'pages/Forms/Forms';
import Layout from 'components/Layout/Layout';
import useAccountStore from 'store/common/account';
import Users from 'pages/Users/Users';
function App() {
  const [theme] = useTheme();
  const [lang] = useLang();
  const {token, isAdmin, typeUser} = useAccountStore();
  
  useEffect(()=>{

    console.log('isAdmin: ', isAdmin)
  },[isAdmin])
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider locale={lang}>
        <Network />
        <Switch>
          {
            !token ?
              isAdmin ? (
              <Layout>
                {/* <Route exact path="/" component={Login} /> */}
                <Route path="/users" component={Users} />
              </Layout>
              ) : 
              <Layout>
                {/* <Route exact path="/" component={Login} /> */}
                <Route path="/form" component={Form} />
                <Route path="/forms" component={Forms} />
              </Layout>
            : null
          }
          <Route exact path="/" component={<Login/>} />
          <Redirect to="/" />
        </Switch>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
