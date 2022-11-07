import React from 'react'
import FeedItem from './FeedItem/FeedItem'

import IFeed from "./IFeed"
import * as S from "./style"

function Feed({ data } : { data : IFeed[] }) {
  
  return (
    <S.Container>
      {data.map((item, index) => {
        return (
          <a href={item.link} key={index} >
            <FeedItem imageURL={item.imageURL} title={item.title} />
          </a>
        )
      })}
    </S.Container>
  )
}

export default Feed