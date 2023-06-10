import styled from '@emotion/styled';

export const FooterEl = styled.footer`
  padding-top: 32px;
  padding-bottom: 16px;
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

  @media screen and (min-width: 1280px) {
    min-height: 144px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;

export const TextCopy = styled.p`
  color: var(--following-btn-color-inactive);
  font-size: 12px;

  @media screen and (min-width: 960px) {
    font-size: 16px;
  }
`;
