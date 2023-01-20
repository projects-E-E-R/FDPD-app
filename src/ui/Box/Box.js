import React from 'react';
import {Card as SCard,Avatar,Rate} from 'antd';
import {StyledBox} from './Box.styles';
/* import { useTranslation } from 'react-i18next'; */
import {UnorderedListOutlined} from '@ant-design/icons';

const Box = (props) => {
  const{key,title,description}=props;
/*   const {t}=useTranslation(); */

  return (
    <StyledBox size="medium" as={SCard} {...props} key={key}>
      <div className="container">
            <div className="top">
              <div className="title">
                {title}
              </div>
            </div>
            <div className='center'>
              {description}
            </div>
            <div className="bottom">
               
            </div>
      </div>
   </StyledBox>
  );
};

export default Box;
