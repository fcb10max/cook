import styled from "styled-components";

interface IFilterItemProps {
  active: boolean;
}

export const ReciptsC = styled.div`
  display: flex;
  justify-content: center;
`;

export const ReceiptsWrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReceiptsFilter = styled.div`
  width: 100%;
  display: flex;
  padding: 24px;
`;

export const ReceiptsFilterItem = styled.label<IFilterItemProps>`
  display: flex;
  align-items: center;
  font-size: 32px;
  margin: 0 24px 0 4px;
  text-decoration: ${({ active }) => (active ? "underline" : "none")};

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  img {
    width: 35px;
    height: 35px;
    object-fit: contain;
    margin-right: 5px;
  }
`;

export const ReceiptsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
