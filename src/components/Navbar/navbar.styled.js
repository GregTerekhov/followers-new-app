import styled from '@emotion/styled';
import { HiHome } from 'react-icons/hi';
import { RiQuillPenFill } from 'react-icons/ri';

export const NavList = styled.ul`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 960px) {
    padding: 32px 0;
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

const sharedNavIcons = `
width: 24px;
height: 24px;
padding: 2px;
border: 0.5px solid var(--primary-color);
border-radius: 50%;
`;

export const HomeIcon = styled(HiHome)`
  ${sharedNavIcons}
`;

export const TweetIcon = styled(RiQuillPenFill)`
  ${sharedNavIcons}
`;
