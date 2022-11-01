import React from 'react'

import InputField from '../components/InputField/InputField'
import * as S from "./style"

function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterTitle>Entrar em contato</S.FooterTitle>
      <form>
        <div className='row'>
          <InputField
            type='text'
            label="Nome"
            placeholder='Nome completo'
          />
        </div>
        <div className='row'>
          <InputField
            type='email'
            label="Email"
            placeholder='Email@email.com'
          />
          <InputField
            type='tel'
            label="Celular(opcional)"
            placeholder='(11) 9 9999-9999'
            pattern="([0-9]{2})-[9]{1}-[0-9]{4}-[0-9]{4}"
          />
        </div>
        <div className='row'>
          <InputField
            type='textarea'
            label="Mensagem"
            placeholder='Mensagem'
          />
        </div>
      </form>
      <div className='links'>
        <a>Home</a>
        <a>Contato</a>
      </div>
    </S.FooterContainer>
  )
}

export default Footer