import styled from "styled-components";

interface ILogoCProps {
  fontSize?: number;
};

export const LogoC = styled.div<ILogoCProps>`
  font-family: "Dancing Script", cursive;
  font-size: ${({ fontSize }) => fontSize ?? 48}px;

  a {
    color: teal;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;
