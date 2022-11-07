import React from 'react'
import styled from 'styled-components'
import IFeedItem from './IFeedItem'

function FeedItem({ imageURL, title } : IFeedItem) {
  return (
    <FeedContainer>
      <div className='img-container'>
        <img src={imageURL} alt={title} />
      </div>
      <div className='title-container'>
        <span/>
        <h1>{title}</h1>
      </div>
    </FeedContainer>
  )
}

const FeedContainer = styled.div`
  .img-container {
    padding: 8px;
    width: calc(100% - 16px);
    height: calc(100% - 16px);

    > img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }

  .title-container {
    position: relative;

    span {
      position: absolute;
      content: '';
      width: 14px;
      height: 6px;
      background-color: var(--W5);
      top: 6px;
      left: 8px;
    }

    h1 {
      color: var(--W11);
      text-transform: capitalize;
      margin-left: 24px;
    }
  }
`;


export default FeedItem