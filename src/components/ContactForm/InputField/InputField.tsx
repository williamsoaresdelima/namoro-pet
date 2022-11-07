import React from 'react'
import { isEmpty } from 'lodash';

import IInputField from './IInputField'
import * as S from './style';

function InputField({type, label, placeholder, getPropsField, id, formik}: IInputField) {
  const hasError: boolean = !isEmpty(formik.errors[id]);
  const isTextArea = type === 'textarea'

  return (
    <S.InputField contional={isTextArea} hasError={hasError}>
      <label>{label}</label>
      { isTextArea 
      ? (
        <textarea
          placeholder={placeholder}
          {...getPropsField(id)}
          id={id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[id]}
        />
      ): (
        <input
          type={type} placeholder={placeholder}
          {...getPropsField(id)}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[id]}
          id={id}
        />
      )}
      {hasError ? (
        <span>{formik.errors[id]}</span>
      ): null}
    </S.InputField>
  )
}

export default InputField