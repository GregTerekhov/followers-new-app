import styled from '@emotion/styled';

export const TweetWrap = styled.li`
  width: 380px;
  padding: 20px 0 36px;
  text-align: center;
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoGoIt = styled.img`
  position: relative;
  left: 20px;
`;

export const PictureQuestion = styled.img`
  position: relative;
  top: -14px;
  margin: auto;

  @media screen and (min-width: 768px) {
    top: 0;
  }
`;

export const TweetInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 26px;
`;

export const TweetInfo = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: var(--following-btn-color-inactive);
  text-transform: uppercase;
`;
