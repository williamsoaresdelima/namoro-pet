import React from 'react'

import Avatar from '../Avatar/Avatar'
import IPost from './IPost'
import * as S from './style'

function Post({data} : {data : IPost}) {
  return (
    <S.PostContainer>
      <S.ImgContainer>
        <img src={data.imageURL}/>
      </S.ImgContainer>
      <S.Content>
        <S.ContentHeader>
          <Avatar src={data.imageURL} size={'36px'}/>
          <h1>
            {data.userName}
          </h1>
          <S.Date>
            {data.date}
          </S.Date>
        </S.ContentHeader>
        <S.ContentBody>
          <p>
            {data.content}
          </p>
        </S.ContentBody>
      </S.Content>
    </S.PostContainer>
  )
}

export default Post