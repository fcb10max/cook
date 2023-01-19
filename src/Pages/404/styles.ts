import styled from "styled-components";
import NotFoundBg from "../../Assets/img/404.webp";

export const NotFoundC = styled.div`
  display: flex;
  justify-content: center;
`;

export const NFWrapper = styled.div`
  max-width: 1920px;
  min-height: 800px;
  width: 100%;
  height: 100%;
  background-image: url(${NotFoundBg});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    right: 23%;
    bottom: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: 5px 5px 10px #000;

    h1 {
      color: #fff;
      font-size: 100px;
      margin: 0;
    }
    
    h3 {
      color: #fff;
      font-size: 36px;
    }

    a {
      color: #fff;
      transition: color 0.3s linear;
      font-size: 24px;
      font-weight: 400;
      position: relative;
      text-shadow: 2px 2px 5px #000;

      ::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: 0;
        width: 0%;
        height: 2px;
        background-color: #fff;
        transition: width 0.3s linear, background-color 0.3s linear;
      }

      :hover {
        color: #ddd;
        ::after {
          width: 100%;
          background-color: #ddd;
          box-shadow: 2px 2px 5px #000;
        }
      }
    }
  }
`;
