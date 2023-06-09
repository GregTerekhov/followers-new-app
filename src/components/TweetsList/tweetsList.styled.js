import styled from '@emotion/styled';

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 56px;
  }

  @media screen and (min-width: 960px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 80px;
    gap: 30px;
  }
`;
