import styled from "styled-components";

export const HeaderC = styled.header`
  display: flex;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 5%;
`;

export const HeaderLogo = styled.div`
`;

export const HeaderNavbar = styled.nav`
  ul {
    display: flex;

    li {
      &:not(:last-child) {
        padding-right: 32px;
      }
      a {
        font-size: 24px;
        color: #000;
        font-weight: 500;
        transition: color 0.3s linear;

        :hover {
          color: gray;
        }
      }
    }
  }
`;
