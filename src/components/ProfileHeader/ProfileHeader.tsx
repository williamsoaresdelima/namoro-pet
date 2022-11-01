import React from 'react';

import IProfileHeader from './IProfileHeader';
import * as S from './style'

function ProfileHeader() {
  return (
    <>
      <S.Container>
        <div className="img-container">
          <img
            src="https://s2.glbimg.com/qsj9O4LxSvKZop_4IaKlAr-4yvk=/e.glbimg.com/og/ed/f/original/2022/01/07/border-collie-pesquisa.jpeg"
            alt="Perfil"
          />
        </div>
        <div className="content-container">
          <div>
            <S.Title>@Zhara</S.Title>
            <S.Breed>Rotweiller</S.Breed>
          </div>
          <div>
            <S.Name>Zhara</S.Name><S.Divider> • </S.Divider><S.SubName>Mastigadora de Sofás</S.SubName>
          </div>
            <S.Description>
              Acima de tudo, é fundamental ressaltar que o aumento do diálogo entre os diferentes setores produtivos apresenta tendências no sentido de aprovar a manutenção dos métodos utilizados na avaliação de resultados.
            </S.Description>
        </div>
      <S.DescriptionMobile>
        Acima de tudo, é fundamental ressaltar que o aumento do diálogo entre os diferentes setores produtivos apresenta tendências no sentido de aprovar a manutenção dos métodos utilizados na avaliação de resultados.
      </S.DescriptionMobile>
      </S.Container>
    </>
  )
}

export default ProfileHeader