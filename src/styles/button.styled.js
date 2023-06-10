import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

const sharedButtonStyles = `
font-weight: 600;
font-size: 18px;
  width: 196px;
  padding: 14px 0;
  text-transform: uppercase;
  color: var(--primary-color);
  background-color: var(--following-btn-color-inactive);
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  transition: background-color 400ms ease-in-out;
  
  &:focus,
  &:hover {
    background-color: var(--following-btn-color-active);
  }
`;

const sharedButtonLinkStyles = `
display: block;
text-align: center;
text-decoration: none;
`;

const sharedButtonBtnStyles = `
border: none;
cursor: pointer;
`;

export const FollowingBtn = styled.button`
  ${sharedButtonStyles}
  ${sharedButtonBtnStyles}
`;

export const HomeJoinBtn = styled(Link)`
  ${sharedButtonStyles}
  ${sharedButtonLinkStyles}
  font-size: 20px;
  margin: auto;

  @media screen and (min-width: 1280px) {
    font-size: 40px;
    width: 600px;
    padding: 24px 0;
  }
`;

export const GoBackBtn = styled(Link)`
  ${sharedButtonStyles}
  ${sharedButtonLinkStyles}
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 56px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 80px;
  }
`;

export const LoadMoreBtn = styled.button`
  ${sharedButtonStyles}
  ${sharedButtonBtnStyles}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const NavigationLink = styled(NavLink)`
  ${sharedButtonStyles}
  ${sharedButtonLinkStyles}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  width: 104px;
  margin: auto;
  padding: 10px 0;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 150px;
    gap: 16px;
  }
`;
