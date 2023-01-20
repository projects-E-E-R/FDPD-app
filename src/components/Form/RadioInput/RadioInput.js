import React from "react";
import { useRadioInput } from "react-google-forms-hooks";
import {Container,CheckboxContainer,ErrorLabel} from './RadioInputStyle';

const RadioInput = ({id})=> {
  const { options, customOption, error } = useRadioInput(id);
  return (
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
      )}
      <ErrorLabel>{error && "Este campo es requerido"}</ErrorLabel>
    </Container>
  );
}
export default RadioInput;