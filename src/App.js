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
import HistoryForms from 'pages/HistoryForms/index';
import Layout from 'components/Layout/Layout';
import useAccountStore from 'store/common/account';
import Users from 'pages/Users/Users';
import Profile from  'pages/Profile'
import FormReview from 'pages/FormReview/FormReview';
function App() {
  const [theme] = useTheme();
  const [lang] = useLang();
  const {token, isAdmin} = useAccountStore();
  
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider locale={lang}>
        <Network />
        <Switch>
         {token ? <Layout>
         {
          isAdmin ? 
            <>
            <Route path="/users" component={Users} />
            <Route path="/form-review" component={Forms} />
            <Route path="/form" component={Form} />
            <Redirect to="/index.html" />
            </> : 
            <>
            <Route exact path="/index.html" component={Login} />
            <Route path="/form" component={Form} />
            <Route path="/forms" component={Forms} />
            <Route path="/history" component={HistoryForms} />
            <Route path="/profile" component={Profile} />
            <Redirect to="/index.html" />
            </>
         }
           
          </Layout> : null 
          }
          <Route exact path="/index.html" component={Login} />
          <Redirect to="/index.html" />
        </Switch>
      </ConfigProvider>
    </ThemeProvider>
  );
}


export default App;