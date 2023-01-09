import React from 'react';
import {Card as SCard,Avatar,Rate} from 'antd';
import {StyledCard} from './Card.styles';
import Button from 'ui/Button/Button';
import { useTranslation } from 'react-i18next';
import {UnorderedListOutlined} from '@ant-design/icons'
const Card = (props) => {
  const{id,name}=props;
  const {t}=useTranslation();
  const onClickHandler = () =>{
    console.log('Got to encuesta')
  }
  return (
    <StyledCard size="medium" as={SCard} {...props} key={id}>
      <div className="container" onClick={() =>onClickHandler('path')}>
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