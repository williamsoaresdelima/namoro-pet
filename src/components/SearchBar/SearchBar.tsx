import React from 'react'
import { MdSearch } from 'react-icons/md'

import ISearchBar from './ISearchBar'
import * as S from './style'

function SearchBar({callBackFunction}: ISearchBar) {
  return (
    <S.SearchContainer>
      <MdSearch/>
      <S.SearchInput
        type="text"
        placeholder="Pesquisar"
        onChange={(event) => callBackFunction(event.target.value)}
      />
    </S.SearchContainer>
  )
}


export default SearchBar
