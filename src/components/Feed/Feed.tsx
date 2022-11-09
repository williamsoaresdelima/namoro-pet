import React from 'react'
import FeedItem from './FeedItem/FeedItem'

import IFeed from "./IFeed"
import * as S from "./style"

function Feed({ data } : { data : IFeed[] }) {

  const array = Object.keys(data);
  const result = array.map((key: any) => {
    return data[key];
  });
  
  return (
    <S.Container>
      {result.map((item, index) => {
        if (item.feedImageURL !== null) {
          return (
              <a href={item.feedLink} key={index} >
              <FeedItem imageURL={item.feedImageURL} title={item.feedTitle} />
            </a>
          )
        } 
      })
      }
    </S.Container>
  )
}

export default Feed