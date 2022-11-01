import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsHouse } from 'react-icons/bs'
import Avatar from '../Avatar/Avatar'

import IToolBar from './IToolBar'
import * as S from './style'

function ToolBar({callBackFunction, isMobile = false}: IToolBar) {
  return (
    <S.ToolContainer>
      {!isMobile ? (
        <>
          <AiOutlineHeart size="16px"/>
          <BsHouse size="16px"/>
          <Avatar
            src="https://s2.glbimg.com/qsj9O4LxSvKZop_4IaKlAr-4yvk=/e.glbimg.com/og/ed/f/original/2022/01/07/border-collie-pesquisa.jpeg"
          />
        </>
      ) : (
        <>
          <AiOutlineHeart size="30px"/>
          <BsHouse size="30px"/>
          <Avatar
            src="https://s2.glbimg.com/qsj9O4LxSvKZop_4IaKlAr-4yvk=/e.glbimg.com/og/ed/f/original/2022/01/07/border-collie-pesquisa.jpeg"
          size="30px"
          />
        </>
      )}
      
    </S.ToolContainer>
  )
}


export default ToolBar
