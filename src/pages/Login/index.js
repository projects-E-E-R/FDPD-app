/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import Login from './Login';
import Video from './Components/background_ucn_video.mov';
import useAccountStore from '../../store/common/account';
const WrapperComponent = () => {
  const {
    authenticate,token
  } = useAccountStore();
  const onFinish = (values) => {
    authenticate(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const getVideoSource = useCallback(() => {
    return Video;
  }, []);
  useEffect(()=>{
    console.log(token);
  },[token])

  return <Login  videoSource={getVideoSource()} onFinish={onFinish} onFinishFailed={onFinishFailed}/>;
};
export default WrapperComponent;
