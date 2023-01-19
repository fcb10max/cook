import styled from "styled-components";

export const AboutC = styled.div`
  display: flex;
  justify-content: center;
`;

export const AboutWrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  padding: 16px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutImg = styled.div`
  position: relative;
  float: left;
  margin: 16px;
  img {
    height: 600px;
    width: auto;
    border-radius: 16px;
  }

  @media (max-width: 567px) {
    float: unset;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const AboutText = styled.article`
  h1 {
    font-size: 36px;
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 24px;
    }

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
    }
  }
`;
