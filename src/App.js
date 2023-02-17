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
import UserResponse from 'pages/FormReview/components/UserResponse/UserRespone';
import FormResponses from 'pages/FormReview/components/FormResponses/FormResponses';
import UserResponseHistory from 'pages/HistoryForms/components/UserResponse/UserResponseHistory';
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
            <Route path="/review" component={FormReview} />
            <Route path="/responses" component={FormResponses} />
            <Route path="/userResponses" component={UserResponse} />
            <Route path="/form" component={Form} />
            <Redirect to="/" />
            </> : 
            <>
            <Route exact path="/" component={Login} />
            <Route path="/form" component={Form} />
            <Route path="/forms" component={Forms} />
            <Route path="/history" component={HistoryForms} />
            <Route path="/profile" component={Profile} />
            <Route path="/responsesHistory" component={UserResponseHistory}/>
            <Redirect to="/" />
            </>
         }
           
          </Layout> : null 
          }
          <Route exact path="/" component={Login} />
          <Redirect to="/" />
        </Switch>
      </ConfigProvider>
    </ThemeProvider>
  );
}


export default App;