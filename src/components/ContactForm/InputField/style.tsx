import styled from "styled-components";

interface props {
  contional: boolean,
  hasError: boolean,
}

export const InputField = styled.div<props>`
  width: 100%;
  max-height: ${props => props.contional ? 'auto' : '80px'};
  display: flex;
  flex-direction: column;
  
  > label {
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 4px 8px ;
    color: ${props => props.hasError ? 'red' : 'var(--W11)'};
  }

  > input, textarea{
    padding: 8px 12px;
    background-color: var(--W3);
    border: 1px solid ${props => props.hasError ? 'red' : 'var(--W4)'};
    border-radius: 4px;

    ::placeholder {
      color: ${props => props.hasError ? 'red' : 'initial'};
    }

    :focus {
      outline: none;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
      box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.2);
    }
  }

  > span {
    color: red;
    margin-left: 8px;
    margin-top: 2px;
    font-size: 12px;
  }
`;