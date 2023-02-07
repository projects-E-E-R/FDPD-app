import React,{useEffect,useState} from 'react';
import {Card as SCard,Avatar,Rate} from 'antd';
import {StyledCard} from './Card.styles';
import Button from 'ui/Button/Button';
import { useTranslation } from 'react-i18next';
import {UnorderedListOutlined} from '@ant-design/icons';
import { useHistory } from 'react-router';
const Card = (props) => {
  const history = useHistory();
  const{id,name,request,constant,loading,value}=props;
  const {t}=useTranslation();
  const onClickHandler = (props) =>{
    if(request && constant){
      request(constant,props?.id);
    }
  }
  useEffect(()=>{
    if(value && props?.id == value?.form_id){
      history.push(props?.path,value);
    }
  },[value])
  return (
    <StyledCard size="medium" as={SCard} {...props} key={id}>
      <div className="container" onClick={() =>onClickHandler(props)}>
            <div className="top">
              <div className="icon">
                  <Avatar
                    style={{ 'borderRadius': '50%' }}
                    size={90}
                    icon={<UnorderedListOutlined />}
                  />
              </div>
            </div>
            <div className="bottom">
                <div className="name">{name}</div>
            </div>
      </div>
   </StyledCard>
  );
};

export default Card;
