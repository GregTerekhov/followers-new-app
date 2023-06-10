import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  min-height: 75px;
  background: linear-gradient(
    114.99deg,
    rgba(71, 28, 169, 0.9) -0.99%,
    rgba(87, 54, 163, 0.9) 54.28%,
    rgba(75, 42, 153, 0.9) 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  @media (min-width: 768px) {
    min-height: 81px;
  }

  @media (min-width: 960px) {
    min-height: 108px;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 419px) {
    max-width: 419px;
    width: 100%;
  }

  @media screen and (min-width: 420px) {
    width: 420px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 960px) {
    width: 960px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const Section = styled.section`
  padding-top: 24px;
  padding-bottom: 24px;
  text-align: center;
  min-height: calc(100% - 80px);

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 56px;
    padding-bottom: 56px;
  }
`;
