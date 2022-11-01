import styled from "styled-components";

export const SearchInput = styled.input`
  padding: 8px 16px 8px 28px;
  border: none;
  border-radius: 6px;
  background-color: var(--W3);
  color: var(--W9);

  ::placeholder {
    color: var(--W6);
  }

  :focus {
    outline: none;
    -webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
    box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
  }

`;

export const SearchContainer = styled.div`
  position: relative;

  > svg {
    position: absolute;
    top: 8px;
    left: 6px;
    cursor: pointer;
  }
`;