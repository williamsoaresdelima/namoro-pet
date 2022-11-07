import React from 'react'
import Post from '../components/Post/Post'

import Layout from '../layout/Layout'

const today = new Date().toLocaleDateString('pt-BR')
const content = `
Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o início da atividade geral de formação de atitudes afeta positivamente a correta previsão do sistema de participação geral.
Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o início da atividade geral de formação de atitudes afeta positivamente a correta previsão do sistema de participação geral.
Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o início da atividade geral de formação de atitudes afeta positivamente a correta previsão do sistema de participação geral.
Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o início da atividade geral de formação de atitudes afeta positivamente a correta previsão do sistema de participação geral.
` 
const thisPost = {
  userName: 'Zhara',
  content: content,
  imageURL: 'https://s2.glbimg.com/qsj9O4LxSvKZop_4IaKlAr-4yvk=/e.glbimg.com/og/ed/f/original/2022/01/07/border-collie-pesquisa.jpeg',
  date: today,
}

function PagePost() {
  return (
    <Layout>
      <Post data={ thisPost } />
    </Layout>
  )
}

export default PagePost