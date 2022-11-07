import React from 'react';

import IProfileHeader from './IProfileHeader';
import * as S from './style'

function ProfileHeader({ imageURL, title, name, breed, description, ocupation } : IProfileHeader) {
  return (
    <>
      <S.Container>
        <div className="img-container">
          <img
            src={imageURL}
            alt="Perfil"
          />
        </div>
        <div className="content-container">
          <div>
            <S.Title>{title}</S.Title>
            <S.Breed>{breed}</S.Breed>
          </div>
          <div>
            <S.Name>{name}</S.Name><S.Divider> • </S.Divider><S.SubName>{ocupation}</S.SubName>
          </div>
            <S.Description>
             {description}
            </S.Description>
        </div>
      <S.DescriptionMobile>
        {description}
      </S.DescriptionMobile>
      </S.Container>
    </>
  )
}

export default ProfileHeader