import styled from "styled-components";

export const InputField = styled.div`
  width: 100%;
  max-height: 80px;
  display: flex;
  flex-direction: column;
  
  > label {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 4px 8px ;
    color: var(--W11);
  }

  > input {
    padding: 8px 12px;
    background-color: var(--W3);
    border: 1px solid var(--W4);
    border-radius: 4px;

    :focus {
      outline: none;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
      box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
    }
  }

`;