import React from "react";
import { Image } from "antd";
import { useShortAnswerInput } from "react-google-forms-hooks";
import {ErrorLabel,QuestionContainer,StyleImageContent} from './ShortAnswerInputStyle';
import Question from "components/Question/Question";
export default function ShortAnswerInput({ id,field }) {
  const { register, label,error,items,image_url,question_description, title } = useShortAnswerInput(id);
    return (
      items ? 
      <>
        {  items?.map((element,index) => {
            return  <Question  title={index == 0 ? label : ''} shadow loading={false} initSection={false}>
                      {element?.title}
                      {element?.image ?<QuestionContainer key={index}>   <StyleImageContent as={Image} width={"100%"} src={element?.image}> </StyleImageContent>
                      </QuestionContainer> : null }
                      {items?.length == index+1 ?    <QuestionContainer key={index}>  <input id="number" type="number"  style={{width:"20%"}}{...register()} />     <ErrorLabel>{error && "Este campo es requerido"}</ErrorLabel></QuestionContainer> : null} 
                    </Question>
     
        })
        }
      </>
      :
      question_description ?
      <Question command={false} title={title} shadow loading={false} initSection={false}>
      <QuestionContainer key={id}>
      <p>
      {question_description}
      </p>
      {image_url ? <QuestionContainer key={1}>
                      <StyleImageContent as={Image} width={"100%"} src={image_url} preview={false}>
                      </StyleImageContent>
                   </QuestionContainer> : null 
      }    
      <b>
        {label}
      </b>
      <div>
        <input id="number" type="number" {...register()} />
      </div>
      
      </QuestionContainer>
      </Question>
      :
      <>       
        <div>
        <input id="number" type="number" {...register()} />
        </div>
        <ErrorLabel>{error && "Este campo es requerido"}</ErrorLabel>
      </>
    )
  }
