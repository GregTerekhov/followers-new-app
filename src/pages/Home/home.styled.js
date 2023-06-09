import styled from '@emotion/styled';

export const HomePagePic = styled.img`
  width: 380px;
  margin: auto;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    width: 688px;
    margin-bottom: 56px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 96px;
    width: 1080px;
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-size: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 64px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 96px;
    margin-bottom: 96px;
  }
`;
