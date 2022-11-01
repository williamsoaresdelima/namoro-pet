import React from 'react'

import SearchBar from '../components/SearchBar/SearchBar'
import ToolBar from '../components/ToolBar/ToolBar';
import * as S from './style'

function Header() {
  
  function returnValue(value: string) {
    console.log(value);
  }
  
  return (
    <>
      <S.HeaderContainer>
        <div className="header-content">
          <h1>Namoro-Pet</h1>
          <SearchBar callBackFunction={returnValue}/>
          <div className="tool-bar">
              <ToolBar callBackFunction={returnValue}/>
          </div>
        </div>
      </S.HeaderContainer>
      <S.TopHeaderContainer>
        <div className="header-content">
          <h1>Namoro-Pet</h1>
          <SearchBar callBackFunction={returnValue}/>
        </div>
      </S.TopHeaderContainer>
      <S.ButtomHeaderContainer>
        <div className="header-content">
          <ToolBar callBackFunction={returnValue} isMobile={true}/>
        </div>
      </S.ButtomHeaderContainer>
    </>
  )
}

export default Header