/* eslint-disable no-unused-vars */
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { getCurrentYear } from 'utils/datetime';
import { StyledUploadFile } from './UploadFile.styles';
import TransformToJson from './Components/index';
import DocumentExample from './Components/DocumentExample/DocumentExample';
const UploadFile = (props) => {
  const {  videoSource } = props;
  return (
      <StyledUploadFile>
          <div className="info">
           {`Registre nuevos usuarios fácilmente a partir de un archivo Excel.`}
          </div>
          <div className='button-container'>
            <div className="example">
              <DocumentExample/>
            </div>
            <div className="form-container">
              <TransformToJson/>
            </div>
          </div>
      </StyledUploadFile>
  );
};

export default UploadFile;
