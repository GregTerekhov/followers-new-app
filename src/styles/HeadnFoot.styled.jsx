import styled from '@emotion/styled';

const sharedLayoutStyles = `
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

export const Header = styled.header`
  ${sharedLayoutStyles}
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
`;

export const FooterEl = styled.footer`
  ${sharedLayoutStyles}
`;
