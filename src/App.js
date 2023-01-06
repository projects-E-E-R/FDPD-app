import React from 'react';
import { ConfigProvider } from 'antd';
import Network from 'ui/Network/Network';
import { Switch, Redirect, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTheme } from 'hooks/themeHook';
import { useLang } from 'hooks/langHook';
import Login from 'pages/Login';
function App() {
  const [theme] = useTheme();
  const [lang] = useLang();
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider locale={lang}>
        <Network />
        <Switch>
          <Route exact path="/" component={Login} />
          <Redirect to="/" />
        </Switch>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
