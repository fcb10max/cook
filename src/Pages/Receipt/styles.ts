import styled from "styled-components";

export const ReceiptC = styled.div`
  display: flex;
  justify-content: center;
`;

export const ReceiptWrapper = styled.div`
  max-width: 1920px;
  padding: 24px;
`;

export const ReceiptImg = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: auto;
    height: 100%;
    border-radius: 12px;
  }
`;

export const ReceiptInfo = styled.div`
  h3 {
    margin: 24px 0 0;
    font-size: 18px;
    font-weight: 600;
  }
`;
export const ReceiptTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
`;
export const ReceiptDesc = styled.p`
  margin: 0 auto;
  width: 66%;
`;
export const ReceiptContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ul {
    padding: 0;
  }
`;
export const ReceiptTime = styled.p`
  text-align: center;
`;
export const ReceiptRatings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: flex;

    div {
      display: flex;
      align-items: center;
      margin: 12px 16px;

      i {
        margin-right: 5px;
      }
    }
  }
`;
