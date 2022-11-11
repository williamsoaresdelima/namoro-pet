import styled from "styled-components";

export const ToolContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    min-width: 16px;
    margin-right: 8px;
    cursor: pointer;
  }

  @media (max-width: 460px) {
    svg {
      margin-right: 0;
      width: 30px;
    }

  }
`;