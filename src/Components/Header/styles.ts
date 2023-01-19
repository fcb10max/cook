import styled from "styled-components";

export const HeaderC = styled.header`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #fff;
`;

export const HeaderWrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 5%;
`;

export const HeaderLogo = styled.div``;

export const HeaderNavbar = styled.nav`
  ul {
    display: flex;
    padding: 12px 0 0;
    margin: 0;

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

  @media (max-width: 768px) {
    ul {
      li {
        a {
          font-size: 16px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    ul {
      li {
        &:not(:last-child) {
          padding-right: 16px;
        }
        a {
          font-size: 14px;
        }
      }
    }
  }
`;
