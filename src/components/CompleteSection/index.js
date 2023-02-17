import React from 'react';
import { Image } from 'antd';
import { StyleImageContent,StyledContent } from './style';
import Section from 'components/Section/Section';
import Button from 'ui/Button/Button';

const CompleteSection = (props) => {
    const {history,cleanAll,cleanAllStoreForm,loading} = props;
    const handleSubmit = () => {
        cleanAll();
        cleanAllStoreForm();
        history.goBack('/');
    }
  return (
    <>       
        <Section  title={''}  loading={loading} shadow>
        <StyledContent className='container'>
        <h1>Gracias por responder esta encuesta</h1> 
        <StyleImageContent 
          as={Image}
          width={"100%"}
          preview={false} 
          src={'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ'}
        >
         </StyleImageContent>
            <Button
            $capitalize
            loading={loading}
            disabled={false}
            type="primary"
            color="primary"
            onClick={()=> handleSubmit()}
            style={{width:100,height:50,fontSize:16}}
            >
            {'Volver'}
            </Button>  
         </StyledContent>
         </Section>
    </>
  );
};


export default CompleteSection;
