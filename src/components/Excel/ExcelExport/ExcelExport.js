import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactExport from 'react-data-export';
import { Menu, Space } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const ExcelExport = ({ data, sheetname, filename, element, isMenuItem, ...rest }) => {
  const { t } = useTranslation();

  const defaultElement = (
    <Space style={{ display: 'inline-flex' }}>
      <CloudDownloadOutlined />
      {t('common.exportFile')}
    </Space>
  );

  return (
    <>
      { isMenuItem ?
        (
          <Menu.Item {...rest}>
            <ExcelFile element={element || defaultElement} filename={filename} fileExtension="xlsx">
              <ExcelSheet dataSet={data} name={sheetname} />
            </ExcelFile>
          </Menu.Item>
        ) :
        (
          <ExcelFile element={element || defaultElement} filename={filename} fileExtension="xlsx">
            <ExcelSheet dataSet={data} name={sheetname} />
          </ExcelFile>
        )
      
      }
    </>
  );
};

export default React.memo(ExcelExport);
