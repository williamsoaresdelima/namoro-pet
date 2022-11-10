import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

import Avatar from '../Avatar/Avatar'
import IPost from './IPost'
import * as S from './style'

function Post({data} : {data : IPost}) {
  const image = data.image.childImageSharp.gatsbyImageData;

  return (
    <S.PostContainer>
      <S.ImgContainer>
        <GatsbyImage
          image={{ ...image }}
          alt={data.title}
        />
      </S.ImgContainer>
      <S.Content>
        <S.ContentHeader>
          <Avatar src={data.authorImage} size={'36px'}/>
          <h1>
            {data.postAuthor}
          </h1>
          <S.Date>
            {data.date}
          </S.Date>
        </S.ContentHeader>
        <S.ContentBody>
          <div dangerouslySetInnerHTML={{__html: data.html}}>
          </div>
        </S.ContentBody>
      </S.Content>
    </S.PostContainer>
  )
}

export default Post