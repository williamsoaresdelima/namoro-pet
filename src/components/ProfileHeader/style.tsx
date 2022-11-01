import styled from "styled-components";

export const Container = styled.div`
  margin-top: 74px;
  display: flex;
  padding: 16px;
  gap: 16px;
  background-color: var(--W3);
  border-radius: 8px;
  color: var(--W11);

  .img-container {
    > img {
      max-width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }

  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);

  @media (max-width: 600px) {
    .img-container {
      > img {
        max-width: 120px;
        height: 120px;
      }
    }
    .content-container {
      div:nth-child(2) {
        display: flex;
        flex-direction: column;
      }
    }
  }

  @media (max-width: 460px) {
    flex-direction: column;
    
    .img-container {
    > img {
      max-width: 100%;
      height: auto;
      border-radius: 6px;
    }
  }

    .content-container {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  /* @media (max-width: 460px)  */
`;

export const Divider = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: bolder;
`;

export const Breed = styled.div`
  font-size: 12px;
  color: var(--W8);
  margin-top: 4px;
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const SubName = styled.span`
  font-size: 12px;
  color: var(--W8);
`;

export const Description = styled.div`
  font-size: 14px;
  font-weight: 400;

  @media (max-width: 460px) {
    display: none
  }
`;

export const DescriptionMobile = styled.div`
  font-size: 14px;
  font-weight: 400;
  display: none;

  @media (max-width: 460px) {
    display: block;
  }
`;
