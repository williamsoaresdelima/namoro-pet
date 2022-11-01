import React from 'react'

import { GlobalStyles } from '../styles/GlobalStyles'
import Header from './Header'
import Footer from './Footer'
import * as S from './style'

function Layout({children}: any) {
  return (
    <div>
      <GlobalStyles/>
      <Header/>
      <S.LayoutContainer>
        {children}
      </S.LayoutContainer>
      <Footer/>
    </div>
  )
}

export default Layout