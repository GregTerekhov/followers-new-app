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

export const TweetsList = styled.ul`
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
