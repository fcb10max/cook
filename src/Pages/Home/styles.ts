import styled from "styled-components";
import HeroImg from "../../Assets/img/hero.jpg";

export const HomeC = styled.div`
  display: flex;
  justify-content: center;
`;

export const HomeWrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Hero = styled.section`
  min-height: 600px;
  height: 100vh;
  background-image: url(${HeroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  a {
    position: absolute;
    bottom: 20%;
    font-size: 32px;
    font-weight: 500;
    color: #000;
    background-color: #ffffff55;
    padding: 24px 48px;
    border-radius: 16px;
    border: 1px solid #fff;
    transition: background-color 0.3s linear, box-shadow 0.3s linear,
      transform 0.3s linear;
    box-shadow: 0 0 0 0 #000;

    :hover {
      background-color: #fff;
      box-shadow: 0 20px 40px 0 #000;
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    min-height: unset;
    background-size: 140% auto;
  }
`;

export const LastReceipts = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;