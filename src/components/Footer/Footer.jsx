import SocialList from 'components/SocialList/SociaList';
import { Container } from 'layout/layout.styled';
import { FooterEl, TextCopy, Wrapper } from './footer.styled';

const Footer = () => {
  return (
    <FooterEl>
      <Container>
        <Wrapper>
          <SocialList />
          <TextCopy>Copyright &copy; 2023 Greg Terekhov</TextCopy>
        </Wrapper>
      </Container>
    </FooterEl>
  );
};

export default Footer;
