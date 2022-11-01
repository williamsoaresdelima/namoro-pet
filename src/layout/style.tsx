import styled from "styled-components";

export const LayoutContainer = styled.div`
  margin: 50px auto 0 auto;

  @media (max-width: 1300px) {
    width: 85%;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const TopHeaderContainer = styled.div`
  display: none;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;

  background-color: var(--W2);

  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  
  .header-content{
    margin: 0 auto;
    width: 1240px;
    display: flex;
    padding: 9px 0;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    @media (max-width: 1300px) {
      width: 85%;
    }
  
    @media (max-width: 800px) {
      width: 90%;
    }
  }

  @media (max-width: 460px) {
    display: block;
  }
  

`;

export const ButtomHeaderContainer = styled.div`
  display: none;
  width: 100%;
  position: fixed;
  height: 50px;

  background-color: var(--W2);

  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  
  .header-content{
    margin: 0 auto;
    width: 1240px;
    display: flex;
    padding: 9px 0;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1300px) {
      width: 85%;
    }
  
    @media (max-width: 800px) {
      width: 90%;
    }
  }

  @media (max-width: 460px) {
    top: initial;
    bottom: 0;
    display: block;
    .header-content {
      width: 70%;
      margin: 0 auto;

      > div {
        display: contents;
      }
    }
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;

  background-color: var(--W2);

  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.15);
  
  .header-content{
    margin: 0 auto;
    width: 1240px;
    display: flex;
    padding: 9px 0;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    @media (max-width: 1300px) {
      width: 85%;
    }
  
    @media (max-width: 800px) {
      width: 90%;
    }
  }

  @media (max-width: 460px) {
    display: none;
  }
`;


export const FooterContainer = styled.div`
  margin: 40px auto 0 auto;
  width: 1240px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .row:nth-child(2) {
    div:first-child{
      margin-right: 8px;
    }
  }

  .row {
    display: flex;
    flex: 1;
    flex-direction: row;
    
    :not(:first-child){
      margin-top: 16px;
    }

    div:nth-child(2) {
      margin-left: 8px;
    }

  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    a{
      color: var(--W9);
      cursor: pointer;

      :hover {
        color: var(--W11);
        text-decoration: underline;
      }
    }
  }
  
  @media (max-width: 1300px) {
    width: 85%;
  }
  
  @media (max-width: 800px) {
    width: 90%;
  }
  
  @media (max-width: 500px) {
    .row:nth-child(2) {
      div:first-child{
        margin-right: 0;
      }
    }

    .row {
      flex-direction: column;

      div:nth-child(2) {
        margin-left: 0;
        margin-top: 16px;
      }

    }
  }
`;

export const FooterTitle = styled.h1`
  font-size: 32px;
  text-align: center;
  color: var(--W11);
`;
