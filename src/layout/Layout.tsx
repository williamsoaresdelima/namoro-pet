import React from 'react'

import { GlobalStyles } from '../styles/GlobalStyles'
import Header from './Header'
import Footer from './Footer'
import * as S from './style'
import LoadingSpinner from '../components/Loading/Loading'

function Layout({children}: any) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div>
      {isLoading ? <LoadingSpinner/> : null}
      <GlobalStyles/>
      <Header/>
      <S.LayoutContainer>
        {children}
      </S.LayoutContainer>
      <Footer setLoading={setIsLoading}/>
    </div>
  )
}

export default Layout