/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  StyledHome
} from './Home.styles';

const Home = () => {
  
  useEffect(() => {
    document.title = 'Bienvenido a FDPD App';
/*     setSidebarMenuOutlinedVisibility(false); */
  }, []);

  return (
    <StyledHome>
    <h1>HOLA</h1>
    </StyledHome>
  );
};

export default Home;
