import styled from '@emotion/styled';

export const TweetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding: 0 30px;
  }
`;

export const NoTweetsMessage = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 2;
`;
