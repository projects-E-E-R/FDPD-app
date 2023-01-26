import Question from "components/Question/Question";
import React from "react";
import {Image} from 'antd';
import { useRadioInput } from "react-google-forms-hooks";
import {Container,CheckboxContainer,ErrorLabel,QuestionContainer,StyleImageContent} from './RadioInputStyle';

const RadioInput = ({id})=> {
  const { options, customOption, error,items,label } = useRadioInput(id);
  return (
    items ? (<>
      {
        items?.map((element,index)=>{
          return <Question title={index == 0 ? label : ''} shadow loading={false} initSection={false} key={index}>
          {element?.title}
          {element?.image ?<QuestionContainer key={index}>   <StyleImageContent as={Image} width={"100%"} src={element?.image}> </StyleImageContent></QuestionContainer> : null }
         {element?.options && 
          options.map((o) => (
            <CheckboxContainer key={o.id}>
              <input type="radio" id={o.id} {...o.registerOption()} />
              <label htmlFor={o.id}>{o.label}</label>
            </CheckboxContainer>
          )) 
         }
         {
          element?.options &&  customOption && (
        <CheckboxContainer>
          <input
            type="radio"
            id={customOption.id}
            {...customOption.registerOption()}
          />
          <label htmlFor={customOption.id}>Outra</label>
          <input
            type="text"
            placeholder="Resposta aqui"
            {...customOption.registerCustomInput()}
          />
        </CheckboxContainer>
          )
        }
        { element?.options && <ErrorLabel>{error && "Este campo es requerido"}</ErrorLabel>}                
          </Question>
        })
      }
    </>) : (
    <Container>
      {options.map((o) => (
        <CheckboxContainer key={o.id}>
          <input type="radio" id={o.id} {...o.registerOption()} />
          <label htmlFor={o.id}>{o.label}</label>
        </CheckboxContainer>
      ))}
      {customOption && (
        <CheckboxContainer>
          <input
            type="radio"
            id={customOption.id}
            {...customOption.registerOption()}
          />
          <label htmlFor={customOption.id}>Outra</label>
          <input
            type="text"
            placeholder="Resposta aqui"
            {...customOption.registerCustomInput()}
          />
        </CheckboxContainer>
      )
      }
      <ErrorLabel>{error && "Este campo es requerido"}</ErrorLabel>
    </Container>)
  );
}
export default RadioInput;