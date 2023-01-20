import React from "react";
import { Image } from "antd";
import { useShortAnswerInput } from "react-google-forms-hooks";
import {ErrorLabel,QuestionContainer,StyleImageContent} from './ShortAnswerInputStyle';
import Question from "components/Question/Question";
export default function ShortAnswerInput({ id,field }) {
  const { register, label,error,items } = useShortAnswerInput(id);
    return (
      items ? 
      <>
        {  items?.map((element,index) => {
            return  <Question  title={''} shadow loading={false} initSection={false}>
                      {element?.title}
                      {element?.image ?<QuestionContainer key={index}>   <StyleImageContent as={Image} width={"100%"} src={element?.image}> </StyleImageContent>
                      </QuestionContainer> : null }
                      {items?.length == index+1 ?    <QuestionContainer key={index}>  <input style={{width:"20%"}}type='text' {...register()} />     <ErrorLabel>{error && "Este campo es requerido"}</ErrorLabel></QuestionContainer> : null} 
                    </Question>
     
        })
        }
      </>
      :
      <>       
      <div>
        <input type='text' {...register()} />
      </div>
      <ErrorLabel>{error && "Este campo es requerido"}</ErrorLabel>
      </>
    )
  }
