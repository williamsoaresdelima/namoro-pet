import React from 'react'

import IInputField from './IInputField'
import * as S from './style';

function InputField({type, label, placeholder, pattern, callBackFunction}: IInputField) {
  return (
    <S.InputField>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} onChange={callBackFunction} pattern={pattern}/>
    </S.InputField>
  )
}

export default InputField