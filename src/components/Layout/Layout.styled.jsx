import styled from '@emotion/styled';

export const Container = styled.div`
  margin: auto;
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

export const Navigation = styled.nav`
  padding: 0 24px;

  @media screen and (min-width: 768px) {
    padding: 0 36px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 23px 0;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
    gap: 40px;
  }

  @media screen and (min-width: 960px) {
    padding: 45px 0;
    gap: 56px;
  }
`;

export const NavItem = styled.li`
  &:last-child {
    @media screen and (min-width: 768px) {
      margin-left: auto;
    }
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
