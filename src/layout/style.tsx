import styled from "styled-components";

export const LayoutContainer = styled.main`
  margin: 50px auto 0 auto;
  width: 1240px;

  @media (max-width: 1300px) {
    width: 85%;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
  
  @media (max-width: 460px) {
    width: 100%;
  }
`;

export const TopHeaderContainer = styled.div`
  display: none;
  width: 100%;
  z-index: 1000;
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
  z-index: 10000;

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
  z-index: 1000;
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
    z-index: 1000;
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
