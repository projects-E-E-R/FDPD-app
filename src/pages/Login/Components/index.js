/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react';
import xlsx from 'xlsx';
import { UploadOutlined } from '@ant-design/icons';
import { Form, Upload,message } from 'antd';
import {StyledForm } from './style';
import Button from 'ui/Button/Button';
import useStoreUploadExcel from './store';
const TransformToJson = () => {
  const {requestData,response,error} = useStoreUploadExcel(({requestData,response,error})=>({requestData,response,error}));
  const clearInputFile = (f)=>{
    if(f.value){
        try{
            f.value = ''; //for IE11, latest Chrome/Firefox/Opera...
        }catch(err){ 
          console.log(err);
        }
        if(f.value){ //for IE5 ~ IE10
            var form = document.createElement('form'),
                parentNode = f.parentNode, ref = f.nextSibling;
            form.appendChild(f);
            form.reset();
            parentNode.insertBefore(f,ref);
        }
    }
}
const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const headers = ["id", "Código", "Fecha de uso","Canjeado por"];
            const json = xlsx.utils.sheet_to_json(worksheet, { header: headers});
            //console.log(json);
            if(json?.length>0){
              //message.success(`Archivo subido exitosamente`);
              //console.log(json);
              let title = '';
              let wicardCodes = json?.map((row,index)=>{
                if(index!=0 && index!=1){
/*                   console.log(row["Canjeado por"])
                  console.log(row["Código"])
                  console.log(row["Fecha de uso"])
                  console.log(row["id"])  */
                  return {
                    id:row["id"],
                    code:row["Código"],
                    useDate:row["Fecha de uso"],
                    redeemed:row["Canjeado por"]
                  } 
                  
                }else if(index==0){
                  title=row;
                }
              }).filter((e)=> e != undefined);
              requestData(title?.id,wicardCodes);
            }else{
              message.error(`Error al subir el archivo`);
            }
        };
        reader?.readAsArrayBuffer(e.target.files[0]);
    }
}
useEffect(()=>{
  if(response){
    message.success(`Archivo subido exitosamente`);
  }else if(error){
    message.error(error ?? `Error al subir el archivo`);
  }
},[response,error]);
return (
    <>    
        <Form>
        <Form.Item>     
            <StyledForm>
                <Button
                className="Button2"
                $capitalize
                style={{
                    float: 'right',
                    width: '100%',
                    height:'40px'
                }}
                type="primary"
                color="green"
                >
                    <label className="custom-file-upload">
                    <input type="file"  onChange={readUploadFile}/>
                    <UploadOutlined style={{ fontSize: '20px' }} /> Subir Excel
                    </label>
                </Button>
        </StyledForm>         
        </Form.Item>
        </Form>
    </>
  );
};
export default TransformToJson;