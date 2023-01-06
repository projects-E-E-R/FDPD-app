/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { VIDEOS_SRC_URL } from 'settings/constants';
import { randomTo } from 'utils/numeric';
import Login from './Login';
/* import { useLocation } from 'react-router-dom'; */

const WrapperComponent = () => {
  /*  const urlLogin = window.location.pathname;
  const urlLoginFull = window.location.href; */

  /*   const location = useLocation(); */
  const videoSource = [
    'background_New_Actros2.mp4','background_New_Actros1.mp4'
  ];
  const getVideoSource = useCallback(() => {
    const videoIndex = randomTo(videoSource.length);
    const videoName = videoSource[videoIndex - 1];
    return `${VIDEOS_SRC_URL}${videoName}`;
  }, [videoSource]);

  return <Login  videoSource={getVideoSource()}/>;
};
export default WrapperComponent;
