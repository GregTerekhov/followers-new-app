import {
  GitHub,
  Gmail,
  LinkedIn,
  SocialLinks,
  SocialLinksItem,
  SocialLinksList,
  WhatsUp,
} from './socialList.styled';

const SocialList = () => {
  return (
    <SocialLinksList>
      <SocialLinksItem>
        <SocialLinks href="https://ua.linkedin.com/in/greg-terekhov?trk=profile-badge">
          <LinkedIn />
          LinkedIn
        </SocialLinks>
      </SocialLinksItem>
      <SocialLinksItem>
        <SocialLinks href="https://github.com/GregTerekhov">
          <GitHub />
          GitHub
        </SocialLinks>
      </SocialLinksItem>
      <SocialLinksItem>
        <SocialLinks href="tel: +380935362602">
          <WhatsUp />
          What'sUp
        </SocialLinks>
      </SocialLinksItem>
      <SocialLinksItem>
        <SocialLinks href="mailto: gregterekhov@gmail.com">
          <Gmail />
          Email: gregterekhov@gmail.com
        </SocialLinks>
      </SocialLinksItem>
    </SocialLinksList>
  );
};

export default SocialList;
