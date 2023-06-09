import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  min-height: 80px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  @media screen and (min-width: 768px) {
    min-height: 112px;
  }

  @media screen and (min-width: 1200px) {
    min-height: 144px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100vw;

  @media screen and (min-width: 420px) {
    width: 420px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 960px) {
    width: 960px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Section = styled.section`
  padding: 24px 0;
  text-align: center;
  min-height: calc(100% - 80px);

  @media screen and (min-width: 768px) {
    padding: 56px 0;
  }

  @media screen and (min-width: 1200px) {
    padding: 96px 0;
  }
`;
