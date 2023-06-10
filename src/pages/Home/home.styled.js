import styled from '@emotion/styled';
// import { css } from '@emotion/react';

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

  @media screen and (min-width: 1280px) {
    margin-bottom: 96px;
    width: 1080px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 64px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 96px;
    margin-bottom: 96px;
  }
  &.fade-enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: translateX(0%);
    transition: opacity 500ms, transform 500ms;
  }
`;
