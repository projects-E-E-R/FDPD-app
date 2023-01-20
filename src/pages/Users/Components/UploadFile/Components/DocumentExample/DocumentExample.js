/* eslint-disable no-unused-vars */
import { DownloadOutlined, LockOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { getCurrentYear } from 'utils/datetime';
import { StyledDocumentExample } from './StyledDocumentExample.styles';

const DocumentExample = () => {
  return (
      <StyledDocumentExample>
        <div className='button'>
            <Button
                className="button-example"
                $capitalize
                style={{
                    height:'40px'
                }}
                type="primary"
                color="green"
                >
                    <DownloadOutlined style={{ fontSize: '20px' }} /> Formato
                </Button>
        </div>
      </StyledDocumentExample>
  );
};

export default DocumentExample;