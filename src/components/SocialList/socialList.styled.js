import styled from '@emotion/styled';
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si';

export const SocialLinksList = styled.ul`
  display: flex;
  gap: 24px;
`;

export const SocialLinks = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ebd8ff;
  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: #5cd3a8;
  }
`;

const sharedSocialIcons = `
  border: 0.5px solid #ebd8ff;
  border-radius: 50%;
  padding: 8px;
  width: 20px;
  height: 20px;
`;

export const Gmail = styled(SiGmail)`
  ${sharedSocialIcons}
`;

export const LinkedIn = styled(SiLinkedin)`
  ${sharedSocialIcons}
`;

export const GitHub = styled(SiGithub)`
  ${sharedSocialIcons}
`;
