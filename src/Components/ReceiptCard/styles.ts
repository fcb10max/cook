import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  padding: 16px;
  border: 1px solid #00000077;
  border-radius: 16px;
  cursor: pointer;
  transition: box-shadow 0.3s linear, transform 0.3s linear;

  :hover {
    box-shadow: 0 40px 20px 0 #000;
    transform: scale(1.015);
  }

  .img {
    img {
      width: 250px;
      height: 250px;
      object-fit: cover;
      border-radius: 16px;
    }
  }

  .title {
    height: 4em;
    h3 {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .rating {
    display: flex;
    align-self: flex-start;

    div {
      display: flex;
      align-items: center;

      :first-of-type {
        margin-right: 24px;
      }

      i {
        margin-right: 5px;
      }
    }
  }
`;
