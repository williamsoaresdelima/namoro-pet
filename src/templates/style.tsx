import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h2 {
    text-align: left;
    margin-top: 20px;
    margin-bottom: -10px;
  }

  @media(max-width: 460px) {
    > h2 {
      margin-left: 16px;
    }
  }
`;