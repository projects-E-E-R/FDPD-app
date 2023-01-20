import React from "react";

import { useShortAnswerInput } from "react-google-forms-hooks";
import {ErrorLabel} from './ShortAnswerInputStyle';
export default function ShortAnswerInput({ id }) {
  const { register, label,error } = useShortAnswerInput(id);
  
    return (
      <>
      <div>
        <input type='text' {...register()} />
      </div>
      <ErrorLabel>{error && "Este campo es requerido"}</ErrorLabel>
      </>
    )
  }
