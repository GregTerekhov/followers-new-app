import {
  GitHub,
  Gmail,
  LinkedIn,
  SocialLinks,
  SocialLinksList,
} from './socialList.styled';

const SocialList = () => {
  return (
    <SocialLinksList>
      <li>
        <SocialLinks href="https://ua.linkedin.com/in/greg-terekhov?trk=profile-badge">
          <LinkedIn />
          LinkedIn
        </SocialLinks>
      </li>
      <li>
        <SocialLinks href="https://github.com/GregTerekhov">
          <GitHub />
          GitHub
        </SocialLinks>
      </li>
      <li>
        <SocialLinks href="mailto: gregterekhov@gmail.com">
          <Gmail />
          Email: gregterekhov@gmail.com
        </SocialLinks>
      </li>
    </SocialLinksList>
  );
};

export default SocialList;
