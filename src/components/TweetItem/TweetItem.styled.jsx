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

export const AvatarWrapper = styled.div`
  position: relative;
  min-height: 80px;
  margin-bottom: 34px;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    height: 8px;
    width: 100%;
    display: block;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const Avatar = styled.img`
  position: absolute;
  display: block;
  z-index: 2;
  width: 80px;
  top: 50%;
  left: 50%;
  margin: auto;
  outline: 8px solid #ebd8ff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

export const TweetInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 26px;
`;

export const TweetInfo = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  color: #ebd8ff;
  text-transform: uppercase;
`;
