import styled from '@emotion/styled';

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
