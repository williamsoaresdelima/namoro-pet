import styled from "styled-components";

interface props {
  size?: string | number;
}

export const ImgContainer = styled.div<props>`
  width: auto;
  height: ${p => p.size};

  > img {
    width: ${p => p.size};
    height: ${p => p.size};
    border-radius: 50%;
    cursor: pointer;
  }

  @media (max-width: 460px) {
    width: min-content;
  }
`;