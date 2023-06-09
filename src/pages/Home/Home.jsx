import { Helmet } from 'react-helmet-async';
import { HomePagePic, Title } from './home.styled';
import { HomeJoinBtn } from 'styles/button.styled';
import homePicture from 'assets/images/keyboard.jpg';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Homepage of Your tweetbook</title>
      </Helmet>
      <HomePagePic src={homePicture} alt="keyboard" />
      <Title>Read, write and enjoy!</Title>
      <HomeJoinBtn to="/tweets">Join us</HomeJoinBtn>
    </>
  );
};

export default Home;
