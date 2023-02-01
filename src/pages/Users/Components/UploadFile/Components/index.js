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

const career_data = [
  {
    id: 1,
    name: "Ingeniería Civil en Computación e Informática",
    short_name: "ICCI"
  },
  {
    id: 2,
    name: "Ingeniería Civil Industrial",
    short_name: "ICI"
  }
]

const gender_data = [
  {
    id: 1,
    name: "Masculino",
    char: "M",
  },
  {
    id: 2,
    name: "Femenino",
    char: "F",
  },
]

const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const headers = ["Nombre",	"Apellido",	"Rut",	"Carrera",	"Género",	"Correo"];
            const json = xlsx.utils.sheet_to_json(worksheet, { header: headers});
            console.log(json);
            if(json?.length>0){
              let title = '';
              let usersData = json?.map((row,index)=>{
                if(index!=0){
                  const career_name = "ICCi"
                  //const career_name = row["Carrera"]
                  const gender_name = "MascUliNo"
                  //const gender_name = row["Género"]

                  const career = career_data.find(career => (career_name?.toUpperCase()?.match(career.name?.toUpperCase()) || career_name?.toUpperCase()?.match(career.short_name?.toUpperCase())))
                  
                  const gender = gender_data.find(gender => (gender_name?.toUpperCase()?.match(gender.name?.toUpperCase()) || gender_name?.toUpperCase() == gender.char?.toUpperCase()))

                  return {
                    first_name: row["Nombre"],
                    last_name: row["Apellido"],
                    rut: row["Rut"],
                    career_id: career?.id,
                    gender_id: gender?.id,
                    email: row["Correo"],
                  } 
                  
                }else if(index==0){
                  title=row;
                }
              }).filter((e)=> e != undefined);
              console.log(usersData)
              requestData(title?.id,usersData);
            }else{
              message.error(`Error al subir el archivo`);
            }
        };
        reader?.readAsArrayBuffer(e.target?.files?.[0]);
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
              <div className='button'>
                <Button
                className="button-excel"
                $capitalize
                style={{
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

              </div>
        </StyledForm>         
        </Form.Item>
        </Form>
    </>
  );
};
export default TransformToJson;