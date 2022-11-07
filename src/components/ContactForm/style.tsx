import styled from "styled-components";

export const ContactContainer = styled.div`
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

  button {
    border: none;
    border-radius: 6px;
    color: var(--W3);
    background-color: green;
    padding: 8px 24px;
    font-size: 18px;

    :disabled {
      background-color: lightgray;
    }
  }
  
  @media (max-width: 1300px) {
    width: 85%;
  }
  
  @media (max-width: 800px) {
    width: 90%;
  }
  
  @media (max-width: 460px) {
    margin-bottom: 70px;

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

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  color: var(--W11);
`;
