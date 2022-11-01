import React from 'react'

import IAvatar from "./IAvatar"
import * as S from "./style"

function Avatar({size = '24px', src}: IAvatar) {
  
  return (
    <S.ImgContainer size={size}>
      <img src={src}/>
    </S.ImgContainer>
  )
}

export default Avatar