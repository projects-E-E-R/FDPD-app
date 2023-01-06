/* eslint-disable no-unused-vars */
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { getCurrentYear } from 'utils/datetime';
import { StyledLogin } from './Login.styles';
import TransformToJson from './Components/index';
import BackgroundVideo from 'components/BackgroundVideo';
const Login = (props) => {
  const {  videoSource } = props;
  return (
    <BackgroundVideo videoSource={videoSource}>
            <div class="container mx-auto mt-5">
          <button>
              Botón con Tail
          </button>
        </div>
      <StyledLogin>
      <div className="login-container">
      
      </div>

      </StyledLogin>
      </BackgroundVideo>
  );
};

export default Login;

/* 
        <div className="login-container">
        <div class="container mx-auto mt-5">
          <button class='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>
              Botón con Tail
          </button>
        </div>
          <div className="logo-container">
            <div className="logo copiloto" />
          </div>
          <div className="form-container">
          <TransformToJson/>
          </div>
          <div className="footer-container">
          <span>
              © {getCurrentYear()} App by Kaufmann |
              contacto@kaufmann.com
            </span>
          </div>
        </div>



*/
