import styled from '@emotion/styled';
import { SiLinkedin, SiGithub, SiGmail, SiWhatsapp } from 'react-icons/si';

export const SocialLinksList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
  }

  @media screen and (min-width: 960px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;

export const SocialLinksItem = styled.li`
  @media screen and (max-width: 767px) {
    & + & {
      margin-top: 16px;
    }
  }
`;

export const SocialLinks = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--following-btn-color-inactive);
  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: var(--following-btn-color-active);
  }

  @media screen and (min-width: 960px) {
    font-size: 20px;
  }
`;

const sharedSocialIcons = `
  border: 0.5px solid var(--following-btn-color-inactive);
  border-radius: 50%;
  padding: 8px;
  width: 40px;
  height: 40px;
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

export const WhatsUp = styled(SiWhatsapp)`
  ${sharedSocialIcons}
`;
