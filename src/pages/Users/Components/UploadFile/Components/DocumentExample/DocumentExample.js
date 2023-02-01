/* eslint-disable no-unused-vars */
import { DownloadOutlined, LockOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ExcelExport from 'components/Excel/ExcelExport/ExcelExport';
import React, { useEffect, useState } from 'react';
import { StyledDocumentExample } from './StyledDocumentExample.styles';

const DocumentExample = () => {

    const titleStyle = {
        font: {
          bold: true
        },
        fill: {
          patternType: "solid",
          fgColor: {
            rgb: "FFCCEEFF"
          }
        }
      }
  
      const columns = [
        {
          title: "Nombre",
          width: {
            wpx: 80
          },
          style: titleStyle
        },
        {
          title: "Apellido",
          width: {
            wpx: 80
          },
          style: titleStyle
        },
        {
          title: "Rut",
          width: {
            wch: 40
          },
          style: titleStyle
        },
        {
          title: "Carrera",
          width: {
            wch: 40
          },
          style: titleStyle
        },
        {
          title: "Género",
          width: {
            wch: 40
          },
          style: titleStyle
        },
        {
          title: "Correo",
          width: {
            wch: 40
          },
          style: titleStyle
        },
        
      ]
  
    const dataExample = [
        [
            { value: 'Nombre_1', },
            { value: 'Apellido_1', },
            { value: 'Rut_1', },
            { value: 'Carrera_1', },
            { value: 'Genero_1', },
            { value: 'Correo_1', },
        ],
        [
            { value: 'Nombre_2', },
            { value: 'Apellido_2', },
            { value: 'Rut_2', },
            { value: 'Carrera_2', },
            { value: 'Genero_2', },
            { value: 'Correo_2', },
        ],
        [
            { value: 'Nombre_3', },
            { value: 'Apellido_3', },
            { value: 'Rut_3', },
            { value: 'Carrera_3', },
            { value: 'Genero_3', },
            { value: 'Correo_3', },
        ],
        [
            { value: 'Nombre_4', },
            { value: 'Apellido_4', },
            { value: 'Rut_4', },
            { value: 'Carrera_4', },
            { value: 'Genero_4', },
            { value: 'Correo_4', },
        ]
    ]

  
    const excelExample = [{
      columns: columns,
      data: dataExample,
    }]

    const ExcelExample = () => {
        return (
            <Button>
                <ExcelExport
                    key="2"
                    data={excelExample}
                    sheetname={'file'}
                    filename={`file`}
                    element={
                    <div
                        className="button-example"
                        $capitalize>
                    <DownloadOutlined style={{ fontSize: '20px' }} /> Formato
                </div>
}
                />
            </Button>
        )
    }
    
    return (
      <StyledDocumentExample>
        <div className='button'>
            <ExcelExample></ExcelExample>
        </div>
      </StyledDocumentExample>
  );
};

export default DocumentExample;